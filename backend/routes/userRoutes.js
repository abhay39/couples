import express from 'express';
import { addUserRightSwiped, getAllUsers } from '../controllers/UserControllers.js';

const usersRelatedRoutes = express.Router();

usersRelatedRoutes.get("/getAllUsers/:token",getAllUsers)
usersRelatedRoutes.get("/rightSwiped",addUserRightSwiped)

export default usersRelatedRoutes;