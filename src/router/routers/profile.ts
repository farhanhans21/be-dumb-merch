import { Router } from "express";
import * as profileController from "../../controller/profileController";
import { authenticate } from "../../middleware/authenticate";
import upload from "../../middleware/uploadFile";
const profileRouter = Router();

profileRouter.put(
  "/update",
  authenticate,
  upload.fields([{ name: "image", maxCount: 1 }]),
  profileController.update
);
profileRouter.get("/getProfile",authenticate, profileController.getProfile)

export default profileRouter;
