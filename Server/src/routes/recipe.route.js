import {Router} from "express"
import { getAllRecipe } from "../controllers/recipe.controller.js"

const recipeRouter = Router()

recipeRouter.route("/get-all-recipe").get(getAllRecipe)

export default  recipeRouter

