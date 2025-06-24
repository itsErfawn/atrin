"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Container from "../../container/Container";
import SectionDivider from "../../ui/SectionDivider";
import ProductCard from "../../ui/ProductCard";

const videos = [
  {
    name: "/video/videomainpage/VID1.mp4",
    isVideo: true,
    price: "۹۸۰,۰۰۰",
    id: 1,
  },
  {
    name: "https://d1.siteroze.ir/wp-content/uploads/2025/04/2321138f25dff33d1fa7d661eb3bf6d2.jpg",
    isVideo: false,
    price: "۴۷۰,۰۰۰",
  },
  {
    name: "/video/videomainpage/VID1.mp4",
    isVideo: true,
    price: "۵۶۰,۰۰۰",
    id: 2,
  },
  {
    name: "/video/videomainpage/IMG1.jpg",
    isVideo: false,
    price: "۵۹۵,۰۰۰",
    id: 3,
  },
  {
    name: "/video/videomainpage/IMG1.jpg",
    isVideo: false,
    price: "۵۹۵,۰۰۰",
    id: 4,
  },
];

function VIPproducts() {
  return (
    <Container>
      <SectionDivider title="محصولات VIP" />

      <Swiper
        className="py-4"
        spaceBetween={12}
        grabCursor={true}
        centeredSlides={false}
        onResize={(swiper) => swiper.update()}
        breakpoints={{
          320: {
            slidesPerView: 1.3,
          },
          480: {
            slidesPerView: 1.6,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {videos.map((item, idx) => (
          <SwiperSlide key={idx}>
            <ProductCard
              src={item.name}
              price={item.price}
              isVideo={item.isVideo}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default VIPproducts;
