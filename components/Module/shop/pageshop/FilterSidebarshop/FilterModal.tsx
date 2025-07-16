"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import { useRouter } from "next/navigation";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function FilterModal({ isOpen, onClose }: Props) {
  const [price, setPrice] = useState(1000000);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const route = useRouter();

  if (!isOpen) return null;

  function handleReset() {
    setPrice(1000000);
    setSelectedColors([]);
    setSelectedSizes([]);

    route.push("/shop");
  }

  return (
    <div className="fixed inset-0 z-[1000]   bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg  w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded hover:bg-gray-200"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-primary mb-6 mt-10">
          فیلتر محصولات
        </h2>

        <PriceFilter price={price} setPrice={setPrice} />
        <CategoryFilter />
        <div className="flex justify-between gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            بازنشانی
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
