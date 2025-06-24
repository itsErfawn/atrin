"use client";
import React, { useState } from "react";
import Image from "next/image";

function ProductImage() {
  const images = ["/1.jpg", "/1.jpg", "/1.jpg"];
  const [Images, setImage] = useState(images[0]);

  return (
    <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
      <div className="rounded-2xl overflow-hidden w-full sm:w-[400px]">
        <Image
          src={Images}
          alt="تصویر محصول"
          width={400}
          height={400}
          priority
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="flex flex-row sm:flex-col gap-4 justify-center sm:justify-start">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setImage(img)}
            className={`border-1 rounded-md overflow-hidden cursor-pointer ${
              Images === img ? "border-primary" : "border-transparent"
            }`}
          >
            <Image
              src={img}
              alt="عکس"
              width={70}
              height={70}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImage;
