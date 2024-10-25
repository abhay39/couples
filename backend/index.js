import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import mongoose from 'mongoose';
import usersRelatedRoutes from './routes/userRoutes.js';

dotenv.config();
const app=express();
app.use(express.json());
app.use(cors())



const connectDB=async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');
  }catch(e){
    console.error(`Error connecting to MongoDB: ${e.message}`);
    process.exit(1);
  }
}

connectDB();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// setting up routes
app.use("/api/auth",authRoutes)
app.use("/api/allUsers",usersRelatedRoutes)

app.listen(process.env.PORT, () => {
  console.log('Server running on port ',process.env.PORT);
});

export default app