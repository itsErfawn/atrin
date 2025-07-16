import CategoriesModel from "@/models/CategoriesModel";

export async function GetCategories() {
    console.log(await CategoriesModel.getCategories());
}