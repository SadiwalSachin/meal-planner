import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


interface Meal {
    mealType: string;
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    id?:number
  }

  interface InitialState {
    allMeal: Meal[];
    mealNeutraints: {
      Calories: number;
      Protein: number;
      Carbs: number;
      Fat: number;
    };
  }

  const initialState: InitialState = {
    allMeal: [],
    mealNeutraints: {
      Calories: 0,
      Protein: 0,
      Carbs: 0,
      Fat: 0,
    },
  };

const mealSlice = createSlice({
    name:"mealSlice",
    initialState,
    reducers:{
        addToMeal:(state,action: PayloadAction<Meal>)=>{
            const findExistingMeal = state.allMeal?.find((data:{mealType:string}) => data.mealType == action.payload.mealType )
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