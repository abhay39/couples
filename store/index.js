import { configureStore } from "@reduxjs/toolkit";
import UserDetails from "./UserDetails";

const store=configureStore({
    reducer:{
        userDetails:UserDetails.reducer
    }
})

export default store;