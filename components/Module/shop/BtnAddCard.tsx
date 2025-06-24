import { ShoppingCart } from "lucide-react";
import React from "react";

function BtnAddCard() {
  return (
    <button className="w-full bg-primary text-white py-3 rounded flex items-center justify-center gap-2 hover:bg-primary/90 transition">
      <ShoppingCart className="w-5 h-5" />
      افزودن به سبد خرید
    </button>
  );
}

export default BtnAddCard;
