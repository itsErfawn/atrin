import { Repeat, ShieldCheck, Star, Truck } from "lucide-react";
import React from "react";

function ProductBenefits() {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700">
      {[
        {
          icon: <ShieldCheck className="w-8 h-8 text-primary" />,
          label: "گارانتی اصالت کالا",
        },
        {
          icon: <Truck className="w-8 h-8 text-primary" />,
          label: "ارسال سریع",
        },
        {
          icon: <Repeat className="w-8 h-8 text-primary" />,
          label: "7 روز بازگشت کالا",
        },
        {
          icon: <Star className="w-8 h-8 text-primary" />,
          label: "رضایت مشتریان",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center gap-1 p-3 border rounded-md shadow-sm hover:shadow-md transition"
        >
          {item.icon}
          <span className="text-sm font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default ProductBenefits;
