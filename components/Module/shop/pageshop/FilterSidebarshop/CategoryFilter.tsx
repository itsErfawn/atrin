import React, { useState, useRef, useEffect } from "react";

function CategoryFilter() {
  const categories = [];
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  function handleSelect() {
    console.log("asd");
  }
  return (
    <div className="relative w-64" ref={dropdownRef}>
      <input
        readOnly
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
      />

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleSelect}
              className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryFilter;
