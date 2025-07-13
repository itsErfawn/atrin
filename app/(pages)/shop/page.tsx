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
  const params=await searchParams
  const category_id = Number(params?.category || 0);
  const page = Number(params?.page || 1);
  const orderBy = params?.orderby || "default";


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Gsasdsadk
        category_id={category_id}
        page={page}
        orderBy={orderBy}
      />
    </Suspense>
  );
}
async function Gsasdsadk({ category_id,page,orderBy }: { category_id?: number,page?:number,orderBy?:string }) {
  const {  products } = await GETShopData(category_id,page,orderBy);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 p-2">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="flex flex-col items-center justify-center shadow-sm rounded-md p-3 bg-white"
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
      </div>
    </>
  );
}
export default ShopPage;
