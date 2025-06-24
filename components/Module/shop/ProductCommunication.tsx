import { Heart, MessageCircle, Send } from "lucide-react";
import React from "react";

function ProductCommunication() {
  return (
    <div className="absolute top-4 right-4 flex flex-col gap-3 bg-white bg-opacity-70 p-2 rounded-lg shadow">
      {[
        {
          icon: <Heart className="w-10 h-6" />,
          tooltip: "افزودن به علاقه‌مندی",
        },
        { icon: <Send className="w-10 h-6" />, tooltip: "ارسال محصول" },
        {
          icon: <MessageCircle className="w-10 h-6" />,
          tooltip: "ارسال نظر",
        },
      ].map((item, index) => (
        <div className="relative group" key={index}>
          <button className="hover:text-primary transition">{item.icon}</button>
          <span className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
            {item.tooltip}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ProductCommunication;
