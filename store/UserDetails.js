import { createSlice } from "@reduxjs/toolkit";

const UserDetails=createSlice({
    name: 'userDetails',
    initialState: {
        userInfo:'',
        token:""
    },
    reducers: {
        setUserToken:(state,action)=>{
            state.token = action.payload;
        },
        setUserDetails:(state,action)=>{
            state.userInfo= action.payload
        },
        clearUserDetails:(state,action)=>{
            state.userInfo = ''
            state.token = ''
        },
    }
})

export const { setUserDetails, clearUserDetails,setUserToken } = UserDetails.actions;

export default UserDetails;