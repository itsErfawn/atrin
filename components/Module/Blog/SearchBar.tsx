"use client"
import React, { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [value,setValue]=useState("")
  const router=useRouter()
  function searchHandler(){
    if(!value)return;
    router.push(`?search=${value}`)
  }
  return (
    <form onSubmit={e=>{e.preventDefault();searchHandler()}} className="bg-white border border-stone-100 rounded-md p-4 flex items-center gap-2">
      <Search className="text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="جستجو..."
        className="w-full outline-none text-sm bg-transparent placeholder:text-gray-400"
        onChange={e=>setValue(e.target.value)}
      />
      <button type="submit" className="bg text-white text-sm px-4 py-1 rounded-md hover:bg-stone-800 transition">
        جستجو
      </button>
    </form>
  );
}
