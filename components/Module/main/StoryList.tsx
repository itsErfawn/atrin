"use client";
import React, { useState } from "react";
import Story from "./Story";
import StoryItemList from "./StoryItemList";

type StoryItem = {
  image: string;
  name: string;
};

const storyItems: StoryItem[] = [
  { image: "/image/story/story1.jpg", name: "شارژ شد" },
  { image: "/image/story/story2.jpg", name: "فروشگاه" },
  { image: "/image/story/story3.jpg", name: "تخفیفات" },
  { image: "/image/story/story4.jpg", name: "جدید" },
  { image: "/image/story/story5.jpg", name: "آترین" },
  { image: "/image/story/story6.jpg", name: "ست ویژه" },
  { image: "/image/story/story7.jpg", name: "کالکشن فصل" },
  { image: "/image/story/story8.jpg", name: "مدل" },
  { image: "/image/story/story9.jpg", name: "آموزش ست کردن" },
];

function StoryList() {
  const [openStoryIndex, setOpenStoryIndex] = useState<number | null>(null);

  const handleClick = (index: number) => setOpenStoryIndex(index);
  const handleClose = () => setOpenStoryIndex(null);

  return (
    <div>
      <StoryItemList storyItems={storyItems} onItemClick={handleClick} />
      {openStoryIndex !== null && (
        <Story
          images={storyItems.map((s) => s.image)}
          currentIndex={openStoryIndex}
          onClose={handleClose}
        />
      )}
    </div>
  );
}

export default StoryList;
