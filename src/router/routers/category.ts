import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import * as categoryController from "../../controller/categoryController";
import { adminAuthenticate } from "../../middleware/adminAuthenticate";
const categoryRouter = Router();

categoryRouter.post(
  "/create",
  authenticate,
  adminAuthenticate,
  categoryController.create
);
categoryRouter.get("/get-all-categories", categoryController.getAllCategories);
categoryRouter.put(
  "/edit-categories/:id",
  authenticate,
  adminAuthenticate,
  categoryController.editCategories
);
categoryRouter.delete(
  "/delete-categories/:id",
  authenticate,
  adminAuthenticate,
  categoryController.deleteCategory
);
export default categoryRouter;
