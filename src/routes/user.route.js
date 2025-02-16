import { Router } from 'express';
import { registerHandler } from '../controllers/user.controllers.js'
import { upload } from '../middlewares/multer.middleware.js';
const router = Router();


router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerHandler
)

export default router
