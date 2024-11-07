import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import * as productController from "../../controller/productController";
import upload from "../../middleware/uploadFile";
import { adminAuthenticate } from "../../middleware/adminAuthenticate";
const productRouter = Router();

productRouter.post(
  "/post-product",
  authenticate,
  adminAuthenticate,
  upload.fields([{ name: "image", maxCount: 1 }]),
  productController.create
);

productRouter.get("/get-all-products", productController.getAll);
productRouter.get(
  "/get-detail-products/:productId",
  productController.getProductById
);
productRouter.put(
  "/update-product/:productId",
  authenticate,
  adminAuthenticate,
  upload.fields([{ name: "image", maxCount: 1 }]),
  productController.updateProduct
);
productRouter.delete("/delete-product/:productId",authenticate,
  adminAuthenticate, productController.deleteProductById);
export default productRouter;
