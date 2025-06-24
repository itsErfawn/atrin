import React from "react";
import ProductMoreinformation from "./ProductMoreinformation";

export default function ProductDescription() {
  return (
    <>
      <div className="bg-gray-50 rounded-md p-5 mt-6 shadow-sm mx-auto max-w-3xl">
        <h3 className="text-lg font-semibold mb-3 text-right">توضیحات محصول</h3>
        <p className="text-gray-700 text-sm text-right leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus unde enim perferendis fuga hic, rerum similique
          temporibus earum provident amet sunt aspernatur animi minus maxime
          molestias dolores non ipsa! Officiis.
        </p>
        <ProductMoreinformation />
      </div>
    </>
  );
}
