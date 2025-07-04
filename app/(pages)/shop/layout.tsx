import Container from "@/components/Module/container/Container";
import ShopFilter from "@/components/Module/shop/pageshop/ShopFilter/ShopFilter";
import Sidebarshop from "@/components/Module/shop/Sidebarshop";
import Breadcrumb from "@/components/Module/ui/Breadcrumb";

export default function ShopLayout({
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
          <div className="w-full md:w-[30%] md:sticky md:top-4 md:self-start">
            <Sidebarshop />
          </div>

          <div className="flex flex-col w-full  mt-5">
            <ShopFilter />

            <div className=" mt-5">{children}</div>
          </div>
        </div>
      </section>
    </Container>
  );
}
