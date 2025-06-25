import { Percent, Activity, User, Users, Layers, Filter } from "lucide-react";

export const filterItems = [
  { id: 1, label: "همه", icon: <Layers size={15} />, href: "/shop" },
  {
    id: 2,
    label: "تخفیفات",
    icon: <Percent size={15} color="#ef4444" />,
    href: "/shop/discount",
  },
  { id: 3, label: "اسپرت", icon: <Activity size={15} />, href: "/shop/sport" },
  {
    id: 4,
    label: "ست ورزشی",
    icon: <User size={15} />,
    href: "/shop/sport-set",
  },
  {
    id: 5,
    label: "لباس بچه‌گانه",
    icon: <User size={15} />,
    href: "/shop/kids",
  },
  {
    id: 6,
    label: "لباس زنانه",
    icon: <Users size={15} />,
    href: "/shop/women",
  },
];
