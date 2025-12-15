import express from "express";
import { register, login } from "../controllers/authController.js";


// Create a new router instance from Express
// This router will handle authentication-related routes
const router = express.Router();

//POST /api/auth/register
//Register a new user

router.post("/register", register);
//POST /api/auth/login
//Authenticate user and return a JWT token
router.post("/login", login);


export default router;