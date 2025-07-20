import { GetCarts } from "@/controllers/CartController";
import CartItem from "./CartItem";

export default async function CartList() {
  const cart=await GetCarts()
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mx-auto md:mx-0">
      {cart?.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
