"use client";
import Container from "@/components/module/container/Container";
import Image from "next/image";
import React, { useState } from "react";

const sortOptions = [
  "مرتب‌ سازی پیش‌ فرض",
  "پرفروش‌ ترین",
  "محبوبیت",
  "میانگین امتیاز",
  "جدید ترین",
  "ارزان‌ ترین",
  "گران ‌ترین",
];

function ShopFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  return (
    <Container>
      <section className="relative flex items-center w-full gap-2">
        <h4 className="text-secondary">پوشاک ورزشی</h4>

        <div className="flex-1 border-t border-dashed border-secondary-40" />

        <button
          className="button bg-secondary-10 flex items-center gap-2 font-IRANYekan"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src="/image/shop/menu.svg" alt="icon" width={20} height={20} />
          مرتب سازی
        </button>

        <div
          className={`absolute top-full left-0 mt-2 w-32 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 z-50
            ${
              isOpen || isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }
          `}
        >
          <ul className="bg-secondary-10 text-sm text-secondary">
            {sortOptions.map((option, idx) => (
              <li
                key={idx}
                className="px-4 py-2 hover:text-secondary-80 cursor-pointer transition"
                onClick={() => setIsOpen(false)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
}

export default ShopFilter;
