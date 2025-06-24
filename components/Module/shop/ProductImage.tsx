import Image from "next/image";
import React from "react";

function ProductImage() {
  return (
    <Image
      src="/1.jpg"
      alt="تصویر محصول"
      width={400}
      height={400}
      className="rounded-2xl"
      priority
    />
  );
}

export default ProductImage;
