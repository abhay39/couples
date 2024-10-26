import UserMatch from "../modal/userMatchModel.js";
import User from "../modal/userModel.js";
import jwt from 'jsonwebtoken'

export const getAllUsers=async(req,res)=>{
    try{
        const {token}=req.params;
        const decoded=jwt.verify(token,process.env.JWT_SEC);
        const currentUser=decoded.id;
        console.log(currentUser)

        const getAll=await User.find();
        const exceptCurrentUser = getAll.filter(item => item._id.toString() !== currentUser);
        res.status(200).json(exceptCurrentUser);
    }catch(err){
        res.status(500).json({error:err.message});
    }
}

export const addUserRightSwiped=async()=>{
    try{
        const {currentUserId,swipedUserId} = req.params;
        const ifRightSwiped = await User.findOne({
            $or: [
                { currentUserId: currentUserId, swipedUserId: swipedUserId },
                { currentUserId: swipedUserId, swipedUserId: currentUserId }
            ]
        });

        if(ifRightSwiped){
            res.status(202).json({error: "User has already swiped on each other."});
        }
        const addNewSwiped=await User({
            currentUserId: currentUserId,
            swipedUserId: swipedUserId
        })
        await addNewSwiped.save();
        res.status(201).json({message: "Swiped on right successfully!."});
    }catch(err){
        res.status(500).json({error:err.message});
    }
}

export const addUserLeftSwipeed=async()=>{
    try{
        const {currentUserId,swipedUserId} = req.params;
        const ifRightSwipped = await User.findOne({
            $or: [
                { currentUserId: currentUserId, swipedUserId: swipedUserId },
                { currentUserId: swipedUserId, swipedUserId: currentUserId }
            ]
        });

        if(ifRightSwipped){
            res.status(202).json({error: "User has already swiped on each other."});
        }
        const addNewSwiped=await User({
            currentUserId: currentUserId,
            swipedUserId: swipedUserId
        })
        await addNewSwiped.save();
        res.status(201).json({message: "Swiped on right successfully!."});
    }catch(err){
        res.status(500).json({error:err.message});
    }
}