"use client";
import { UseStore } from "@/app/store";
import { ProductType } from "@/types/products";
import { ShoppingCart } from "lucide-react";
import React from "react";

function BtnAddCard({ product }: { product: ProductType }) {
  // const UseStoreitem = UseStore();
  async function handler(){
    const quantity=1
    const res=await fetch("/api/cart",{
      method:"POST",
      body:JSON.stringify({id:product.id,quantity})
    })
    const data =await res.json()
    console.log(data);
  }
  return (
    <button
      // onClick={() => UseStoreitem.addToCart(product)}
      onClick={handler}
      className="w-full bg-primary text-white py-3 rounded flex items-center justify-center gap-2 hover:bg-primary/90 transition"
    >
      <ShoppingCart className="w-5 h-5" />
      افزودن به سبد خرید
    </button>
  );
}

export default BtnAddCard;
