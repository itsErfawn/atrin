import { BlogCardCollection, BlogType } from "@/types/blogs";
import Model from "./Model";

class BlogsModel extends Model {
  async getAll(page: number) {
    const data: BlogCardCollection = await this.db.blog.findMany({
      select: {
        id: true,
        slug: true,
        thumbnail: true,
        title: true,
        createdAt: true,
      },
      skip: (page - 1) * 9,
      take: 9,
    });
    return data;
  }
  async getCount() {
    const pageSize = 9;
    const totalItems = await this.db.product.count();
    const totalPages = Math.ceil(totalItems / pageSize);
    return totalPages;
  }
  async getLatestBlogs() {}
  async get(slug: string) {
    return (await this.db.blog.findFirst({ where: { slug } })) as BlogType;
  }
  async getMeta(slug: string) {
    return await this.db.blog.findFirst({
      where: { slug },
      select: { title: true },
    });
  }
}
export default new BlogsModel();
