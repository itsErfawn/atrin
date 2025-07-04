"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  discount?: number;
  price?: number;
  title?: string;
}

export default function ImageWithSkeleton({
  src,
  alt,
  width,
  height,
  className = "",
  discount,
  price,
  title,
}: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full">
      <div
        className="rounded-xl overflow-hidden bg-gray-100 mx-auto"
        style={{ width, height }}
      >
        {loading && (
          <div className="space-y-2 animate-pulse flex flex-col justify-center items-center h-full"></div>
        )}

        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>

      <div className="mt-3 px-1 flex items-center justify-between">
        {loading ? (
          <div className="space-y-2 w-full">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
        ) : (
          <div className="flex flex-col space-y-1 w-full">
            {title && (
              <h4 className="text-md font-semibold text-gray-800 mb-1 line-clamp-1 flex-1">
                {title}
              </h4>
            )}
            {(price !== undefined ||
              (discount !== undefined && discount > 0)) && (
              <div className="flex items-center space-x-2 ">
                {price !== undefined && (
                  <p className="text-md font-bold text-gray-900">
                    {price.toLocaleString()}{" "}
                    <span className="text-sm font-normal text-gray-600">
                      تومان
                    </span>
                  </p>
                )}
                {discount !== undefined && discount > 0 && (
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-md shadow-md font-semibold">
                    {Math.min(Math.round(discount), 100)}% تخفیف
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
