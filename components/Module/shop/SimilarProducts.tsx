import Image from "next/image";
import React from "react";
import Container from "../container/Container";
import { relatedProductsCollection } from "@/types/products";
import Link from "next/link";

function SimilarProducts({relatedProducts}:{relatedProducts:relatedProductsCollection}) {
  return (
    <Container>
      <div className="mt-10 mb-5">
        <h2 className="text-center text-2xl m-5 text-primary">محصولات مشابه</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center px-4">
          {relatedProducts.map((product, index) => (
            <Link key={index} href={`/product/${product.slug}`}>
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={index % 2 === 0 ? 200 : 250}
              height={200}
              className="rounded-2xl"
              priority
              />
              </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default SimilarProducts;
