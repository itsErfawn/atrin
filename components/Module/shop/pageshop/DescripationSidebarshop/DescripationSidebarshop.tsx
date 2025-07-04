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

      <div className="flex flex-col gap-2 sm:flex-row">
        <button className="btn btn-md btn-primary w-full sm:w-1/2 flex items-center justify-center gap-2">
          <PackageCheck size={18} />
          پیگیری سفارش
        </button>
        <button className="btn btn-md btn-outline w-full sm:w-1/2 flex items-center justify-center gap-2">
          <Phone size={18} />
          تماس با ما
        </button>
      </div>
    </>
  );
}
export default DescripationSidebarshop;
