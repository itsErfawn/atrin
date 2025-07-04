import ImageWithSkeleton from "@/components/Module/ui/ImageWithLoading";
import {
  GetCategoryMetaData,
  GetProductsByCategory,
} from "@/controllers/CategoryController";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<any>;
}) {
  const slug = "men";
  const metas = await GetCategoryMetaData(slug);
  if (!metas) {
    return { title: "آترین" };
  }
  return {
    title: metas[1].value,
    description: metas[0].value,
    canonical: metas[2].value,
  };
}
async function CategoriesPage(
  props: { params: Promise<{ slug: string }> },
  searchParams: Promise<any>
) {
  const slug = "men";
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Gsasdsadk slug={slug} />
    </Suspense>
  );
}
export async function Gsasdsadk({ slug }: { slug: string }) {
  const { category, products } = await GetProductsByCategory(slug);
  console.log(products);

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
export default CategoriesPage;
