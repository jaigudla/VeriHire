// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./IssuerRegistry.sol";

contract CredentialStore {
    struct Credential {
        address issuer;
        bytes32 contentHash;
        uint256 timestamp;
        bool isValid;
    }

    mapping(bytes32 => Credential) public credentials;
    IssuerRegistry public registry;
    // address public owner; // Removed owner

    event CredentialIssued(bytes32 indexed contentHash, address indexed issuer, uint256 timestamp);
    event CredentialRevoked(bytes32 indexed contentHash, address indexed issuer);

    modifier onlyIssuer() {
        require(registry.isIssuer(msg.sender), "Only authorized issuer can call this");
        _;
    }

    constructor(address _registry) {
        registry = IssuerRegistry(_registry);
    }

    // Removed authorizeIssuer/revokeIssuer as they are handled in Registry

    function issueCredential(bytes32 _hash) external onlyIssuer {
        require(credentials[_hash].timestamp == 0, "Credential already exists");
        
        credentials[_hash] = Credential({
            issuer: msg.sender,
            contentHash: _hash,
            timestamp: block.timestamp,
            isValid: true
        });

        emit CredentialIssued(_hash, msg.sender, block.timestamp);
    }

    function revokeCredential(bytes32 _hash) external onlyIssuer {
        require(credentials[_hash].issuer == msg.sender, "Only issuer can revoke");
        require(credentials[_hash].isValid, "Credential already revoked or invalid");

        credentials[_hash].isValid = false;
        emit CredentialRevoked(_hash, msg.sender);
    }

    function verifyCredential(bytes32 _hash) external view returns (bool, address, uint256) {
        Credential memory cred = credentials[_hash];
        return (cred.isValid, cred.issuer, cred.timestamp);
    }
}
