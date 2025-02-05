import { Router } from 'express';
import { registerHandler } from '../controllers/user.controllers.js'
const router = Router();

router.route("/register").post(registerHandler)

export default router
