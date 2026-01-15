import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("CredentialStore", function () {
    async function deployFixture() {
        const [owner, otherAccount] = await ethers.getSigners();

        // Deploy Registry first
        const IssuerRegistry = await ethers.getContractFactory("IssuerRegistry");
        const registry = await IssuerRegistry.deploy();

        // Deploy Store
        const CredentialStore = await ethers.getContractFactory("CredentialStore");
        const credentialStore = await CredentialStore.deploy(await registry.getAddress());

        return { credentialStore, registry, owner, otherAccount };
    }

    describe("Deployment", function () {
        it("Should set the right registry", async function () {
            const { credentialStore, registry } = await loadFixture(deployFixture);
            expect(await credentialStore.registry()).to.equal(await registry.getAddress());
        });
    });

    describe("Issuance", function () {
        it("Should allow authorized issuer to issue", async function () {
            const { credentialStore, registry, owner } = await loadFixture(deployFixture);

            // Register and approve owner as issuer
            await registry.registerIssuer("Test Uni", "test.edu");
            await registry.approveIssuer(owner.address);

            const hash = ethers.id("test-document");

            await expect(credentialStore.issueCredential(hash))
                .to.emit(credentialStore, "CredentialIssued");
            // omitted args check for timestamp simplicity or use .withArgs(hash, owner.address, anyValue)
        });

        it("Should fail if not authorized", async function () {
            const { credentialStore, otherAccount } = await loadFixture(deployFixture);
            const hash = ethers.id("fake-doc");
            await expect(credentialStore.connect(otherAccount).issueCredential(hash))
                .to.be.revertedWith("Only authorized issuer can call this");
        });
    });
});
