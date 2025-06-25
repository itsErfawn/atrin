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
    <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
      <div className="rounded-2xl overflow-hidden w-full sm:w-[400px]">
        <Image
          src={selectedImage}
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
            onClick={() => setSelectedImage(img.imageUrl)}
            className={`border-2 rounded-md overflow-hidden cursor-pointer p-1 ${
              selectedImage === img.imageUrl
                ? "border-primary"
                : "border-gray-300"
            }`}
          >
            <Image
              src={img.imageUrl}
              alt={`تصویر کوچک ${idx + 1}`}
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
