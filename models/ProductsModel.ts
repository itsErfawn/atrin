import { ProductType, relatedProductsCollection } from "@/types/products";
import Model from "./Model";

class ProductsModel extends Model {
    async getByCategory(category_id: number = 0) {
        const products = await this.db.product_to_category.findMany({ select: { product: true }, where: { category_id } })
        const data = products.map(pr => pr.product);
        return data
    }
    async get(slug: string) {
        const product = await this.db.product.findFirst({ where: { slug } ,include:{images:true}})
        return product as ProductType
    }
    async getMetaData(slug: string) {
        const data = await this.db.product.findMany({ where: { slug }, select: { meta_data: true } })
        const meta_data = data.map(pr => pr.meta_data);
        return meta_data[0]
    }
    async getRelatedProducts(category_id: number,product_id:number) {
        const related = await this.db.product_to_category.findMany({
          where: { category_id ,product_id:{not:product_id}},
          select:{
            product_id:true
          },
          take:4
        });
      
        const products = await Promise.all(
          related.map((item) =>
            this.db.product.findFirst({ where: { id: item.product_id },select:{id:true,thumbnail:true,slug:true,title:true} })
          )
        );
        return products as relatedProductsCollection;
      }
      
    async getProductCagegory(product_id:number){
       const data= await this.db.product_to_category.findFirst()
       return data?.category_id
    }
}
export default new ProductsModel();
