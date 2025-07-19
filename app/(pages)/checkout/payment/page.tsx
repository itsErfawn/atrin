import React from "react";
import Container from "@/components/module/container/Container";
import CartSummary from "@/components/module/shopcard/CartSummary";
import PaymentForm from "@/components/module/shopcard/PaymentForm";

const Payment: React.FC = () => {
  return (
    <Container>
      <main className="px-4 md:px-8 py-6">
        <section className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-col w-full lg:w-2/3 space-y-3 border p-2 border-stone-300 rounded-md">
            <h2 className="text-lg font-semibold mb-2">جزئیات پرداخت</h2>
            <PaymentForm />
          </div>
          <div className="w-full lg:w-1/3">
            <CartSummary />
          </div>
        </section>
      </main>
    </Container>
  );
};

export default Payment;
