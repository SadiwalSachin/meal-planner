import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./Slices/recipeSlice"
import groceryReducer from "./Slices/grocerySlice"

export const store = configureStore({
    reducer:{
        recipeReducer:recipeReducer,
        groceryReducer:groceryReducer
    }
})