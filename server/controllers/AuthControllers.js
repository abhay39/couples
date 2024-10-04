import User from "../modal/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";

export const CreateAccount=async(req,res)=>{
    try{
        const data=req.body;
        const checkIfUser=await User.findOne({
            email:data.email
        })
        if(checkIfUser){
            return res.status(400).json({message:"User already exists"});
        }

        const hashedPassword=await bcrypt.hash(data.password,10);
        const newUser=new User({
            email:data.email,
            password:hashedPassword,
            fullName:data.fullName,
            age:data.age,
            gender:data.gender
        });
        const isDone=await newUser.save();
        if(isDone){
            const token=jwt.sign({id:newUser._id},process.env.JWT_SEC,{
                expiresIn:'7d'
            })
            res.status(201).json({
                message:"User created successfully",
                token:token
            });
        }
        res.status(500).json({
            message:"Failed to create user"
        })
    }catch(err){
        res.status(500).json({error:err.message});
    }
}