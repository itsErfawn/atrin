"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ImageWithSkeleton({
  src,
  alt,
  width,
  height,
  className = "",
}: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <div
      style={{ width, height }}
      className={`relative overflow-hidden rounded-xl bg-gray-100`}
    >
      {/* اسکلت لودینگ */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-gray-200 z-10">
          <div className="w-16 h-16 bg-gray-300 rounded-md" />
        </div>
      )}

      {/* عکس اصلی */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoadingComplete={() => setLoading(false)}
        unoptimized
      />
    </div>
  );
}
