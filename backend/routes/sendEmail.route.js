import { Router } from "express";
import { sendEmail } from "../controllers/sendEmail.controller.js";

const router = Router();

router.post("/email", sendEmail)

export default router;