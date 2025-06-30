import BlogsModel from "@/models/BlogsModel";
import { BlogCardCollection, BlogType } from "@/types/blogs";
import { notFound } from "next/navigation";
import * as cheerio from "cheerio";
export async function getBlogs(page: number = 1) {
  const blogs = (await BlogsModel.getAll(page)) as BlogCardCollection;
  const pages = (await BlogsModel.getCount()) as number;
  return { blogs, pages };
}
export async function getBlog(slug: string) {
  const blog = await BlogsModel.get(slug);
  if (!blog) notFound();
  const data = cleanBlogContent(blog);
  return data;
}
export async function GetBlogMeta(slug: string) {
  return await BlogsModel.getMeta(slug);
}
function cleanBlogContent(blog: { [key: string]: any }) {
  const $ = cheerio.load(blog.content);
  $(`#the-content-products-swiper`).remove();

  return {
    ...blog,
    content: $("body").html() || "",
  } as BlogType;
}
