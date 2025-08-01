"use client";

import FilterHeader from "@/components/module/ui/shared/FilterHeader";

const sortOptions = [
  "مرتب‌ سازی پیش‌ فرض",
  "پرفروش‌ ترین",
  "محبوبیت",
  "میانگین امتیاز",
  "جدید ترین",
  "ارزان‌ ترین",
  "گران ‌ترین",
];

export default function ShopFilter() {
  return (
    <FilterHeader
      title="فروشگاه"
      options={sortOptions}
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}
