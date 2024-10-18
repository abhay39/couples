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
            res.status(400).json({error:"User already exists"});
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
            error:"Failed to create user"
        })
    }catch(err){
        res.status(500).json({error:err.message});
    }
}

export const loginAccount=async(req, res) => {
    try{
        const {email, password}=req.body;
        // console.log(email,password)
        const user=await User.findOne({
            email:email
        });
        // console.log("Email",user)
        if(user){
            const isMatch=await bcrypt.compare(password,user.password);
            if(isMatch){
                const token=jwt.sign({id:user._id},process.env.JWT_SEC,{
                    expiresIn:'7d'
                })
                res.status(201).json({
                    message:"Logged in successfully",
                    token:token
                });
            }else{
                return res.status(400).json({error:"Invalid credentials"});
            }
        }
        else{
            res.status(400).json({error:"User not found"});
        }
    }catch(err){
        res.status(500).json({error:err.message});
    }
}

export const getUser=async(req,res) => {
    try{
        const {token}=req.params;
        const decoded=jwt.verify(token,process.env.JWT_SEC);
        const user=await User.findById(decoded.id);
        if(user){
            res.status(200).json(user);
        }
        else{
            res.status(404).json({error:"User not found"});
        }
    }catch(err){
        res.status(500).json({error:err.message});
    }
}