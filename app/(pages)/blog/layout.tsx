import BlogHeader from "@/components/Module/Blog/BlogHeader";
import BlogSidebar from "@/components/Module/Blog/BlogSidebar";
import Container from "@/components/Module/container/Container";
import "../../../app/globals.css";
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div className="flex gap-6 mt-10">
        <div className="flex flex-col w-full gap-4">
          <BlogHeader />
          <main>{children}</main>
        </div>
        <aside className="w-[30%]">
          <BlogSidebar />
        </aside>
      </div>
    </Container>
  );
}
