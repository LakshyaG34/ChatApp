import express from "express";
import { login, signup, logout } from "../Controllers/auth.controller.js";

const router = express.Router();

// Add a post route for /login
router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

export default router;
