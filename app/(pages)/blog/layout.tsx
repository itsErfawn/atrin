import Container from "@/components/module/container/Container";
import "../../../app/globals.css";
import Breadcrumb from "@/components/module/ui/Breadcrumb";
import { Search } from "lucide-react";
import BoxSideBar from "@/components/module/ui/shop/BoxSideBar";
import BlogTopics from "@/components/module/Blog/BlogTopics";
import BLogFilter from "@/components/module/Blog/BLogFilter";
import SidebarBlog from "@/components/module/Blog/SidebarBlog";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <section className="flex flex-col ">
        <div>
          <Breadcrumb />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[37%] md:sticky md:top-4 md:self-start">
            <SidebarBlog />
          </div>

          <div className="flex flex-col w-full  mt-5">
            <BLogFilter />

            <div className=" mt-5">{children}</div>
          </div>
        </div>
      </section>
    </Container>
  );
}
