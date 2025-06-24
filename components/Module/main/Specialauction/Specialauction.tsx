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

      <div className="flex flex-wrap justify-center gap-6 text-center w-full sm:w-300 mx-auto mb-10">
        {CLLogo.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-26 sm:w-40 md:w-44 lg:w-48"
          >
            <img
              src={item.CLimageLogo}
              alt={item.title}
              className="w-20 h-20 mb-2 object-contain"
            />
            <h2 className="text-sm font-bold">{item.title}</h2>
            <p className="text-xs text-gray-600 mt-1">{item.discription}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Specialauction;
