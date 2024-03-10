import express from "express";
import { login, signup, logout } from "../Controllers/auth.controller.js";

const router = express.Router();

// Add a GET route for /login
router.get("/login", login);
router.get("/signup", signup);
router.get("/logout", logout);

export default router;
