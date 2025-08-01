import { configureStore } from "@reduxjs/toolkit";
import { userslice } from "./features/userslice";

export const store = configureStore({
    reducer:{
        userslice,
    }
})