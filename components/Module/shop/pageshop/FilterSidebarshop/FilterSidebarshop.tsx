"use client";

import React, { useState } from "react";
import { Layers, Filter } from "lucide-react";
import Link from "next/link";
import FilterModal from "./FilterModal";
import { filterItems } from "@/context/DatafilterItems";

function FilterTags() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2 bg-white p-2 rounded-md">
        <div className="flex overflow-x-auto whitespace-nowrap gap-4 px-3 py-1 scrollbar-hide">
          {filterItems.map(({ id, label, icon, href }) => (
            <Link
              key={id}
              href={href}
              className="inline-flex items-center cursor-pointer gap-1 px-2 py-1 rounded-md bg-gray-200 text-primary hover:bg-primary hover:text-white transition text-sm"
            >
              {icon}
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between px-3 py-1 border border-stone-200 text-sm text-primary rounded-md">
          <button onClick={() => setShowModal(true)}>
            <Filter />
          </button>
          <span>۱۵۰ محصول پیدا شد</span>
          <Layers />
        </div>
      </div>

      <FilterModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default FilterTags;
