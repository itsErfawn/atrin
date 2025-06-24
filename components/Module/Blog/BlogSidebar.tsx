import React from "react";
import SearchBar from "./SearchBar";

function BlogSidebar() {
  return (
    <div className="flex flex-col  gap-8">
      <SearchBar />

      <aside className="bg-white border border-stone-100 rounded-md p-4">
        <h3 className="font-bold text-base mb-4">آخرین مقالات</h3>
        <ul className="text-sm space-y-3">
          <li>
            راهنمای کامل برای انتخاب لباس مناسب در هر فصل
            <hr className="my-2 border-stone-200" />
          </li>
          <li>
            ترندهای لباس مردانه و زنانه در سال 2025
            <hr className="my-2 border-stone-200" />
          </li>
          <li>
            بهترین راه‌های نگه‌داری و افزایش عمر لباس‌ها
            <hr className="my-2 border-stone-200" />
          </li>
          <li>
            نکات مهم در خرید لباس برای استایل راحت و شیک روزمره
            <hr className="my-2 border-stone-200" />
          </li>
          <li>برندهای معتبر لباس کدامند و چه چیزی آن‌ها را خاص می‌کند؟</li>
        </ul>
      </aside>
    </div>
  );
}

export default BlogSidebar;
