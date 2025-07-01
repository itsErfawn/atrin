export interface ProductType{
    id:number;
    title:string;
    slug:string;
    thumbnail:string;
    price:number;
    rating:number|null;
    discount:number;
    description:string;
    date_added:Date;
    images?:{
    id:number,
    imageUrl:string,
    product_id:number
    }[]
}
export type relatedProductsType=Pick<ProductType,"id"|"title"|"thumbnail"|"slug">
export type relatedProductsCollection=relatedProductsType[]