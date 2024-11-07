export interface CategoryDTO {
  userId: number;
  name: string;
}
export interface ProductDTO {
  categoryId?: number;
  nameProduct?: string;
  desc?: string;
  stock: number;
  price: number;
  image?: ProductImage[];
}
export interface ProductImage {
  url?: string;
}
