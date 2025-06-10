"use client";

import Image from "next/image";
import Link from "next/link";
import { User, Search, Heart, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { Linknav } from "@/context/DataListHeaderItem";

export function IconsListHeader() {
  const cartItems = [
    { name: "آیفون ۱۵ پرو", price: 999, image: "/products/iphone.jpg" },
    { name: "مک‌بوک ایر", price: 1299, image: "/products/macbook.jpg" },
  ];
  const pathname = usePathname();
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="flex justify-center">
      <div className="container flex h-16 items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] rtl">
            <div className="mt-10 space-y-6 px-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="جستجو..."
                  className="w-full pl-10 py-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-orange-400 transition"
                />
              </div>

              <nav className="flex flex-col gap-3 text-right text-base font-medium">
                {Linknav.map((item, index) => {
                  const isActive = pathname === item.Path;

                  return (
                    <Link
                      key={index}
                      href={item.Path}
                      className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                        isActive
                          ? "bg-gray-100 text-gray-600 font-semibold"
                          : "hover:bg-gray-100 hover:text-gray-600 text-gray-700"
                      }`}
                    >
                      {item.Name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-8 w-8" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <div className="p-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/account">پروفایل</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/orders">سفارش‌های من</Link>
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

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
            <Image
              src="/logo.png"
              width={100}
              height={60}
              alt="لوگو"
              className=" hover:scale-105 transition-transform"
            />
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
            <DropdownMenuContent align="end" className="w-[350px] p-4">
              <h3 className="font-semibold text-lg mb-3">سبد خرید شما</h3>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center">
                      <Image
                        src={item.image}
                        width={40}
                        height={40}
                        alt={item.name}
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t">
                <div className="flex justify-between font-semibold mb-3">
                  <span>جمع کل:</span>
                  <span>${totalPrice}</span>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/cart">ادامه به پرداخت</Link>
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
}
