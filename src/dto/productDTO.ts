export interface Product{
  nameProduct: string;
  desc:string;
  quantity:number;
  img: ProductImage[];
  price: number;

}
export interface ProductImage {
imageUrl : string;
}