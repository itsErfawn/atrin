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
    <div className="footer-links-container">
      {[1, 2].map((_, index) => (
        <div key={index} className="footer-link-wrapper">
          <h3 className="footer-link-wrapper_heading">
            {index === 0 ? "خدمات مشتریان" : "دسترسی سریع"}
          </h3>
          <ul className="space-y-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="footer-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterLinks;
