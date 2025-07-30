"use client";

import Image from "next/image";
import React, { useState } from "react";

const brands = [
  { id: 1, name: "Nike", image: "/image/shop/nike.svg" },
  { id: 2, name: "Adidas", image: "/image/shop/adidas.svg" },
  { id: 5, name: "Puma", image: "/image/shop/puma.svg" },
  { id: 3, name: "Puma", image: "/image/shop/puma.svg" },
];

function BrandFilter() {
  const [selectedBrand, setSelectedBrand] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-3 gap-3">
      {brands.map((brand) => (
        <div
          key={brand.id}
          onClick={() =>
            setSelectedBrand(selectedBrand === brand.id ? null : brand.id)
          }
          className={`border-secondary-10 rounded-xl p-2 cursor-pointer transition duration-200 ${
            selectedBrand === brand.id
              ? " border-primary"
              : "hover:border-primary border-2"
          }`}
        >
          <Image
            src={brand.image}
            alt={brand.name}
            width={100}
            height={50}
            className="
            object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default BrandFilter;
