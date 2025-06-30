import CategoriesModel from "@/models/CategoriesModel";
import ProductsModel from "@/models/ProductsModel";

export async function GetProductsByCategory(slug:string) {
    const category=await CategoriesModel.get(slug)
    const products=await ProductsModel.getByCategory(category?.id)
    return {category,products}
}
export async function GetCategoryMetaData(slug:string) {
    const category=await CategoriesModel.getMeta(slug)
    if(!category) return null;
    return category.meta_data;
}