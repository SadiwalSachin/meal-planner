import {Router} from "express"
import { getAllMeal } from "../controllers/meal.controller.js"

const mealRouter = Router()

mealRouter.route("/get-all-meals").get(getAllMeal)

export default mealRouter