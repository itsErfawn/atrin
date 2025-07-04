import {
  User,
  ShoppingBag,
  MessageCircle,
  CreditCard,
  Clock,
  Settings,
  CheckCircle,
  XCircle,
  Phone,
  LogIn,
  RotateCcw,
  Undo,
} from "lucide-react";
export const userInfo = [
  {
    icon: <User className="w-6 h-6 text-primary" />,
    title: "عضویت شما",
    value: "6 روز قبل",
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-primary" />,
    title: "مجموع سفارشات",
    value: "0 تومان",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-primary" />,
    title: "دیدگاه‌های شما",
    value: "0 دیدگاه",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-primary" />,
    title: "تعداد پرداخت‌ها",
    value: "0",
  },
  {
    icon: <Phone className="w-6 h-6 text-primary" />,
    title: "موبایل تأیید شده",
    value: "09123456789",
  },
  {
    icon: <LogIn className="w-6 h-6 text-primary" />,
    title: "آخرین ورود",
    value: "دیروز",
  },
];

export const orderStatus = [
  {
    icon: <Clock className="w-6 h-6 text-yellow-500" />,
    title: "در انتظار پرداخت",
    value: "0",
  },
  {
    icon: <Settings className="w-6 h-6 text-blue-500" />,
    title: "در حال انجام",
    value: "0",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    title: "تحویل شده",
    value: "0",
  },
  {
    icon: <XCircle className="w-6 h-6 text-red-500" />,
    title: "لغو شده",
    value: "0",
  },
  {
    icon: <RotateCcw className="w-6 h-6 text-purple-600" />,
    title: "بازگشتی",
    value: "0",
  },
  {
    icon: <Undo className="w-6 h-6 text-orange-500" />,
    title: "مرجوع‌شده توسط کاربر",
    value: "0",
  },
];
