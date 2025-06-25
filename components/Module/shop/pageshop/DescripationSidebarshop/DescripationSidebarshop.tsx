import React from "react";
import { PackageCheck, Phone } from "lucide-react";

function DescripationSidebarshop() {
  return (
    <>
      <h4 className="mb-4 text-sm leading-6 text-gray-700">
        به دنیای فروشگاه آترین خوش آمدید، جایی که زیبایی و کیفیت در هم
        می‌آمیزند! فروشگاه آترین با هدف ارائه بهترین محصولات و خدمات به شما
        عزیزان تأسیس شده است. ما در آترین به دنبال آن هستیم که نیازهای روزمره
        شما را برطرف کنیم.
      </h4>
      <div className="flex gap-2">
        <button className="flex items-center justify-center gap-2 border text-white border-primary rounded-md bg-primary hover:bg-white hover:text-primary w-1/2 p-1">
          <PackageCheck size={18} />
          پیگیری سفارش
        </button>
        <button className="flex items-center justify-center gap-2 border border-primary rounded-md bg-white hover:bg-primary hover:text-white w-1/2 p-1">
          <Phone size={18} />
          تماس با ما
        </button>
      </div>
    </>
  );
}

export default DescripationSidebarshop;
