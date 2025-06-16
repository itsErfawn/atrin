import React from "react";
import { bestblogPosts, blogPosts } from "@/context/DatablogPosts";
import { ArrowLeft } from "lucide-react";
import Container from "../../container/Container";
import SectionDivider from "../../ui/SectionDivider";

function AtrinBlog() {
  return (
    <Container>
      <SectionDivider title="وبلاگ آترین" />

      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        <div className="flex flex-col gap-6 lg:w-1/2">
          {bestblogPosts.map((post) => (
            <div
              key={post.id}
              className="relative h-80 rounded-2xl overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black/30">
                <button className="text-right text-black px-6 py-3 bg-white rounded-xl flex justify-between items-center transition w-full">
                  <h3 className="text-sm font-semibold">{post.title}</h3>
                  <div className="p-2 bg rounded-md">
                    <ArrowLeft className="w-5 h-5 text-white" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 flex-1">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white flex overflow-hidden shadow-sm p-2 rounded-2xl h-36 w-full sm:w-[48%]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-24 h-full object-cover rounded-2xl"
              />
              <div className="p-3 text-right flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-sm font-semibold mt-1 line-clamp-2">
                    {post.title}
                  </h3>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-xs text-gray-400">{post.date}</p>
                  <div className="p-2 bg rounded-md">
                    <ArrowLeft className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default AtrinBlog;
