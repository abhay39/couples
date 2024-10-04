import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

const app=express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// setting up routes
app.use("/api/auth",authRoutes)

app.listen(3000, () => {
  console.log('Server running on port 3000');
});