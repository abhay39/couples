import { createSlice } from "@reduxjs/toolkit";

const UserDetails=createSlice({
    name: 'userDetails',
    initialState: '',
    reducers: {
        setUserDetails:(state,action)=>{
            initialState = action.payload
            return initialState
        },
        clearUserDetails:(state,action)=>{
            initialState = ''
            return initialState
        },

    }
})

export const { setUserDetails, clearUserDetails } = UserDetails.actions;

export default UserDetails;