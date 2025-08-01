import BlogCard from "@/components/module/Blog/BlogCard";
import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "یادگیری React از صفر",
    image: "/image/blog/1.png",
  },
  {
    id: 2,
    title: "راهنمای Next.js برای مبتدی‌ها",
    image: "/image/blog/2.png",
  },
  {
    id: 3,
    title: "۵ اشتباه رایج در جاوااسکریپت",
    image: "/image/blog/3.png",
  },
  {
    id: 5,
    title: "یادگیری React از صفر",
    image: "/image/blog/1.png",
  },
  {
    id: 6,
    title: "راهنمای Next.js برای مبتدی‌ها",
    image: "/image/blog/2.png",
  },
  {
    id: 7,
    title: "۵ اشتباه رایج در جاوااسکریپت",
    image: "/image/blog/3.png",
  },
  {
    id: 4,
    title: "بهینه‌سازی سئو برای پروژه‌های ",
    image: "/image/blog/4.png",
  },
  {
    id: 8,
    title: "ساخت API با Node.js",
    image: "/image/blog/4.png",
  },
];

function Page() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} title={post.title} image={post.image} />
        ))}
      </div>
    </div>
  );
}

export default Page;
