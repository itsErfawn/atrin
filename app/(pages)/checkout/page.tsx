import Container from "@/components/module/container/Container";
import CartActions from "@/components/module/shopcard/CartActions";
import CartList from "@/components/module/shopcard/CartList";
import CartSummary from "@/components/module/shopcard/CartSummary";
import { unstable_ViewTransition as ViewTransition } from "react";
export default function CartPage() {
  return (
    <ViewTransition enter={"slide-in"} >
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
    </ViewTransition>
  );
}
