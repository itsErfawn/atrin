"use client";

import React, { useState } from "react";

function PriceFilter() {
  const [price, setPrice] = useState<number>(5000);
  const maxPrice = 200;

  return (
    <div>
      <input
        type="range"
        min={20}
        max={maxPrice}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full accent-secondary-20"
      />
      <div className="flex justify-between text-secondary-80 mt-2">
        <span>{price.toLocaleString()} تومان</span>
        <span>{maxPrice.toLocaleString()} تومان</span>
      </div>
    </div>
  );
}

export default PriceFilter;
