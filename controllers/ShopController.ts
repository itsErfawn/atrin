import ProductsModel from "@/models/ProductsModel";


export async function GETShopData(
    category_id: number = 0,
    page: number = 1,
    orderBy: string = "default"
) {
    const {products,pages} = await ProductsModel.GetShopProducts(category_id, page, orderBy);

    return { products,pages };
}
