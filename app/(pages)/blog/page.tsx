import PaginationBlog from "@/components/module/blog/PaginationBlog";
import { getBlogs } from "@/controllers/BlogsController";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
export const metadata: Metadata = {
  title: "وبلاگ",
};
async function Blog({
  searchParams,
}: {
  searchParams: Promise<{
    page: number | undefined;
    search: string | undefined;
  }>;
}) {
  const { page, search } = await searchParams;
  const { blogs, pages } = await getBlogs(page, search);
  const currentPage = page ?? 1;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm transition hover:shadow-md"
          >
            <Link href={`blog/${blog.slug}`}>
              <img
                src={blog.thumbnail}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
            </Link>
            <div className="p-4">
              <h3 className="font-semibold text-base">{blog.title}</h3>
              <p className="text-sm text-stone-500 bg-[#F5F5F5] mt-3 rounded-xl p-2">
                {blog.createdAt.toLocaleDateString()} • admin
              </p>
            </div>
          </div>
        ))}
      </div>
      <PaginationBlog search={search} currentPage={currentPage} pages={pages} />
    </>
  );
}

export default Blog;
