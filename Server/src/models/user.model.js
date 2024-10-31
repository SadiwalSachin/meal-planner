import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },

    // Basic Profile Information
    age: { type: Number, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },

    // in kilograms
    weight: { type: Number, required: true }, 

    // in centimeters
    height: { type: Number, required: true }, 

    // Dietary Information
    dietaryPreferences: String, // e.g., ['Vegan', 'Gluten-Free']

    allergies: String, // e.g., ['Peanut', 'Soy']


    // Health Goals
    healthGoals: {
      type: String,
      enum: [
        "loseWeight",
        "gainWeight",
        "maintainWeight",
        "buildMuscle",
        "improveHealth",
      ],
      required: true,
    },

    // daily calorie goal
    targetCalories: { type: Number, required: true }, 

    // Preferences and Restrictions

    preferredMealTypes: String, // e.g., ['Breakfast', 'Lunch', 'Dinner', 'Snacks']
    avoidIngredients: String, // e.g., ['Dairy', 'Seafood']

    // Activity Level (to better estimate caloric needs)
    activityLevel: {
      type: String,
      enum: [
        "sedentary",
        "lightlyActive",
        "moderatelyActive",
        "veryActive",
        "extraActive",
      ],
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User",userSchema)
