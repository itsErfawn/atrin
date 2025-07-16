"use client";
import React, { useState } from "react";
import { sortOptions } from "@/context/DatasortOptions";
import { useRouter } from "next/navigation";

type Tchange = {
  label: string;
};

export default function ShopFilter() {
  const router=useRouter()
  const [active, setactive] = useState("پیش فرض");

  function handelchange({ label }: Tchange) {

    setactive(label);
  }
  function handleRoute(value:string){
    router.push(`?orderby=${value}`)
  }
  return (
    <div className="p-2 sm:p-4  bg-white rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
      <div>
        <ul className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
          <li className="text-primary text-sm sm:text-base font-semibold">
            مرتب سازی بر اساس :
          </li>

          {sortOptions.map(({ label, value }) => (
            <li key={value} onClick={() => handelchange({ label })}>
              <button onClick={()=>handleRoute(value)} >
                <span
                  className={`btn btn-sm ${
                    label === active ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
