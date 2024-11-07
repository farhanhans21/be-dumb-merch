import { Request, Response } from "express";
import * as cartService from "../service/cartService"
export const addCart = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const productId = +req.params.productId;
    // const addCart = await cartService.addCart(productId, userId);
    res.status(201).json({ addCart });
  } catch (error) {
    console.log(error);
    const err = new Error();
    res.status(500).json({ message: err.message });
  }
}
export const removeCart = async (req: Request, res: Response) => {

}
export const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = +req.params.productId;
    const getByIdProducts = await cartService.getProductById(productId)
    res.status(200).json({ getByIdProducts });
  } catch (error) {
    console.log(error);
    const err = new Error();
    res.status(500).json({ message: err.message });
  }
}