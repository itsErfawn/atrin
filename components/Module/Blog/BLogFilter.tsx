"use client";
import React from "react";
import FilterHeader from "../ui/shared/FilterHeader";
const sortOptions = ["جدیدترین", "قدیمی ترین", "داغ ترین"];

function BLogFilter() {
  return (
    <FilterHeader
      title="مقالات"
      options={sortOptions}
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}

export default BLogFilter;
