import { ProductImage } from "@prisma/client";
import { ProductDTO } from "../dto/productDTO";
import { prisma } from "../libs/prisma";
import { ADDRGETNETWORKPARAMS } from "dns";

export const createProduct = async (
  product: ProductDTO,
) => {
  const { image, ...data } = product;
  return await prisma.product.create({
    data: {
      ...data,
      categoryId: +data.categoryId!,
      stock: +data.stock,
      price: +data.price,
      image: {
        create: {
          url: image ? image[0].url : null,
        },
      },
    },
    include: {
      categoryProduct: true,
      image: true,
    },
  });
};
export const updateProduct = async (product: ProductDTO, productId: number) => {
  const { image, ...rest } = product;
  return await prisma.product.update({
    where: { id: productId },
    data: {
      ...rest,
      stock: +rest.stock,
      price: +rest.price,
      image: {
        updateMany:{
          data:{
            url: image? image[0].url : null,
          },
          where:{productId: productId}
        }
      },
    },
    // include:{
    //   image:true
    // }
    });
  
};

export const deleteProductById = async (productId: number) => {
  const deleteImage = await prisma.productImage.deleteMany({
    where: { productId },
  });
  return deleteImage
    ? await prisma.product.delete({
        where: { id: productId },
      })
    : null;
};

export const getAllProducts = async () => {
  return await prisma.product.findMany({
    include: {
      categoryProduct: true,
      image: true,
    },
    // skip: 10,
    // take: 11
  });
};
export const getProductById = async (productId: number) => {
  return await prisma.product.findUnique({
    where: { id: productId },
    include: {
      categoryProduct: true,
      image: true,
    },
  });
};
