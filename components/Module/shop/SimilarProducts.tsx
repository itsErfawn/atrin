"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

type RelatedPost = {
  id: number;
  title: string;
  thumbnail: string;
  createdAt: string;
  slug: string;
};

type Props = {
  relatedProducts: RelatedPost[];
};

export default function SimilarProducts({ relatedProducts }: Props) {
  return (
    <div className="my-12 space-y-4 flex justify-center flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-800">محصولات مرتبط</h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.5}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        scrollbar={{ draggable: true }}
        style={{ width: "100%" }}
      >
        {relatedProducts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
