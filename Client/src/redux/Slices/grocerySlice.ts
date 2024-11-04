import { createSlice } from "@reduxjs/toolkit";


interface GroceryItem {
  id: number;
  name: string;
  price: number;
  count: number;
}

interface InitialState {
  groceryItems: GroceryItem[];
  totalPrice: number;
}

const initialState: InitialState = {
  groceryItems: [],
  totalPrice: 0,
};


const grocerySlice = createSlice({
  name: "grocerySlice",
  initialState,
  reducers: {
    addToGrocery: (state, action) => {
      const item = state.groceryItems.find((i:{
        id:number
      }) => i.id === action.payload.id);
      if (item) {
        item.count++;
        state.totalPrice += action.payload.price;
      } else {
        state.groceryItems.push({
          ...action.payload,
          count: 1,
        });
        state.totalPrice += action.payload.price;
      }
    },
    removeFromGrocery: (state, action) => {
      const item = state.groceryItems.find((i) => i.id === action.payload.id);
      if (item) {
        if (item.count > 1) {
          item.count--;
          state.totalPrice -= action.payload.price;
        } else {
          state.groceryItems = state.groceryItems.filter(
            (i) => i.id !== action.payload.id
          );
          state.totalPrice -= action.payload.price;
        }
      }
    },
  },
});

export const { addToGrocery, removeFromGrocery } = grocerySlice.actions;
export default grocerySlice.reducer;