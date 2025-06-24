"use client";

import React, { useState } from "react";
import ProductInfoModal from "./ProductInfoModal";

function ProductMoreinformation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center mt-5">
        <button
          onClick={() => setIsOpen(true)}
          className="text-primary hover:underline font-semibold text-sm"
        >
          اطلاعات بیشتر
        </button>
      </div>
      <ProductInfoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default ProductMoreinformation;
