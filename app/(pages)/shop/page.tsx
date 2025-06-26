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
  return (
    <>
      <div className="flex items-center flex-wrap m-2">
        {products.map((product) => (
          <Link
            className="md:w-3/12 w-4/12 p-4 flex flex-col  items-center justify-center shadow-sm "
            key={product.id}
            href={`/product/${product.slug}`}
          >
            <ImageWithSkeleton
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
