import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userSlice",
    initialState:{
        isLoggedIn:false,
        userDetails:{

        },
        token:""
    },
    reducers:{
        setUserDetails:function(state,action){
            state.userDetails = action.payload
        },
        setIsLoggedIn:function(state,action){
            state.isLoggedIn = action.payload
        },
        setToken:function(state,action){
            state.token = action.payload
        }
    }
})

export const {setIsLoggedIn,setUserDetails,setToken} = userSlice.actions
export default userSlice.reducer