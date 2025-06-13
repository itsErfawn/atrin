"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ChevronLeft } from "lucide-react";
import { videos } from "@/context/DataVIPproducts";
import SectionHeader from "../../ui/SectionHeader";
import Container from "../../container/Container";
import SpecialProductCard from "../../ui/SpecialProductCard";

function Mostpopularbrands() {
  return (
    <Container>
      <SectionHeader
        title="حراج ویژه"
        action={
          <>
            <span>مشاهده همه ۵</span>
            <ChevronLeft size={16} />
          </>
        }
      />
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
            <SpecialProductCard
              src={item.name}
              price={item.price}
              isVideo={item.isVideo}
              title={item.title}
              discount={item.discount}
              time={item.time}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Mostpopularbrands;
