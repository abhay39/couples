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

export const addUserRightSwiped = async (req, res) => {
    try {
        const { currentUserId, swipedUserId } = req.body;

        // Check if the swiped user has already swiped right on the current user
        const mutualSwipe = await UserMatch.findOne({
            currentUserId: swipedUserId,
            swipedUserId: currentUserId
        }).populate('currentUserId').populate('swipedUserId') 
        if (mutualSwipe) {
            const currentUser=await User.findById(currentUserId).select("-password")
            const swipedUser=await User.findById(swipedUserId).select("-password")
            return res.status(200).json({
                message: "It's a match!",
                users: {
                    currentUser: currentUser,
                    matchedUser:swipedUser
                }
            });
        }

        // Otherwise, add the current swipe to the database
        const newSwipe = new UserMatch({
            currentUserId,
            swipedUserId
        });
        await newSwipe.save();

        res.status(201).json({ message: "Swiped right successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};





export const addUserLeftSwipeed=async(req,res)=>{
    try{
        const {currentUserId,swipedUserId} = req.params;
        const ifRightSwipped = await User.findOne({
            $or: [
                { currentUserId: currentUserId, swipedUserId: swipedUserId },
                { currentUserId: swipedUserId, swipedUserId: currentUserId }
            ]
        });

        if(ifRightSwipped){
            return res.status(202).json({error: "User has already swiped on each other."});
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