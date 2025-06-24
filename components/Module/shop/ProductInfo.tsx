import { CheckCircle, Gem, QrCode } from "lucide-react";
import React from "react";

function ProductInfo() {
  return (
    <div className="text-sm space-y-1 text-gray-600 flex flex-wrap">
      <p className="flex w-full sm:w-1/2 text-primary text-lg items-center p-2 sm:p-3">
        <Gem className="w-4 h-4" />
        موجود در انبار
      </p>
      <p className="flex w-full sm:w-1/2 text-primary text-lg items-center justify-center p-2 sm:p-3">
        <CheckCircle className="w-4 h-4" />
        برند: نایکی
      </p>
      <p className="flex w-full sm:w-1/2 text-primary text-lg items-center p-2 sm:p-3">
        <QrCode className="w-4 h-4" />
        دسته: لباس زنانه
      </p>
    </div>
  );
}

export default ProductInfo;
