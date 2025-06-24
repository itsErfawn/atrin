import Image from "next/image";
import React from "react";
import Container from "../container/Container";

function SimilarProducts() {
  return (
    <Container>
      <div className="mt-10 mb-5">
        <h2 className="text-center text-2xl m-5 text-primary">محصولات مشابه</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center px-4">
          {[1, 2, 3, 4].map((_, index) => (
            <Image
              key={index}
              src="/1.jpg"
              alt="تصویر محصول"
              width={index % 2 === 0 ? 200 : 250}
              height={200}
              className="rounded-2xl"
              priority
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default SimilarProducts;
