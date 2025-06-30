import Link from "next/link";
import { User, Search, Heart, ShoppingCart } from "lucide-react";

import LoginPopUp from "../../login/LoginPopUp";

export function IconsListHeader({ cookie }: { cookie: boolean }) {
  return (
    <section className="flex justify-center">
      <div className="container flex h-16 items-center justify-between">
        <div className="hidden md:flex items-center gap-4">
          <div>
            {cookie ? (
              <Link href={"/account"}>
                <User className="h-8 w-8 cursor-pointer" />
              </Link>
            ) : (
              <LoginPopUp />
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => {
                const el = document.getElementById("search-dropdown");
                if (el) {
                  el.classList.toggle("hidden");
                }
              }}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">جستجو</span>
            </button>

            <div
              id="search-dropdown"
              className="hidden absolute left-0 mt-2 w-72 rounded-md bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 z-50"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="جستجوی محصولات..."
                  className="w-full rounded-md border border-gray-300 pl-9 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="mt-3 text-sm text-gray-500">
                امتحان کنید: <span className="font-medium">لپ‌تاپ</span>،
                <span className="font-medium">گوشی</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center p-4">
          <Link href="/" className="flex items-center gap-2">
            <img className="w-24 h-14" src="/logo.png" alt="لوگو" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/favorites"
            className="relative inline-flex items-center p-2 rounded-md hover:bg-gray-100"
          >
            <Heart className="h-5 w-5 text-gray-700" />
            <span className="sr-only">علاقه‌مندی‌ها</span>
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
              ۳
            </span>
          </Link>

          <Link
            href="/checkout"
            className="relative inline-flex items-center p-2 rounded-md hover:bg-gray-100"
          >
            <ShoppingCart className="h-5 w-5 text-gray-700" />
            <span className="sr-only">سبد خرید</span>
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
              ۲
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
