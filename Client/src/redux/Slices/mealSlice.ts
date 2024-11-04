import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const mealSlice = createSlice({
    name:"mealSlice",
    initialState:{
        allMeal:[],
        mealNeutraints:{
            Calories:0,
            Protein:0,
            Carbs:0,
            Fat:0
        }
    },
    reducers:{
        addToMeal:(state,action)=>{
            const findExistingMeal = state.allMeal?.find((data) => data.mealType == action.payload.mealType )
            if(findExistingMeal){
                toast.error("This meal type already exist")
            } else {
                state.allMeal.push(action.payload)
                toast.success(`Meal ${action.payload.name} added in meal`)
                state.mealNeutraints.Calories+= action.payload.calories
                state.mealNeutraints.Protein += action.payload.protein
                state.mealNeutraints.Carbs += action.payload.carbs
                state.mealNeutraints.Fat += action.payload.fat
            }
        },
    }
})

export const {addToMeal} = mealSlice.actions
export default mealSlice.reducer