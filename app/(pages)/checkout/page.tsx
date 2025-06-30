import Container from "@/components/Module/container/Container";
import CartActions from "@/components/Module/shopcard/CartActions";
import CartList from "@/components/Module/shopcard/CartList";
import CartSummary from "@/components/Module/shopcard/CartSummary";

export default function CartPage() {
  return (
    <Container>
      <main className="px-4 md:px-8 py-6">
        <section className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-col w-full lg:w-2/3 space-y-3">
            <CartList />
            <CartActions />
          </div>
          <div className="w-full lg:w-1/3">
            <CartSummary />
          </div>
        </section>
      </main>
    </Container>
  );
}
