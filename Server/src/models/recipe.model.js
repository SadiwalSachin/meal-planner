import mongoose, { Schema } from "mongoose";

const recipeSchem = new Schema(
  {
    title: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    instructions: { type: String, required: true },

    nutrition: {
      calories: { type: Number, required: true },
      protein: { type: String, required: true }, // e.g., "20g"
      carbs: { type: String, required: true }, // e.g., "50g"
      fat: { type: String, required: true }, // e.g., "15g"
      fiber: { type: String }, // e.g., "10g"
      sugar: { type: String }, // e.g., "5g"
    },

    dietaryTags: [String], // e.g., ['Vegan', 'Low-Carb', 'Gluten-Free']

    // Additional fields for user matching
    mealType: {
      type: String,
      enum: ["Breakfast", "Lunch", "Dinner", "Snack"],
      required: true,
    },
  },
  
  { timestamps: true });

export const Recipe = mongoose.model("Recipe",recipeSchem)  


