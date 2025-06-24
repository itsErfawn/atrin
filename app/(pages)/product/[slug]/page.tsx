import Container from "@/components/Module/container/Container";
// @ts-ignore
import Breadcrumb from "@/components/Module/ui/Breadcrumb";
// @ts-ignore
import ProductDetail from "@/components/Module/shop/ProductDetail";
import React from "react";
// @ts-ignore
import SimilarProducts from "@/components/Module/shop/SimilarProducts";
import { getProduct, getProductMetaData } from "@/controllers/ProductController";

type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params, searchParams }:{params:Promise<{slug:string}>,searchParams:Promise<any>}){
  const {slug}=await params
  const metas=await getProductMetaData(slug)
  return {
    title:metas[0].value,
    description:metas[1].value,
    canonical:metas[2].value
  }
}
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product=await getProduct(slug)
  return (
    <Container>
      <section>
        <div>
          <Breadcrumb />
        </div>
        <ProductDetail />
        <SimilarProducts />
      </section>
    </Container>
  );
}
