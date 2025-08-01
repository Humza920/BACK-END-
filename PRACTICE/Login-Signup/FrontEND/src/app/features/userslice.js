import { createSlice } from "@reduxjs/toolkit";


const initialState = {}
const userslice = createSlice({
    name:"users",
    
    initialState,
    reducers:{
        adduser:(state , action)=>{},
        removeuser:(state , action)=>{}
    }
})

export const {adduser , removeuser} = userslice.actions
export default userslice.reducer