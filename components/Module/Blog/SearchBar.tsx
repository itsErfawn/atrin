import React from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="bg-white border border-stone-100 rounded-md p-4 flex items-center gap-2">
      <Search className="text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="جستجو..."
        className="w-full outline-none text-sm bg-transparent placeholder:text-gray-400"
      />
      <button className="bg text-white text-sm px-4 py-1 rounded-md hover:bg-stone-800 transition">
        جستجو
      </button>
    </div>
  );
}
