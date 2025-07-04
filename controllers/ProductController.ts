import ProductsModel from "@/models/ProductsModel";
import { notFound } from "next/navigation";

export async function getProduct(slug: string) {
    const product = await ProductsModel.get(encodeURIComponent(decodeURI(slug)).toLowerCase())
    if (!product) notFound()
    const category = await ProductsModel.getProductCagegory(product.id) as number
    const relatedProducts=await ProductsModel.getRelatedProducts(category,product.id)
    return {product,relatedProducts}
}
export async function getProductMetaData(slug: string) {
    const meta = await ProductsModel.getMetaData(encodeURIComponent(decodeURI(slug)).toLowerCase())
    if (!meta) notFound()
    return meta

}