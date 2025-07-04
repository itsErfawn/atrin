import React from "react";
import SearchBar from "./SearchBar";
import { BlogCardCollection } from "@/types/blogs";
import Link from "next/link";

function BlogSidebar({latestBlog}:{latestBlog:BlogCardCollection}) {
  return (
    <div className="flex flex-col  gap-8 sticky top-[50px]">
      <SearchBar />

      <aside className="bg-white border border-stone-100 rounded-md p-4">
        <h3 className="font-bold text-base mb-4">آخرین مقالات</h3>
        <ul className="text-sm space-y-3">
          {latestBlog.map(blog=>(
            <li key={blog.id}>
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
            <hr className="my-2 border-stone-200" />
          </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default BlogSidebar;
