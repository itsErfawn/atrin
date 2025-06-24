import Container from "@/components/Module/container/Container";
import Sidebarshop from "@/components/Module/shop/Sidebarshop";
import Breadcrumb from "@/components/Module/ui/Breadcrumb";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <section className="flex flex-col">
        <div>
          <Breadcrumb />
        </div>
        <div className="flex">
          <div className="w-[24%]">
            <Sidebarshop />
          </div>
          <div className="flex flex-col w-full">
            <div className="bg-amber-100">filter</div>
            {children}
          </div>
        </div>
      </section>
    </Container>
  );
}
