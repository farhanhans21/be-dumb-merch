import { Router } from "express";
import * as authController from"../../controller/authController"
import { authenticate } from "../../middleware/authenticate";
const authRouter = Router();


authRouter.post("/register",authController.register);
authRouter.post("/login",authController.login);
authRouter.get('/authCheck',authenticate, authController.authCheck);
export default authRouter