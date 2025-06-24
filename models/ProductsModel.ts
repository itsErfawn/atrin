import Model from "./Model";

class ProductsModel extends Model {
    async getByCategory(category_id: number = 0) {
        const products = await this.db.product_to_category.findMany({ select: { product: true }, where: { category_id } })
        const data = products.map(pr => pr.product);
        return data
    }
    async get(slug: string) {
        const product = await this.db.product.findFirst({ where: { slug } ,include:{images:true}})
        console.log(product);
        return product
    }
    async getMetaData(slug: string) {
        const data = await this.db.product.findMany({ where: { slug }, select: { meta_data: true } })
        const meta_data = data.map(pr => pr.meta_data);
        return meta_data[0]
    }
}
export default new ProductsModel();
