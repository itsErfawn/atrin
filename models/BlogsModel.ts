import { BlogCardCollection, BlogType, relatedBlogs } from "@/types/blogs";
import Model from "./Model";

class BlogsModel extends Model {
  async getAll(page: number,search:string|undefined=undefined) {
    const data: BlogCardCollection = await this.db.blog.findMany({
      select: {
        id: true,
        slug: true,
        thumbnail: true,
        title: true,
        createdAt: true,
      },
      where:search?{
        title:{
          contains:search,
        }
      }:undefined,
      skip: (page - 1) * 9,
      take: 9,
    });
    return data;
  }
  async getCount(search:string|undefined=undefined) {
    const pageSize = 9;
    const totalItems = await this.db.product.count({
      where:search?{
        title:{
          contains:search
        }
      }:undefined
    });
    const totalPages = Math.ceil(totalItems / pageSize);
    return totalPages;
  }
  async get(slug: string) {
    return (await this.db.blog.findFirst({ where: { slug } })) as BlogType;
  }
  async getMeta(slug: string) {
    return await this.db.blog.findFirst({
      where: { slug },
      select: { title: true },
    });
  }
  async getLatestBlog(){
    return await this.db.blog.findMany({
      orderBy:{
        createdAt:"desc"
      },
      take:5,
      select:{
        id:true,
        title:true,
        slug:true
      }
    })
  }
  async getRelatedBlog(){
    // we dont have category in blog so we should get random blogs
    const total=await this.db.blog.count()
    const skip = Math.max(0, Math.floor(Math.random() * (total - 4)));
    const relatedBlog= await this.db.blog.findMany({
      skip,
      take:4,
      orderBy:{
        createdAt:"desc"
      },
      select:{
        id:true,
        title:true,
        thumbnail:true,
        createdAt:true,
        slug:true
      }
    }) as relatedBlogs
    return relatedBlog
  }
}
export default new BlogsModel();
