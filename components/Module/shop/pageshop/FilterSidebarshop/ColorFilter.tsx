import React from "react";

const COLORS = [
  { name: "red", className: "bg-red-500" },
  { name: "blue", className: "bg-blue-500" },
  { name: "green", className: "bg-green-500" },
  { name: "yellow", className: "bg-yellow-400" },
  { name: "purple", className: "bg-purple-600" },
];

interface Props {
  selectedColors: string[];
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
}

const ColorFilter = ({ selectedColors, setSelectedColors }: Props) => {
  function toggleColor(color: string) {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  }

  return (
    <div className="mb-6">
      <p className="font-semibold mb-2 text-gray-700">فیلتر بر اساس رنگ:</p>
      <div className="flex gap-3 flex-wrap">
        {COLORS.map(({ name, className }) => {
          const isSelected = selectedColors.includes(name);
          return (
            <button
              key={name}
              type="button"
              onClick={() => toggleColor(name)}
              className={`w-8 h-8 rounded-full border-2 ${
                isSelected ? "border-primary scale-110" : "border-transparent"
              } shadow-md transition-transform`}
              style={{ backgroundColor: "transparent" }}
              aria-label={`رنگ ${name}`}
            >
              <span
                className={`${className} block w-full h-full rounded-full`}
              ></span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorFilter;
