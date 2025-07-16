import { categoriesshop } from "@/context/Datacategoriesshop";
import { useUpdateQueryParams } from "@/hook/useUpdateQueryParams";
import { X } from "lucide-react";
import React, { useState } from "react";

type CategoryType = {
  label: string;
  id: number;
};

function CategoryFilter() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const updateQuery = useUpdateQueryParams();

  function handleSelect(val: number): void {
    setSelectedCategory(val);
    updateQuery({ category: val.toString() });
    setIsOpen(false);
  }

  return (
    <div className="relative w-64 mb-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
      >
        {isOpen === true ? (
          <X className="mx-auto hover:size-6.5 transition duration-300" />
        ) : (
          categoriesshop.find((c: CategoryType) => c.id === selectedCategory)
            ?.label || "فیلتر را انتخاب کنید"
        )}
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {categoriesshop.map((category: CategoryType) => (
            <li
              key={category.id}
              onClick={() => handleSelect(category.id)}
              className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer transition duration-300"
            >
              {category.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryFilter;
