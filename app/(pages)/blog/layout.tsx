import BlogHeader from "@/components/module/blog/BlogHeader";
import BlogSidebar from "@/components/module/blog/BlogSidebar";
import Container from "@/components/Module/container/Container";
import "../../../app/globals.css";
import BlogsModel from "@/models/BlogsModel";
import { BlogCardCollection } from "@/types/blogs";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const latestBlog=await BlogsModel.getLatestBlog() as BlogCardCollection
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        <div className="flex flex-col w-full gap-4">
          <BlogHeader />
          <main>{children}</main>
        </div>

        <aside className="w-full lg:w-[30%] hidden lg:block">
          <BlogSidebar latestBlog={latestBlog} />
        </aside>
      </div>
    </Container>
  );
}
