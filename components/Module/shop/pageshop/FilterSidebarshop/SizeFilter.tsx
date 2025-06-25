import React from "react";

const SIZES = ["S", "M", "L", "XL"];

interface Props {
  selectedSizes: string[];
  setSelectedSizes: React.Dispatch<React.SetStateAction<string[]>>;
}

const SizeFilter = ({ selectedSizes, setSelectedSizes }: Props) => {
  function toggleSize(size: string) {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  }

  return (
    <div className="mb-8">
      <p className="font-semibold mb-2 text-gray-700">فیلتر بر اساس سایز:</p>
      <div className="flex gap-3 flex-wrap">
        {SIZES.map((size) => {
          const isSelected = selectedSizes.includes(size);
          return (
            <button
              key={size}
              type="button"
              onClick={() => toggleSize(size)}
              className={`border rounded px-3 py-1 text-sm font-medium transition
                ${
                  isSelected
                    ? "bg-primary text-white border-primary"
                    : "bg-gray-100 text-gray-700 border-transparent hover:bg-primary hover:text-white hover:border-primary"
                }`}
              aria-pressed={isSelected}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SizeFilter;
