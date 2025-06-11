import Link from "next/link";
import React from "react";

const links = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/my-account", label: "حساب کاربری من" },
  { href: "/cart", label: "سبد خرید" },
  { href: "/blog", label: "وبلاگ" },
  { href: "/shop", label: "فروشگاه" },
];

function FooterLinks() {
  return (
    <div className="flex flex-row sm:flex-row w-full md:w-[35%] gap-8 order-2">
      {[1, 2].map((_, index) => (
        <aside key={index} className="w-full sm:w-1/2">
          <h3 className="text-xl font-bold mb-4">
            {index === 0 ? "خدمات مشتریان" : "دسترسی سریع"}
          </h3>
          <ul className="space-y-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-gray-400">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ))}
    </div>
  );
}

export default FooterLinks;
