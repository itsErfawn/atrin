import React from "react";

function ProductQuantity() {
  return (
    <div className="flex items-center gap-2 border border-stone-400 p-2 rounded-md w-full sm:w-1/2 max-w-xs mx-auto sm:mx-0">
      <button className="px-3 py-1 rounded flex-1">-</button>
      <div className="w-[1px] h-6 bg-gray-400" />
      <span className="text-center flex-1">2</span>
      <div className="w-[1px] h-6 bg-gray-400" />
      <button className="px-3 py-1 rounded flex-1">+</button>
    </div>
  );
}

export default ProductQuantity;
