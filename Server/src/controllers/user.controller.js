import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


// Controller for user registration
export const userRegistration = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      age,
      gender,
      weight,
      height,
      dietaryPreferences,
      allergies,
      healthGoals,
      targetCalories,
      preferredMealTypes,
      avoidIngredients,
      activityLevel
    } = req.body;

    console.log("Data coming from frontend",req.body);
    
    // Validation
    if (!username || username.length < 3) {
      return res.status(400).json({ message: "Username is required and must be at least 3 characters." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ message: "Valid email is required." });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({ message: "Password is required and must be at least 6 characters." });
    }

    if (!age || age < 0) {
      return res.status(400).json({ message: "Valid age is required." });
    }

    if (!["Male", "Female", "Other"].includes(gender)) {
      return res.status(400).json({ message: "Gender must be 'Male', 'Female', or 'Other'." });
    }

    if (!weight || weight <= 0) {
      return res.status(400).json({ message: "Valid weight is required." });
    }

    if (!height || height <= 0) {
      return res.status(400).json({ message: "Valid height is required." });
    }

    if (!targetCalories || targetCalories <= 0) {
      return res.status(400).json({ message: "Target calories must be a positive number." });
    }

    if (!["loseWeight", "gainWeight", "maintainWeight", "buildMuscle", "improveHealth"].includes(healthGoals)) {
      return res.status(400).json({ message: "Health goal must be valid." });
    }

    if (!["sedentary", "lightlyActive", "moderatelyActive", "veryActive", "extraActive"].includes(activityLevel)) {
      return res.status(400).json({ message: "Activity level must be valid." });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password,10)

    // Create new user
    const newUser = new User({
      username,
      email,
      password:hashedPassword,
      age,
      gender,
      weight,
      height,
      dietaryPreferences,
      allergies,
      healthGoals,
      targetCalories,
      preferredMealTypes,
      avoidIngredients,
      activityLevel
    });

    await newUser.save();
    console.log("User created successfully");
    
    res.status(201).json({success:true, message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Controller for user login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email,password);
    

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Username or email and password are required." });
    }

    // Find user by username or email
    const user = await User.findOne({email});

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10h" } 
    );

    const loggedInUser = await User.findById(user._id).select("-password")

    res.status(200).json({
      success:true,
      message: "Login successful!",
      token,
      user: loggedInUser
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getUserDetails = async (req, res) => {
 try {
   const id = req.user._id
 
   const user = await User.findById(id)
 
   if(user){
     return res.status(201).json({
       success:true,
       message:"User details fetched successfully",
       userDetails:user
     })
   }
 } catch (error) {
  return res.status(500).json({success:false,
    message:"Some error occured while fetching user details",
    error:error
  })
 }
}
