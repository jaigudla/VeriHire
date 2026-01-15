// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract IssuerRegistry {
    struct Issuer {
        string name;
        string domain;
        bool isApproved;
        uint256 registeredAt;
    }

    mapping(address => Issuer) public issuers;
    address public owner;

    event IssuerRegistered(address indexed issuer, string name);
    event IssuerApproved(address indexed issuer);
    event IssuerRevoked(address indexed issuer);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerIssuer(string memory _name, string memory _domain) external {
        require(bytes(issuers[msg.sender].name).length == 0, "Already registered");
        issuers[msg.sender] = Issuer({
            name: _name,
            domain: _domain,
            isApproved: false,
            registeredAt: block.timestamp
        });
        emit IssuerRegistered(msg.sender, _name);
    }

    function approveIssuer(address _issuer) external onlyOwner {
        require(bytes(issuers[_issuer].name).length > 0, "Issuer not registered");
        issuers[_issuer].isApproved = true;
        emit IssuerApproved(_issuer);
    }

    function revokeIssuer(address _issuer) external onlyOwner {
        issuers[_issuer].isApproved = false;
        emit IssuerRevoked(_issuer);
    }

    function isIssuer(address _issuer) external view returns (bool) {
        return issuers[_issuer].isApproved;
    }
}
