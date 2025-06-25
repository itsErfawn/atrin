"use client";

import { productInfoData } from "@/context/productInfoData";
import { X, Truck, Clock, DollarSign, RotateCcw } from "lucide-react";
import React from "react";

interface ProductInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductInfoModal({
  isOpen,
  onClose,
}: ProductInfoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center z-50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-lg text-right"
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-900"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-bold mb-5 text-center">
          اطلاعات ارسال و گارانتی
        </h2>

        <ul className="flex justify-between text-gray-700 text-sm mt-6 gap-3 flex-wrap">
          {productInfoData.map(({ icon, text }, idx) => (
            <li
              key={idx}
              className="flex flex-col items-center gap-0.5 flex-1 text-center border border-gray-300 rounded-md p-3 bg-white min-w-[120px]"
            >
              {icon}
              <span className="text-xs leading-tight">{text}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-gray-600 text-right leading-relaxed">
          در صورت داشتن سوال بیشتر، با پشتیبانی تماس بگیرید.
        </p>
      </div>
    </div>
  );
}
