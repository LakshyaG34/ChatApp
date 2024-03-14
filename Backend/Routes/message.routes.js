import express from "express"
import {getMessage, sendMessage} from "../controllers/message.controller.js"
import protectRoute from "../middleWare/protectRoute.js"
const router = express.Router();

router.get("/:id", protectRoute, getMessage);   // Protect this route
router.post("/send/:id", protectRoute, sendMessage);   // Protect this route

export default router;
