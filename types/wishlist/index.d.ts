import { ProductType } from "../products"

export type WishListType={
id:number,
product:Pick<ProductType,"id","thumbnail","title","slug","price","discount">
}
export type WishListCollectionType=WishListType[]