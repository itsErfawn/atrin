import React from "react";
const originalPrice = 2760000;
const discountedPrice = 2540000;

const discountPercent = Math.round(
  ((originalPrice - discountedPrice) / originalPrice) * 100
);
function ProductPrice() {
  return (
    <p className="text-lg font-semibold text-primary flex items-center gap-3 bg-gray-100 rounded px-3 py-1 whitespace-nowrap">
      <span className="flex">
        {discountedPrice.toLocaleString()} <span>تومان</span>
      </span>
      <span className="line-through text-gray-400 mx-2">
        {originalPrice.toLocaleString()}
      </span>
      <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
        {discountPercent}% تخفیف
      </span>
    </p>
  );
}

export default ProductPrice;
