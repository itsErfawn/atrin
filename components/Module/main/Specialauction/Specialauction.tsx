"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { CLLogo, Cproductslogo } from "@/context/DataCproductslogo";
import Container from "../../container/Container";
function Specialauction() {
  return (
    <Container>
      <div className="text-center mb-10 w-full sm:w-200 mx-auto">
        <h1 className="text-xl font-bold bg-black text-white inline-block px-4 py-2 rounded mt-10">
          محبوب ترین برند ها
        </h1>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Autoplay]}
          className="mt-6"
        >
          {Cproductslogo.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo.srcimageLogo}
                alt="brand logo"
                className="w-24 h-auto object-contain mx-auto transition-transform duration-300 hover:scale-110"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center w-full sm:w-250 mx-auto">
        {CLLogo.map((item, index) => (
          <div key={index} className="flex  flex-col items-center">
            <img
              src={item.CLimageLogo}
              alt={item.title}
              className="w-20 h-20 mb-2"
            />
            <h2 className="text-sm font-bold">{item.title}</h2>
            <p className="text-xs text-gray-600">{item.discription}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
export default Specialauction;
