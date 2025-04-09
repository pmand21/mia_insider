// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import eventRoutes from './routes/eventRoutes.js';

dotenv.config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

// THIS IS WHAT MOUNTS YOUR ROUTES TO /api
app.use('/api', eventRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("🟢 Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("🔴 MongoDB connection error:", err);
  });
