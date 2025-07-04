"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { highlights } from "@/context/Datahighlights";
import HighlightStoryModal from "./HighlightStoryModal";

function HighlightSidebarshop() {
  const [showStoryIndex, setShowStoryIndex] = useState<number | null>(null);

  return (
    <div className="px-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={3.5}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 4.3 },
        }}
      >
        {highlights.map((highlight, index) => (
          <SwiperSlide key={highlight.id}>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setShowStoryIndex(index)}
            >
              <img
                src={highlight.stories[0].url}
                alt={highlight.title}
                className="w-16 h-14 rounded-full object-cover border-2 border-primary"
              />
              <span className="mt-2 text-xs text-center text-gray-800">
                {highlight.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showStoryIndex !== null && (
        <HighlightStoryModal
          stories={highlights[showStoryIndex].stories}
          onClose={() => setShowStoryIndex(null)}
        />
      )}
    </div>
  );
}

export default HighlightSidebarshop;
