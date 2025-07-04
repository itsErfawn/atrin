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
    <div className="p-2 sm:p-4  bg-white rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
      <form>
        <ul className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
          <li className="text-primary text-sm sm:text-base font-semibold">
            مرتب سازی بر اساس :
          </li>

          {sortOptions.map(({ label, href, value }) => (
            <li key={value} onClick={() => handelchange({ label })}>
              <Link href={href}>
                <span
                  className={`btn btn-sm ${
                    label === active ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
