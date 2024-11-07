import { CategoryDTO, ProductDTO } from "../dto/productDTO";
import uploader from "../libs/cloudinary";
import * as categoryRepo from "../repository/categoryRepo";
import * as productRepo from "../repository/productRepo";
export const createCategory = async (body: CategoryDTO) => {
  return await categoryRepo.createCategory(body);
};
export const getAllCategories = async () => {
  return await categoryRepo.getAllCategories();
};
export const editCategory = async (
  body: CategoryDTO,
  id: number,
  userId: number
) => {
  return await categoryRepo.editCategory(body, id, userId);
};
export const deleteCategory = async (id: number, userId: number) => {
  return await categoryRepo.deleteCategory(id, userId);
};

export const createProduct = async (body: ProductDTO) => {
  return  await productRepo.createProduct(body);
};

export const updateProduct = async (body: ProductDTO, productId: number) => {
  return productRepo.updateProduct(body, productId);
}
export const deleteProductById = async (productId : number) => {
  return await productRepo.deleteProductById(productId);
}
export const getAllProducts = async() =>{
  return await productRepo.getAllProducts();
}
export const getProductById = async (id: number) => {
  return await productRepo.getProductById(id);
}