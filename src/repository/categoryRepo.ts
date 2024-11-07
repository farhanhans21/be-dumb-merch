import { CategoryDTO } from "../dto/productDTO";
import { prisma } from "../libs/prisma";

export const createCategory = async(body: CategoryDTO) => {
  return prisma.category.create({
  data: {
    ...body
  }
  });
}

export const getAllCategories = async()  =>{
return prisma.category.findMany({
  include:{
    products: true,
  },  
  take:5
})
}

export const editCategory = async(body: CategoryDTO, id:number, userId:number) => {
return prisma.category.update({
  where: {
    id: id,
    userId: userId,
  },
  data: {
    name: body.name,
  },
})
}

export const deleteCategory = async(id:number, userId:number) => {
  return prisma.category.delete({
    where: {
      id: id,
      userId: userId,
    },
  })
}
