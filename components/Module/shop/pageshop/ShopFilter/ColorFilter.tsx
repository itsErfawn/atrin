import React from "react";

const filterColors = [
  "قرمز",
  "آبی",
  "زرد",
  "سبز",
  "مشکی",
  "سفید",
  "خاکستری",
  "نارنجی",
  "بنفش",
  "صورتی",
  "قهوه‌ای",
  "طلایی",
];

function ColorFilter() {
  return (
    <div className="grid grid-rows-3 gap-4">
      {Array.from({ length: 3 }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-3 gap-2">
          {filterColors
            .slice(rowIndex * 3, rowIndex * 3 + 3)
            .map((color, index) => (
              <label
                key={index}
                className="flex items-center gap-1 text-secondary !text-[14px] !font-extralight"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 appearance-none rounded-full 
                  bg-secondary-20 checked:bg-primary checked:border-transparent 
                  focus:outline-none transition duration-200"
                />
                {color}
              </label>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ColorFilter;
