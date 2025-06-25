import React from "react";

interface ProductPriceProps {
  price: number;
  discount: number;
}

function ProductPrice({ price, discount }: ProductPriceProps) {
  const discountPercent = Math.round(((price - discount) / price) * 100);

  return (
    <p className="text-lg font-semibold text-primary flex items-center gap-3 bg-gray-100 rounded px-3 py-1 whitespace-nowrap">
      <span className="flex">
        {discount.toLocaleString()} <span>تومان</span>
      </span>
      <span className="line-through text-gray-400 mx-2">
        {price.toLocaleString()}
      </span>
      <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
        {discountPercent}% تخفیف
      </span>
    </p>
  );
}

export default ProductPrice;
