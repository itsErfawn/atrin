import BlogHeader from "@/components/Module/blog/BlogHeader";
import BlogSidebar from "@/components/Module/blog/BlogSidebar";
import Container from "@/components/Module/container/Container";
import "../../../app/globals.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        <div className="flex flex-col w-full gap-4">
          <BlogHeader />
          <main>{children}</main>
        </div>

        <aside className="w-full lg:w-[30%] hidden lg:block">
          <BlogSidebar />
        </aside>
      </div>
    </Container>
  );
}
