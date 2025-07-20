import { ProductType } from "../products"

export type CartItemType={
id:number,
product:Pick<ProductType,"id","thumbnail","title","slug","quantity","price","discount">
quantity:number
}
export type CartItemCollectionType=CartItemType[]