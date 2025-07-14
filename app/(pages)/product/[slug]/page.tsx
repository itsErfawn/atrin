import Container from "@/components/Module/container/Container";
import Breadcrumb from "@/components/module/ui/Breadcrumb";
import ProductDetail from "@/components/module/shop/ProductDetail";
import React from "react";
import SimilarProducts from "@/components/module/shop/SimilarProducts";
import {
  getProduct,
  getProductMetaData,
} from "@/controllers/ProductController";

type Props = {
  params: { slug: string };
};
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<any>;
}) {
  const { slug } = await params;
  const metas = await getProductMetaData(slug);
  return {
    title: metas[0].value,
    description: metas[1].value,
    canonical: metas[2].value,
  };
}
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const { product, relatedProducts } = await getProduct(slug);

  return (
    <Container>
      <section>
        <div>
          <Breadcrumb />
        </div>
        <ProductDetail product={product} />
        <SimilarProducts relatedProducts={relatedProducts} />
      </section>
    </Container>
  );
}
