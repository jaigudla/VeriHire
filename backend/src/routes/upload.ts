import express from 'express';
import multer from 'multer';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import prisma from '../lib/prisma.js';
import { ipfsService } from '../services/ipfs.service.js';

const router = express.Router();

// Configure Multer for local storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

router.post('/', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        // 1. Calculate SHA-256 Hash
        const fileBuffer = fs.readFileSync(req.file.path);
        const hashSum = crypto.createHash('sha256');
        hashSum.update(fileBuffer);
        const hex = hashSum.digest('hex');
        const hash = '0x' + hex; // Standardize for Blockchain (bytes32 usually expects 0x prefix if string)

        // 2. Upload to IPFS
        const ipfsCid = await ipfsService.uploadFile(req.file.path);

        // 3. Save to Database
        // For now, ensure a test user exists (Implement proper Auth later)
        const testUser = await prisma.user.upsert({
            where: { email: 'demo@verihire.com' },
            update: {},
            create: {
                email: 'demo@verihire.com',
                role: 'RECRUITER' // or ISSUER
            }
        });

        const credential = await prisma.credential.create({
            data: {
                hash: hash,
                filename: req.file.filename,
                originalName: req.file.originalname,
                ipfsCid: ipfsCid,
                userId: testUser.id,
                status: 'PENDING'
            }
        });

        res.json({
            message: 'File uploaded and processed successfully',
            credentialId: credential.id,
            hash: hash,
            ipfsCid: ipfsCid,
            filename: req.file.filename,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error processing file' });
    }
});

export default router;
