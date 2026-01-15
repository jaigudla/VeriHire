import { ethers } from 'ethers';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust path to point to smart-contracts/artifacts
// Assuming backend/src/services -> backend/ -> root -> smart-contracts
const ARTIFACTS_PATH = path.resolve(__dirname, '../../../../smart-contracts/artifacts/contracts');

export class BlockchainService {
    private provider: ethers.JsonRpcProvider;
    private wallet: ethers.Wallet | null = null;
    private credentialStoreContract: ethers.Contract | null = null;
    private issuerRegistryContract: ethers.Contract | null = null;

    // TODO: Move to environment variables
    private RPC_URL = process.env.RPC_URL || 'http://127.0.0.1:8545';
    private PRIVATE_KEY = process.env.PRIVATE_KEY;

    // Deployed addresses (mock/placeholder for now unless we deploy)
    private CREDENTIAL_STORE_ADDRESS = process.env.CRED_STORE_ADDR || "";
    private ISSUER_REGISTRY_ADDRESS = process.env.ISSUER_REGISTRY_ADDR || "";

    constructor() {
        this.provider = new ethers.JsonRpcProvider(this.RPC_URL);

        if (this.PRIVATE_KEY) {
            this.wallet = new ethers.Wallet(this.PRIVATE_KEY, this.provider);
        }

        this.initializeContracts();
    }

    private initializeContracts() {
        if (!this.CREDENTIAL_STORE_ADDRESS || !this.ISSUER_REGISTRY_ADDRESS) {
            console.warn("BlockchainService: Contract addresses not set. Skipping contract init.");
            return;
        }

        try {
            // Dynamically load ABIs
            const storePath = path.join(ARTIFACTS_PATH, 'CredentialStore.sol/CredentialStore.json');
            const registryPath = path.join(ARTIFACTS_PATH, 'IssuerRegistry.sol/IssuerRegistry.json');

            const storeAbi = JSON.parse(fs.readFileSync(storePath, 'utf8')).abi;
            const registryAbi = JSON.parse(fs.readFileSync(registryPath, 'utf8')).abi;

            const signerOrProvider = this.wallet || this.provider;

            this.credentialStoreContract = new ethers.Contract(
                this.CREDENTIAL_STORE_ADDRESS,
                storeAbi,
                signerOrProvider
            );

            this.issuerRegistryContract = new ethers.Contract(
                this.ISSUER_REGISTRY_ADDRESS,
                registryAbi,
                signerOrProvider
            );

            console.log("BlockchainService: Contracts initialized.");

        } catch (error) {
            console.error("BlockchainService: Error loading content artifacts:", error);
        }
    }

    async getCredential(hash: string) {
        const contract = this.credentialStoreContract;
        if (!contract) throw new Error("Contracts not initialized");
        return await (contract as any).credentials(hash);
    }

    // Example wrapper for transaction
    async issueCredential(hash: string) {
        const contract = this.credentialStoreContract;
        if (!contract || !this.wallet) throw new Error("Contracts not initialized or no wallet");
        const tx = await (contract as any).issueCredential(hash);
        return tx.wait();
    }
}

export const blockchainService = new BlockchainService();
