import React from "react";
import StoryHeaderSidebarshop from "./StoryHeaderSidebarshop";

function HeaderSidebarshop() {
  return (
    <section className="flex items-center gap-4 p-4">
      <div className="w-1/2">
        <StoryHeaderSidebarshop />
      </div>
      <div className="flex gap-4 text-sm text-gray-700 w-full">
        <span className="flex flex-col items-center text-[17px] font-semibold">
          <span>بازدید</span>
          <span>9k</span>
        </span>
        <span className="flex flex-col items-center text-[17px] font-semibold">
          <span>مشتری</span>
          <span>12</span>
        </span>
        <span className="flex flex-col items-center text-[17px] font-semibold">
          <span>محصول</span>
          <span>20</span>
        </span>
      </div>
    </section>
  );
}

export default HeaderSidebarshop;
