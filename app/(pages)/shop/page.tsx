import PaginationShop from "@/components/Module/shop/PaginationShop";
import ImageWithSkeleton from "@/components/module/ui/ImageWithLoading";
import { GETShopData } from "@/controllers/ShopController";
import Link from "next/link";
import React, { Suspense } from "react";
interface Props {
  searchParams?: {
    category?: string;
    page?: number;
    orderby?: string;
  };
}
async function ShopPage({ searchParams }: Props) {
  const params = await searchParams;
  const category = Number(params?.category || 0);
  const page = Number(params?.page || 1);
  const orderBy = params?.orderby || "default";

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Gsasdsadk category={category} page={page} orderBy={orderBy} />
    </Suspense>
  );
}
async function Gsasdsadk({
  category,
  page,
  orderBy,
}: {
  category?: number;
  page?: number;
  orderBy?: string;
}) {
  const { products } = await GETShopData(category, page, orderBy);
  const currentPage = page ?? 1;
  const totalPages = 5;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 p-2 ">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="flex flex-col items-center justify-center shadow-sm rounded-md p-3 "
          >
            <ImageWithSkeleton
              discount={product.discount}
              title={product.title}
              price={product.price}
              src={product.thumbnail}
              alt={product.title}
              width={200}
              height={200}
              className="object-contain"
            />
          </Link>
        ))}
        <div className=" md:w-220 flex justify-center">
          <PaginationShop
            currentPage={currentPage}
            totalPages={totalPages}
            category={category}
            orderBy={orderBy}
          />
        </div>
      </div>
    </>
  );
}
export default ShopPage;
