"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Store, FileText, Heart, User } from "lucide-react";
import NavItem from "./NavItem";
import AccountNavItem from "./AccountNavItem";

const Linknav = [
  { Name: "فروشگاه", Path: "/shop", Icon: Store },
  { Name: "وبلاگ", Path: "/blog", Icon: FileText },
  { Name: "خانه", Path: "/", Icon: Home },
  { Name: "علاقه‌مندی", Path: "/favorites", Icon: Heart },
  { Name: "حساب من", Path: "/account", Icon: User },
];

function MobileNavbar({ cookie }: { cookie: boolean }) {
  const pathname = usePathname();

  return (
    <>
      <div className="flex items-center p-4">
        <Link href="/" className="flex items-center gap-2 ">
          <img className="w-24 h-11" src="/logo.png" alt="لوگو" />
        </Link>
      </div>

      <nav className="fixed bottom-3 left-3 right-3 z-50 bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-700 md:hidden px-2 py-2">
        <div className="flex justify-between items-center px-3">
          {Linknav.map((item, index) => {
            const isCenter = index === Math.floor(Linknav.length / 2);
            const isAccount = item.Path === "/account";

            if (isAccount) {
              return (
                <AccountNavItem
                  key={item.Path}
                  item={item}
                  isCenter={isCenter}
                  isActive={pathname === item.Path}
                  cookie={cookie}
                />
              );
            }

            return (
              <NavItem
                key={item.Path}
                item={item}
                isCenter={isCenter}
                isActive={pathname === item.Path}
              />
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default MobileNavbar;
