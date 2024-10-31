import mongoose, { Schema } from "mongoose";

const mealSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    meals: [
      {
        day: { type: String, required: true }, // e.g., 'Monday'
        mealType: {
          type: String,
          enum: ["Breakfast", "Lunch", "Dinner", "Snack"],
          required: true,
        },
        recipeId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Recipe",
          required: true,
        },

        // Tracking status of the meal
        status: {
          type: String,
          enum: ["Planned", "Completed", "Skipped"],
          default: "Planned", // Track if a meal is eaten, skipped, or simply planned
        },
      },
    ],

    startDate: { type: Date, required: true }, // Start of meal plan
    endDate: { type: Date, required: true }, // End of meal plan
  },
  { timestamps: true }
);

export const Meal = mongoose.model("Meal", mealSchema);
