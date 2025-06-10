"use client";
import React from "react";
import { Instagram, Youtube, Send } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t py-10 text-right rtl">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row flex-wrap gap-8">
        <aside className="w-full md:w-[35%] order-1 md:order-4">
          <h3 className="text-xl font-bold mb-4">فروشگاه آترین</h3>
          <p className="text-[#7A7A7A] text-right">
            به دنیای فروشگاه آترین خوش آمدید، جایی که زیبایی و کیفیت در هم
            می‌آمیزند! فروشگاه آترین با هدف ارائه بهترین محصولات و خدمات به شما
            عزیزان تأسیس شده است. ما در آترین به دنبال آن هستیم که با دقت و
            علاقه به انتخاب محصولات باکیفیت و متنوع، نیازهای روزمره شما را برطرف
            کنیم.
          </p>
        </aside>

        <div className="flex flex-row sm:flex-row w-full md:w-[35%] gap-8 order-2">
          <aside className="w-full sm:w-1/2">
            <h3 className="text-xl font-bold mb-4">خدمات مشتریان</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400">
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a href="/my-account" className="hover:text-gray-400">
                  حساب کاربری من
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-gray-400">
                  سبد خرید
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-gray-400">
                  وبلاگ
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-gray-400">
                  فروشگاه
                </a>
              </li>
            </ul>
          </aside>

          <aside className="w-full sm:w-1/2">
            <h3 className="text-xl font-bold mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400">
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a href="/my-account" className="hover:text-gray-400">
                  حساب کاربری من
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-gray-400">
                  سبد خرید
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-gray-400">
                  وبلاگ
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-gray-400">
                  فروشگاه
                </a>
              </li>
            </ul>
          </aside>
        </div>

        <aside className="w-full  md:w-[20%] order-3 md:order-1">
          <h3 className="text-xl font-bold mb-4">نماد اعتماد</h3>
          <img
            src="https://d1.siteroze.ir/wp-content/uploads/2025/04/per.png"
            alt="نماد اعتماد"
            className="max-w-full h-auto"
          />
        </aside>
      </div>

      <div className="container mx-auto  px-4 py-4 rounded-md  mt-10 flex flex-col md:flex-row justify-between bg-[#313131] items-center gap-6 md:gap-0 rtl text-white">
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <div className="flex flex-col gap-2 sm:flex-row">
            <a href="#">
              <img
                src="https://d1.siteroze.ir/wp-content/themes/atrin/img/app/play.svg"
                alt="Google Play"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="https://d1.siteroze.ir/wp-content/themes/atrin/img/app/bazar.svg"
                alt="Bazaar"
                className="h-10"
              />
            </a>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a href="#">
              <img
                src="https://d1.siteroze.ir/wp-content/themes/atrin/img/app/myket.svg"
                alt="Myket"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="https://d1.siteroze.ir/wp-content/themes/atrin/img/app/sibapp.svg"
                alt="SibApp"
                className="h-10"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 text-center">
          <img
            src="https://d1.siteroze.ir/wp-content/themes/atrin/img/icon-application.png"
            alt="اپلیکیشن"
            className="w-12 h-12"
          />
          <p className="text-lg font-semibold">دانلود اپلیکیشن</p>
        </div>
      </div>

      <div className="container mx-auto px-4  flex justify-between items-center pt-4">
        <div></div>
        <div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1 text-sm hover:text-gray-400 border p-2 rounded-2xl border-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
            برو به بالا
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-4 gap-2 md:gap-0">
        <p className="text-[#7A7A7A]">
          کلیه حقوق این وب‌سایت متعلق به فروشگاه آترین می‌باشد
        </p>
        <div className="flex gap-4 text-xl text-stone-500">
          <a href="#">
            <Instagram size={20} />
          </a>
          <a href="#">
            <Send size={20} />
          </a>
          <a href="#">
            <Youtube size={20} />
          </a>
          <a href="#">
            <Send size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
