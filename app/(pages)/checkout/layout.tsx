import Container from "@/components/Module/container/Container";
import CartStepper from "@/components/module/shopcard/CartStepper";

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div className="rtl p-4 space-y-6">
        <CartStepper />
        <div>{children}</div>
      </div>
    </Container>
  );
}
