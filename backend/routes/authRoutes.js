import express from "express";
import { CreateAccount,getUser,loginAccount } from "../controllers/AuthControllers.js";


const routes=express.Router()

// routes for /couples

routes.get('/', (req, res) => {
    res.send('Welcome to the Couples API!')
})

routes.get('/couples', (req, res) => {
    res.json([
        {id: 1, name: 'John Doe', partner: 'Jane Doe', relationshipStatus: 'Single'},
        {id: 2, name: 'Jane Doe', partner: 'John Doe', relationshipStatus: 'Married'}
    ])
})

routes.post("/register-Account",CreateAccount)
routes.post("/login",loginAccount)
routes.get("/getUser/:token",getUser)

export default routes