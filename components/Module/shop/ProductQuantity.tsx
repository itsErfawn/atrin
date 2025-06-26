"use client";
import { UseStore } from "@/app/store";
import React from "react";
type TproductId = {
  productId: number;
};
function ProductQuantity({ productId }: TproductId) {
  const { totalQuantity, increment, decrement } = UseStore();

  return (
    <div
      className={`flex items-center gap-2 border border-stone-400 p-2 rounded-md w-full sm:w-1/2 max-w-xs mx-auto sm:mx-0 ${
        totalQuantity === 0
          ? "text-stone-300 border-stone-200 bg-stone-100"
          : ""
      }`}
    >
      <button
        onClick={() => decrement(productId)}
        className="px-3 py-1 rounded flex-1"
        disabled={totalQuantity === 0}
      >
        -
      </button>
      <div className="w-[1px] h-6 bg-gray-400" />
      <span className="text-center flex-1">{totalQuantity}</span>
      <div className="w-[1px] h-6 bg-gray-400" />
      <button
        onClick={() => increment(productId)}
        className="px-3 py-1 rounded flex-1"
      >
        +
      </button>
    </div>
  );
}

export default ProductQuantity;
