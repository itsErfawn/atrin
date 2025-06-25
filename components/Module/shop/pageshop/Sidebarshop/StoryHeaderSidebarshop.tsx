"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
import Stories from "react-insta-stories";

type TStory = {
  url: string;
  duration: number;
  header: {
    heading: string;
    subheading: string;
  };
};

const stories: TStory[] = [
  {
    url: "/image/story/story7.jpg",
    duration: 3000,
    header: {
      heading: "استوری نمونه",
      subheading: "۲۵ خرداد",
    },
  },
];

function StoryHeaderSidebarshop() {
  const [showStory, setShowStory] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="/image/story/story7.jpg"
        alt="thumbnail"
        className="w-full h-full object-cover rounded-full cursor-pointer border-2 border-primary"
        onClick={() => setShowStory(true)}
      />

      {showStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="w-full max-w-md">
            <Stories
              stories={stories as any}
              defaultInterval={3000}
              width="100%"
              height={600}
              onAllStoriesEnd={() => setShowStory(false)}
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setShowStory(false)}
          >
            <X size={24} />
          </button>
        </div>
      )}
    </div>
  );
}

export default StoryHeaderSidebarshop;
