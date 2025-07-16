import Link from "next/link";
import React from "react";

interface PaginationShopProps {
  currentPage: number;
  totalPages: number;
  category?: number;
  orderBy?: string;
}

export default function PaginationShop({
  currentPage,
  totalPages,
  category,
  orderBy,
}: PaginationShopProps) {
  const prevPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;

  const generateLink = (page: number) => {
    const params = new URLSearchParams();
    if (category) params.set("category", String(category));
    if (orderBy && orderBy !== "default") params.set("orderby", orderBy);
    params.set("page", String(page));
    return `/shop?${params.toString()}`;
  };

  return (
    <div className="flex justify-center gap-2 mt-6">
      <Link
        href={generateLink(prevPage)}
        className={`px-4 py-2 rounded-md ${
          currentPage === 1
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-primary text-white hover:bg-primary"
        }`}
        aria-disabled={currentPage === 1}
      >
        قبلی
      </Link>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={generateLink(page)}
          className={`px-4 py-2 rounded-md ${
            currentPage === page
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={generateLink(nextPage)}
        className={`px-4 py-2 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-primary text-white hover:bg-primary"
        }`}
        aria-disabled={currentPage === totalPages}
      >
        بعدی
      </Link>
    </div>
  );
}
