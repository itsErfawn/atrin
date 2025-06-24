import { datablogPosts } from "@/context/Datablog";
import Image from "next/image";
import React from "react";

function Blog() {
  return (
    <div className="flex  -mx-3">
      {datablogPosts.map((blog) => (
        <div
          key={blog.id}
          className="bg-white border p-5 border-stone-100 rounded-2xl gap-1.5 m-2 overflow-hidden shadow-sm px-3 mb-6 w-full sm:w-1/2 lg:w-full"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-2xl"
          />
          <div className="p-4">
            <h3 className="font-semibold text-sm ">{blog.title}</h3>
            <p className="text-sm text-stone-500 bg-[#F5F5F5] mt-3 rounded-2xl p-1">
              {blog.date} • {blog.author}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
