import Image from "next/image";
import Link from "next/link";
import { User, Search, Heart, ShoppingCart } from "lucide-react";

import CookieStore from "@/libs/cookies/CookieStore";
import LoginPopUp from "../../login/LoginPopUp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/module/ui/button";
import { Input } from "@/components/module/ui/input";
import { Badge } from "@/components/module/ui/badge";

export async function IconsListHeader() {
  const cartItems = [
    { name: "آیفون ۱۵ پرو", price: 999, image: "/products/iphone.jpg" },
    { name: "مک‌بوک ایر", price: 1299, image: "/products/macbook.jpg" },
  ];
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const cookie = await CookieStore.get("user_token");
  return (
    <section className="flex justify-center">
      <div className="container flex h-16 items-center justify-between">
        <div className="hidden md:flex items-center gap-4">
          <div>
            {cookie ? (
              <Link href={"/account"}>
                <User className="h-8 w-8" />
              </Link>
            ) : (
              <LoginPopUp />
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">جستجو</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[300px] p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="جستجوی محصولات..."
                  className="w-full pl-9"
                />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                امتحان کنید: <span className="font-medium">لپ‌تاپ</span>،{" "}
                <span className="font-medium">گوشی</span>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center p-4">
          <Link href="/" className="flex items-center gap-2 ">
            <img className="w-24 h-14" src="/logo.png" alt="" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/favorites">
              <Heart className="h-5 w-5" />
              <Badge
                variant="destructive"
                className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center"
              >
                ۳
              </Badge>
              <span className="sr-only">علاقه‌مندی‌ها</span>
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge
                  variant="destructive"
                  className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center"
                >
                  {cartItems.length}
                </Badge>
                <span className="sr-only">سبد خرید</span>
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
}
