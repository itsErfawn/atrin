import { GetCategoryMetaData, GetProductsByCategory } from "@/controllers/CategoryController";
import Link from "next/link";
import React, { Suspense } from "react";

export async function generateMetadata({ params, searchParams }:{params:Promise<{slug:string}>,searchParams:Promise<any>}){
  const {slug}=await params
  const metas=await GetCategoryMetaData(slug)
  if(!metas){
    return {title:"آترین"}
  }
  return {
    title:metas[1].value,
    description:metas[0].value,
    canonical:metas[2].value
  }
}
async function CategoriesPage(
  props: { params: Promise<{ slug: string }> },
  searchParams: Promise<any>
) {
  let { slug } = await props.params;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Gsasdsadk slug={slug} />
    </Suspense>
  );
}
async function Gsasdsadk({ slug }: { slug: string }) {
  const {category,products} = await GetProductsByCategory(slug);
  return (
    <>
    <h1 className="text-center text-3xl py-5" >{category?.name}</h1>
    <div className="flex items-center flex-wrap">
      {products.map(product=>(
        <Link className="w-3/12 p-4 flex flex-col gap-2 items-center justify-center" key={product.id} href={`/product/${product.slug}`} >
          <img src={product.thumbnail} />
          <span>{product.title}</span>
        </Link>
      ))}
    </div>
    </>
  );
}
export default CategoriesPage;
