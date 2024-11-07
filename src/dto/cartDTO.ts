import { StatusPayment } from "@prisma/client";
import { ProductDTO } from "./productDTO";

export interface cartDTO {
  userId: number;
  cartItem: cartItemDTO[];

}

export interface cartItemDTO {
  productId: number;
  quantity: number;
}