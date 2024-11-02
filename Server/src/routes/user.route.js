import {Router} from "express"
import { login, userRegistration } from "../controllers/user.controller.js"
const userRouter = Router()

userRouter.route("/register").post(userRegistration)
userRouter.route("/sign-in").post(login)

export default userRouter