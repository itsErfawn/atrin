// app/product/[slug]/page.tsx

import Container from "@/components/Module/container/Container";
import Breadcrumb from "@/components/Module/ui/Breadcrumb";
import ProductDetail from "@/components/Module/shop/ProductDetail";
import Image from "next/image";
import React from "react";
import SimilarProducts from "@/components/Module/shop/SimilarProducts";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

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
