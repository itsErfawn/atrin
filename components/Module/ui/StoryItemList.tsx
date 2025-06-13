"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type StoryItem = {
  image: string;
  name: string;
};

type Props = {
  storyItems: StoryItem[];
  onItemClick: (index: number) => void;
};

function StoryItemList({ storyItems, onItemClick }: Props) {
  return (
    <>
      <Swiper
        className="story-slider-container"
        spaceBetween={12}
        slidesPerView={4.5}
        onResize={(swiper) => swiper.update()}
        breakpoints={{
          576: { slidesPerView: 4.5 },
          992: { slidesPerView: 7.5 },
          1100: { slidesPerView: 8 },
          1200: { slidesPerView: 9 },
        }}
      >
        {storyItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div onClick={() => onItemClick(index)} className="story-wrapper">
              <div className="story-image_wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className=" story-image "
                />
              </div>
              <span className="story-title">{item.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default StoryItemList;
