import { Truck, Clock, DollarSign, RotateCcw } from "lucide-react";
import React from "react";

export const productInfoData: { icon: React.ReactNode; text: string }[] = [
  {
    icon: <Truck className="w-5 h-5 text-primary mx-auto mb-1" />,
    text: "ارسال رایگان برای سفارش‌های بالای 500,000 تومان",
  },
  {
    icon: <Clock className="w-5 h-5 text-primary mx-auto mb-1" />,
    text: "مدت زمان تحویل: 2 تا 5 روز کاری",
  },
  {
    icon: <DollarSign className="w-5 h-5 text-primary mx-auto mb-1" />,
    text: "هزینه ارسال برای سفارش‌های کمتر: 30,000 تومان",
  },
  {
    icon: <RotateCcw className="w-5 h-5 text-primary mx-auto mb-1" />,
    text: "ضمانت بازگشت کالا تا 7 روز پس از دریافت",
  },
];
