import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import uploadRoutes from './routes/upload.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/upload', uploadRoutes);

app.get('/', (req, res) => {
    res.send('VeriHire Backend is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
