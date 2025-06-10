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

export function IconsListHeader() {
  const cartItems = [
    { name: "iPhone 15 Pro", price: 999, image: "/products/iphone.jpg" },
    { name: "MacBook Air", price: 1299, image: "/products/macbook.jpg" },
  ];

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="flex justify-center">
      <div className="container flex h-16 items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <div className="mt-6 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search..." className="w-full pl-9" />
              </div>
              <nav className="flex flex-col space-y-1">
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/account" className="w-full">
                    <User className="mr-2 h-4 w-4" />
                    Account
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  asChild
                >
                  <Link href="/favorites">
                    <Heart className="h-16 w-16" />
                    <Badge
                      variant="destructive"
                      className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center"
                    >
                      3
                    </Badge>
                    <span className="sr-only">Favorites</span>
                  </Link>
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <div className="p-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/account">Profile</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/orders">My Orders</Link>
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[300px] p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="w-full pl-9"
                />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                Try: <span className="font-medium">Laptop</span>,{" "}
                <span className="font-medium">Phone</span>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              width={100}
              height={60}
              alt="Logo"
              className="rounded-full hover:scale-105 transition-transform"
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
                3
              </Badge>
              <span className="sr-only">Favorites</span>
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
                <span className="sr-only">Cart</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[350px] p-4">
              <h3 className="font-semibold text-lg mb-3">Your Cart</h3>
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
                  <span>Total:</span>
                  <span>${totalPrice}</span>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/cart">Proceed to Checkout</Link>
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
}
