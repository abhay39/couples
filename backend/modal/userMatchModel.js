import mongoose from "mongoose";

const UserMatchModel=new mongoose.Schema({
    currentUserId:{
        type:mongoose.Types.ObjectId
    },
    swipedUserId:{
        type:mongoose.Types.ObjectId
    },
},{timestamps:true});

const UserMatch= mongoose.model('UserMatch',UserMatchModel);

export default UserMatch;