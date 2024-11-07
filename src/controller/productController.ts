import { Request, Response } from "express";
import uploader from "../libs/cloudinary";
import * as productSevice from "../service/productSevice";

export const create = async (req: Request, res: Response) => {
  try {
  
    const body = req.body;

    if (req.files) {
      body.image = await uploader(
        (req.files as { [key: string]: Express.Multer.File[] }).image
      );
    }


    const product = await productSevice.createProduct(body);
    res.status(201).json({ product });
  } catch (error) {
    console.log(error);
    const err = new Error();
    res.status(500).json({ massage: err.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const getAllProducts = await productSevice.getAllProducts();
    res.status(200).json({ getAllProducts });
  } catch (error) {
    console.log(error);
    const err = new Error();
    res.status(500).json({ massage: err.message });
  }
}
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = +req.params.productId
    const body = req.body;
    if (req.files) {
      body.image = await uploader(
        (req.files as { [key: string]: Express.Multer.File[] }).image
      );
    }
    const updateProduct = await productSevice.updateProduct(body, productId);
  
    res.status(200).json({ updateProduct });
  } catch (error) {
    console.log(error);
    const err = new Error();
    res.status(500).json({ massage: err.message });
  }
}

export const deleteProductById =  async (req: Request, res: Response) => {
  try {
    const productId = +req.params.productId;
    await productSevice.deleteProductById(productId);
    res.status(200).json({message: "Category deleted successfully"});
  } catch (error) {
    console.log(error);
    const err = new Error();
    res.status(500).json({ massage: err.message });
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = +req.params.productId;
    const getByIdProducts = await productSevice.getProductById(productId)
    res.status(200).json({ getByIdProducts });
  } catch (error) {
    console.log(error);
    const err = new Error();
    res.status(500).json({ massage: err.message });
  }
}
