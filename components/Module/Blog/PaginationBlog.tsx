import Link from "next/link";
import React from "react";

function PaginationBlog({
  currentPage,
  pages,
}: {
  currentPage: number;
  pages: number;
}) {
  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      {currentPage > 1 && (
        <Link
          href={`?page=${currentPage - 1}`}
          className="px-3 py-2 bg-stone-200 rounded-lg hover:bg-stone-300 transition"
        >
          قبلی
        </Link>
      )}

      {Array.from({ length: pages }, (_, i) => i + 1)
        .filter((p) => p === 1 || p === pages || Math.abs(p - currentPage) <= 1)
        .map((p, idx, arr) => {
          const prev = arr[idx - 1];
          return (
            <React.Fragment key={p}>
              {prev && p - prev > 1 && <span className="px-2">...</span>}
              <Link
                href={`?page=${p}`}
                className={`px-3 py-2 rounded-lg ${
                  currentPage === p
                    ? "bg-primary text-white"
                    : "bg-stone-200 hover:bg-stone-300"
                } transition`}
              >
                {p}
              </Link>
            </React.Fragment>
          );
        })}

      {currentPage < pages && (
        <Link
          href={`?page=${currentPage + 1}`}
          className="px-3 py-2 bg-stone-200 rounded-lg hover:bg-stone-300 transition"
        >
          بعدی
        </Link>
      )}
    </div>
  );
}

export default PaginationBlog;
