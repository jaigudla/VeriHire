# VeriHire
### Next-Gen Decentralized Credential Verification Platform

> **Eliminating credential fraud and reducing verification time from days to seconds using Blockchain and IPFS.**

---

## 📖 Project Overview

**VeriHire** is a full-stack distributed application (dApp) designed to solve the "Trust Gap" in recruitment. Traditional background checks are slow, expensive, and prone to manual errors. VeriHire creates a tamper-proof infrastructure where educational and professional credentials can be issued, stored, and verified instantly without intermediaries.

By leveraging **Ethereum/Polygon** for immutable record-keeping and **IPFS** for decentralized storage, VeriHire ensures that once a credential is created by a legitimate issuer, its authenticity is mathematically guaranteed forever.

## � The Problem & Solution

### The Challenge
*   **Credential Fraud**: Easily forged PDFs and certificates.
*   **Time Inefficiency**: Verification often takes 3-10 business days involving manual emails/calls.
*   **Data Silos**: Credentials are locked in issuer databases or lost in email threads.

### The VeriHire Solution
*   **Immutable Trust**: Credential hashes are stored on the Blockchain. Any alteration to the document invalidates the hash.
*   **Instant Verification**: Recruiters can verify a candidate's claims in real-time by checking the on-chain registry.
*   **Sovereign Data**: Candidates own their credentials, not the platform.

## 🏗️ System Architecture

The system is built on a **Hybrid Web3 Architecture**, combining the UX of web2 with the security of web3.

1.  **Issuance (The "Write" Layer)**: 
    *   Trusted Authorities (Universities/Companies) upload a document.
    *   The system generates a **SHA-256 hash** of the file.
    *   The file is encrypted and pinned to **IPFS** (InterPlanetary File System).
    *   The **Hash + Metadata** is signed and stored on the **Smart Contract**.

2.  **Verification (The "Read" Layer)**: 
    *   Recruiters receive a digital copy of the resume/degree.
    *   Platform re-hashes the uploaded file.
    *   Smart Contract is queried matches the calculated hash against the immutable on-chain record.
    *   **Result**: Authentic (Green) or Tampered/Unknown (Red).

## 🛠️ Technical Engineering

### Core Stack
*   **Blockchain**: Solidity, Ethereum/Polygon (Smart Contracts for Registry & Store).
*   **Frontend**: Next.js, React, Tailwind CSS (Responsive, modern Dashboard).
*   **Backend**: Node.js, Express, PostgreSQL (User mgmt, caching, caching off-chain metadata).
*   **Storage**: IPFS & AWS S3 (Dual-layer storage for reliability and decentralization).

### Key Engineering Decisions
*   **Hybrid Storage**: We use IPFS for the "source of truth" and AWS S3 for high-availability access, ensuring the app remains fast without compromising centralization.
*   **Gas Optimization**: Batch processing strategies for credential issuance to minimize transaction costs on valid networks.
*   **Type Safety**: End-to-end TypeScript implementation (Frontend & Backend) for robust code quality.

## 🚀 Key Features

*   **Role-Based Dashboards**: Distinct workflows for **Issuers** (Universities) and **Recruiters**.
*   **Visual Trust Indicators**: Immediate visual feedback on verification status.
*   **No-Wallet UX**: Account abstraction implementation allowing non-crypto natives to use the platform seamlessly.
*   **Audit Trail**: Complete historical log of who issued what and when, permanently etched on-chain.

## 🔮 Future Roadmap
*   **Zero-Knowledge Proofs (ZKPs)**: Allow candidates to prove they have a degree without revealing their GPA or exact graduation date.
*   **Soulbound Tokens (SBTs)**: Migration to ERC-721/1155 standards for wallet-bound non-transferable credentials.

---

### Run Locally
*(For developers)*

```bash
git clone https://github.com/jaigudla/VeriHire.git
# ... see full technical documentation in /docs
```
