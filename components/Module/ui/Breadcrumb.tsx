"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import "../../../app/globals.css";
export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const convertSlugToName = (slug: string) => {
    const map: Record<string, string> = {
      shop: "فروشگاه",
    };
    return map[slug] || slug;
  };

  return (
    <nav className="text-sm breadcrumbs text-gray-600 py-2 px-4">
      <ol className="flex items-center space-x-2 rtl:space-x-reverse">
        <li>
          <Link href="/" className="hover:underline ">
            خانه
          </Link>
        </li>
        {segments.map((seg, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2">/</span>
              <Link href={href} className="hover:underline ">
                {convertSlugToName(seg)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
