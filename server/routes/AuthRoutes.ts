import express from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/AuthControllers.js";
import protect from "../middlewares/auth.js";

const AuthRouter = express.Router();

AuthRouter.post('/register', registerUser)
AuthRouter.post('/login', loginUser)
AuthRouter.post('/verify', protect)
AuthRouter.post('/logout', protect, logoutUser)

export default AuthRouter
