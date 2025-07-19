import { ProductType, relatedProductsCollection } from "@/types/products";
import Model from "./Model";
import { Prisma } from "@prisma/client";
class ProductsModel extends Model {

  async GetShopProducts(
    category_id:number = 0,
    page:number = 1,
    sort:string = "default",) {

    const whereCondition =category_id > 0?
     {
          productCategories: {
            some: { category_id },
          },
        }
      : {};
  

    const orderBy: Prisma.ProductOrderByWithRelationInput | undefined = (() => {
      switch (sort) {
        case "newest":
          return { date_added: Prisma.SortOrder.desc };
        case "popular":
          return { views: Prisma.SortOrder.desc };
        case "expensive":
          return { price: Prisma.SortOrder.desc };
        case "cheap":
          return { price: Prisma.SortOrder.asc };
        default:
          return undefined;
      }
    })();
  
    const products = await this.db.product.findMany({
      where: whereCondition,
      orderBy,
      skip: (page - 1) * 16,
      take: 16,
    });
  
    return products;
  }
  async get(slug: string) {
    const product = await this.db.product.findFirst({ where: { slug }, include: { images: true } })
    return product as ProductType
  }
  async getMetaData(slug: string) {
    const data = await this.db.product.findMany({ where: { slug }, select: { meta_data: true } })
    const meta_data = data.map(pr => pr.meta_data);
    return meta_data[0]
  }
  async getRelatedProducts(category_id: number, product_id: number) {
    const related = await this.db.product_to_category.findMany({
      where: { category_id, product_id: { not: product_id } },
      select: {
        product_id: true
      },
      take: 8
    });
    const products = await Promise.all(
      related.map((item) =>
        this.db.product.findFirst({ where: { id: item.product_id }, select: { id: true, thumbnail: true, slug: true, title: true } })
      )
    ) as relatedProductsCollection;
    return products as relatedProductsCollection;
  }

  async getProductCagegory(product_id: number) {
    const data = await this.db.product_to_category.findFirst()
    return data?.category_id
  }
}
export default new ProductsModel();
