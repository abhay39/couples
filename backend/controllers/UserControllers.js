import User from "../modal/userModel";

export const getAllUsers=async(req,res)=>{
    try{
        const {token}=req.params;
        const decoded=jwt.verify(token,process.env.JWT_SEC);
        const currentUser=decoded.id;

        const getAll=await User.find();
        const exceptCurrentUser=getAll.filter(item=>item._id!==currentUser)
        res.status(200).json(exceptCurrentUser);
    }catch(err){
        res.status(500).json({error:err.message});
    }
}