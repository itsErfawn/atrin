import React from "react";

interface Props {
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}

const PriceFilter = ({ price, setPrice }: Props) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="priceRange"
        className="block font-semibold mb-2 text-gray-700"
      >
        فیلتر بر اساس قیمت: (تا {price.toLocaleString()} تومان)
      </label>
      <input
        id="priceRange"
        type="range"
        min={0}
        max={1000000}
        step={10000}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>۰ تومان</span>
        <span>۱,۰۰۰,۰۰۰ تومان</span>
      </div>
    </div>
  );
};

export default PriceFilter;
