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
      <h2 className="text-2xl font-semibold text-gray-800">مطالب مرتبط</h2>
      <Swiper
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 4 },
        }}
        className="px-4"
      >
        {relatedProducts.map((post, index) => {
          const isLarge = index % 2 === 0;

          return (
            <SwiperSlide
              key={post.id}
              className="flex justify-center items-center"
            >
              <Image
                src={post.thumbnail}
                alt="محصول مرتبط"
                width={isLarge ? 300 : 210}
                height={isLarge ? 300 : 210}
                className="object-cover rounded-2xl p-5"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
