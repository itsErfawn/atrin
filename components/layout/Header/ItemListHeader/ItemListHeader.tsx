"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linknav } from "@/context/DataListHeaderItem";

function ItemListHeader() {
  const pathname = usePathname();

  return (
    <nav className="px-4 py-2 hidden md:block">
      <ul className="flex justify-center gap-6 text-sm md:text-base font-medium">
        {Linknav.map((item, index) => {
          const isActive = pathname === item.Path;

          return (
            <li key={index}>
              <Link
                href={item.Path}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-gray-600 font-semibold"
                    : "text-gray-700 hover:text-gray-500"
                }`}
              >
                {item.Name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default ItemListHeader;
