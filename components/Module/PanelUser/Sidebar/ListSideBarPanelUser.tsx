import React from "react";
import {
  Home,
  ShoppingCart,
  Download,
  MapPin,
  User,
  Heart,
  LogOut,
} from "lucide-react";
import Link from "next/link";

const ListPanelUser = [
  { name: "پیشخوان", href: "/account", icon: <Home size={20} /> },
  {
    name: "سفارش‌ها",
    href: "/account/orders",
    icon: <ShoppingCart size={20} />,
  },
  {
    name: "دانلودها",
    href: "/account/downloads",
    icon: <Download size={20} />,
  },
  { name: "آدرس‌ها", href: "/account/address", icon: <MapPin size={20} /> },
  {
    name: "اطلاعات حساب کاربری",
    href: "/account/editaccount",
    icon: <User size={20} />,
  },
  {
    name: "لیست علاقه‌مندی‌ها",
    href: "/account/wishlist",
    icon: <Heart size={20} />,
  },
  { name: "خروج", href: "/logout", icon: <LogOut size={20} /> },
];

function ListSideBarPanelUser() {
  return (
    <div className="w-64 text-right space-y-2">
      {ListPanelUser.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="flex items-center  gap-2 text-white hover:bg-gray-500 p-2 rounded-md cursor-pointer transition"
        >
          <span>{item.icon}</span>
          <span className="text-sm">{item.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default ListSideBarPanelUser;
