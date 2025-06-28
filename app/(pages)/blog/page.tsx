import { datablogPosts } from "@/context/Datablog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Blog() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {datablogPosts.map((blog) => (
        <div
          key={blog.id}
          className="bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm transition hover:shadow-md"
        >
          <Link href={`blog/${blog.id}`}>
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
          </Link>
          <div className="p-4">
            <h3 className="font-semibold text-base">{blog.title}</h3>
            <p className="text-sm text-stone-500 bg-[#F5F5F5] mt-3 rounded-xl p-2">
              {blog.date} • {blog.author}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
