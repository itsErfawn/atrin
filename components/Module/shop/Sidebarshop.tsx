"use client";
import React, { useState } from "react";
import Container from "../container/Container";
import BoxSideBar from "../ui/shop/BoxSideBar";
import ColorFilter from "./pageshop/ShopFilter/ColorFilter";
import PriceFilter from "./pageshop/ShopFilter/PriceFilter";
import BrandFilter from "./pageshop/ShopFilter/BrandFilter";
import { Search, X } from "lucide-react";

function Sidebarshop() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <Container>
      <div className="md:hidden fixed bottom-4 right-4 z-30">
        <button
          onClick={toggleSidebar}
          className="bg-primary text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
        >
          فیلتر
        </button>
      </div>

      <section className="hidden md:block">
        <FilterContent />
      </section>

      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isMobileSidebarOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 bg-opacity-50 transition-opacity ${
            isMobileSidebarOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleSidebar}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[70%] bg-white shadow-xl transition-transform duration-300 ${
            isMobileSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 h-full overflow-y-auto">
            <div className="flex items-center justify-end mb-4">
              <button onClick={toggleSidebar}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      </div>
    </Container>
  );
}

function FilterContent() {
  return (
    <>
      <form className="bg-secondary-10 p-3 rounded-xl mb-4">
        <div className="relative">
          <input
            type="search"
            placeholder="جست و جو کنید"
            className="w-full p-2 rounded-md pr-10"
          />
          <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
        </div>
      </form>

      <BoxSideBar title="فیلتر براساس قیمت :">
        <PriceFilter />
      </BoxSideBar>
      <BoxSideBar title="فیلتر براساس رنگ :">
        <ColorFilter />
      </BoxSideBar>

      <BoxSideBar title="فیلتر بر اساس برند:">
        <BrandFilter />
      </BoxSideBar>
    </>
  );
}

export default Sidebarshop;
