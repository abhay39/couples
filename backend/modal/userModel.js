import mongoose from "mongoose";

const UserModel=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    job:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female']
    },
    age:{
        type:Number,
        required:true
    },
    profileImage:{
        type:String,
        default:"https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400"
    },
    dateOfBirth:{
        type:Date,
    },
    address:{
        type:String,
    },
    lastLogin:{
        type:Date,
    },
    interests:{
        type:[String],
        default:[]
    },
    bio:{
        type:String,
        default:''
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    userImages:{
        type:[String],
        default:[]
    }
},{timestamps:true})

const User= mongoose.model('User',UserModel);

export default User;