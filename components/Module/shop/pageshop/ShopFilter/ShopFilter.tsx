"use client";
import React, { useState } from "react";
import Link from "next/link";
import { sortOptions } from "@/context/DatasortOptions";
type Tchange = {
  label: string;
};
export default function ShopFilter() {
  const [active, setactive] = useState("پیش فرض");
  function handelchange({ label }: Tchange) {
    setactive(label);
  }
  return (
    <div className="p-2 sm:p-4 bg-white rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
      <form>
        <ul className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
          <li className="text-primary text-sm sm:text-base font-semibold">
            مرتب سازی بر اساس :
          </li>

          {sortOptions.map(({ label, href, value }) => (
            <li
              key={value}
              className={`cursor-pointer rounded-md text-sm sm:text-base
                ${
                  label === active
                    ? "font-bold text-white bg-primary px-2 py-1"
                    : "text-primary hover:bg-primary hover:text-white px-2 py-1"
                }`}
              onClick={() => handelchange({ label })}
            >
              <Link href={href} className="block whitespace-nowrap">
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
