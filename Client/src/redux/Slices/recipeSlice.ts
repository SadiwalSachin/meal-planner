import {createSlice} from "@reduxjs/toolkit"

const recipeSlice = createSlice({
    name:"recipeSlice",
    initialState:{
        allRecipe:[],
        selectedRecipe:{}
    },
    reducers:{
        setSelectedRecipe:(state,action)=>{
             state.selectedRecipe = action.payload
        },
        setAllRecipe:(state,action)=>{
             state.allRecipe = action.payload
        }
    }
})

export const {setSelectedRecipe,setAllRecipe} = recipeSlice.actions
export default recipeSlice.reducer