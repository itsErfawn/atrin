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
  posts: RelatedPost[];
};
function RelatedPostsSectionblog({ posts }: Props) {
  return (
    <div className="my-12 space-y-4 flex justify-center flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-800">مطالب مرتبط</h2>
      <Swiper
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 4 },
        }}
        className="px-4 "
      >
        {posts.map((post, index) => {
          return (
            <SwiperSlide
              key={post.id}
              className="flex justify-center items-center "
            >
              <Image
                src={post.thumbnail}
                alt="post"
                width={210}
                height={210}
                className="object-cover rounded-4xl p-5"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default RelatedPostsSectionblog;
