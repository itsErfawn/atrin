import BlogsModel from "@/models/BlogsModel";
import { BlogCardCollection, BlogType } from "@/types/blogs";
import { notFound } from "next/navigation";
import * as cheerio from "cheerio";

export async function getBlogs(page: number = 1,search: string | undefined=undefined) {
  const blogs = (await BlogsModel.getAll(page,search)) as BlogCardCollection;
  const pages = (await BlogsModel.getCount(search)) as number;
  return { blogs, pages };
}

export async function getBlog(slug: string) {
  const blog = await BlogsModel.get(slug);
  if (!blog) notFound();
  const cleanedBlog = cleanBlogContent(blog);
  const relatedBlog=await BlogsModel.getRelatedBlog()
  const latestBlog=await BlogsModel.getLatestBlog()
  const data={
    ...cleanedBlog,
    relatedBlog,
    latestBlog
  }
  return data;
}

export async function GetBlogMeta(slug: string) {
  return await BlogsModel.getMeta(slug);
}

function cleanBlogContent(blog: { [key: string]: any }) {
  const $ = cheerio.load(blog.content);
  $(`#the-content-products-swiper`).remove();
  $(`.context.p-4.bg-white.rounded-2xl.m-2`).remove();
  $(`[style="color: #ff0000;"]`).remove();
  return {
    ...blog,
    content: $("body").html() || "",
  } as BlogType;
}
