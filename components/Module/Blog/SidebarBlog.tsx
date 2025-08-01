"use client";
import React, { useState } from "react";
import Container from "../container/Container";

import FilterContentBlog from "./FilterContentBlog";
import { X } from "lucide-react";
function SidebarBlog() {
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
        <FilterContentBlog />
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
            <FilterContentBlog />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SidebarBlog;
