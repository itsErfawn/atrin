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
      {/* Desktop View */}
      <div className="hidden sm:flex gap-4 p-4 bg-white rounded-md">
        {storyItems.map((item, index) => (
          <div
            key={index}
            onClick={() => onItemClick(index)}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="w-[6.5rem] h-[6.5rem] rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-full border-2 border-white"
              />
            </div>
            <span className="text-sm mt-1">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="block sm:hidden p-4 bg-white rounded-md w-full max-w-full overflow-hidden">
        <Swiper
          spaceBetween={12}
          slidesPerView={3.5}
          freeMode={true}
          className="py-2"
          onResize={(swiper) => swiper.update()}
        >
          {storyItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => onItemClick(index)}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full border-2 border-white"
                  />
                </div>
                <span className="text-xs mt-1 text-center">{item.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default StoryItemList;
