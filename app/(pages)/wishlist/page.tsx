// "use client";

import React, { useState } from "react";
import Container from "@/components/module/container/Container";
import WishlistItem from "@/components/module/wishlist/WishlistItem";
import { wishlistItems as data } from "@/context/DatawishlistItems";
import { Heart } from "lucide-react";
import { toast } from "react-hot-toast";
import { GetWishLists } from "@/controllers/WishListController";

export default async function WishlistPage() {
  // const [wishlistItems, setWishlistItems] = useState(data);

  // const handleDelete = (title: string) => {
  //   setWishlistItems((prev) => prev.filter((item) => item.title !== title));
  //   toast.success("آیتم با موفقیت حذف شد");
  // };
  const wishlistItems=await GetWishLists()
  return (
    <Container>
      <div className="bg-white shadow-sm rounded-xl p-5 border border-gray-200 mb-8 mt-5">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-yekanBakh text-[--color-primary] flex items-center gap-2">
            <Heart className="text-[--color-secondary]" />
            لیست علاقه مندی ها
          </h2>
        </div>
        <hr className="text-stone-200" />
        {!wishlistItems ? (
          <div className="text-center text-gray-500 py-12">
            لیست علاقه‌مندی‌ها خالی است!
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5">
            {wishlistItems.map((item) => (
              <WishlistItem
                key={item.product.title}
                item={item}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
