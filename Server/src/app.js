import express from "express"
import cors from "cors"

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin:"https://meal-planner-according-to-u.onrender.com",
    credentials:true
}))


// user Router
import userRouter from "./routes/user.route.js"

app.use("/api/v1",userRouter)

// recipe Router
import recipeRouter from "./routes/recipe.route.js"

app.use("/api/v1/recipe",recipeRouter)

import mealRouter from "./routes/meal.route.js"

app.use("/api/v1/meal",mealRouter)


export {app}