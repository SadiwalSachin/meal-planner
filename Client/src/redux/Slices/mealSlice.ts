import { createSlice } from "@reduxjs/toolkit";

const mealSlice = createSlice({
    name:"mealSlice",
    initialState:[],
    reducers:{
        addToMeal:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addToMeal} = mealSlice.actions
export default mealSlice.reducer