import express from 'express';
import { getAllUsers } from '../controllers/UserControllers';

const app = express.Router();

app.get("/getAllUsers/:token",getAllUsers)

export default usersRoutes;