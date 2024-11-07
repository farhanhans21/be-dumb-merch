import { Request, Response } from "express";
import { CategoryDTO } from "../dto/productDTO";
import * as categoryService from "../service/productSevice";

export const create = async (req: Request, res: Response) => {
  try {
    const body: CategoryDTO = req.body;

    body.userId = res.locals.user.id;
    const createCategory = await categoryService.createCategory(body);

    res.status(201).json({ createCategory });
  } catch (error) {
    console.log(error);
    const err = new Error();
    res.status(500).json({ message: err.message });
  }
};

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const getAllCategories = await categoryService.getAllCategories();
    res.status(200).json({ getAllCategories });
  } catch (error) {
    console.log(error);
    const err = new Error();
    res.status(500).json({ message: err.message });
  }
};
export const editCategories = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const id = Number(req.params.id);
    const body: CategoryDTO = req.body;
    const editCategory = await categoryService.editCategory(body, id, userId);

    res.status(200).json({ editCategory });
  } catch (error) {
    console.log(error);
    const err = new Error();
    res.status(500).json({ message: err.message });
  }
};
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const id = Number(req.params.id);
    const editCategory = await categoryService.deleteCategory(id, userId);

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.log(error);
    const err = new Error();
    res.status(500).json({ message: err.message });
  }
};
