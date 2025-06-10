"use client";
import Image from "next/image";
import Link from "next/link";
import { User, Search, Heart, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function ShadcnHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <div className="flex flex-col space-y-4 mt-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search products..." className="pl-8" />
              </div>

              <nav className="flex flex-col space-y-2">
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/account">
                    <User className="mr-2 h-4 w-4" />
                    My Account
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/favorites">
                    <Heart className="mr-2 h-4 w-4" />
                    Favorites
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/cart">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Shopping Cart
                  </Link>
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        {/* Left section - Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          {/* User Account */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>

          {/* Search */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-80 p-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search products..." className="pl-8" />
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Popular searches: iPhone, Samsung, Laptop
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Logo - Center */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <Image
                src="/Logo.png"
                width={50}
                height={50}
                alt="Logo"
                className="rounded-full transition-transform hover:scale-105"
              />
            </div>
          </Link>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-2">
          {/* Favorites */}
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/favorites">
              <Heart className="h-5 w-5" />
              <Badge
                variant="destructive"
                className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
              >
                3
              </Badge>
            </Link>
          </Button>

          {/* Shopping Cart */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge
                  variant="destructive"
                  className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                >
                  2
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-4">
                <h3 className="font-semibold mb-3">Shopping Cart</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Product Name</p>
                      <p className="text-xs text-muted-foreground">$29.99</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Another Product</p>
                      <p className="text-xs text-muted-foreground">$19.99</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t">
                  <div className="flex justify-between font-semibold">
                    <span>Total: $49.98</span>
                  </div>
                  <Button className="w-full mt-2" asChild>
                    <Link href="/cart">View Cart</Link>
                  </Button>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
