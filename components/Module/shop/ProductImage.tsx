"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ProductImageProps {
  images: { imageUrl: string }[];
  thumbnail: string;
}

function ProductImage({ images, thumbnail }: ProductImageProps) {
  const [selectedImage, setSelectedImage] = useState<string>(thumbnail);

  return (
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4">
      <div className="rounded-2xl overflow-hidden w-full sm:w-[400px]">
        <Image
          src={selectedImage}
          alt="تصویر محصول"
          width={400}
          height={400}
          priority
          className="rounded-2xl object-cover w-full h-auto"
        />
      </div>

      <div className="product-gallery-wrapper ">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(img.imageUrl)}
            className={`border-2 rounded-md overflow-hidden p-1 flex-shrink-0 transition-all duration-300 ${
              selectedImage === img.imageUrl
                ? "border-primary scale-105"
                : "border-gray-300 hover:scale-105"
            }`}
          >
            <Image
              src={img.imageUrl}
              alt={"img"}
              width={70}
              height={70}
              className="object-cover rounded"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductImage;
