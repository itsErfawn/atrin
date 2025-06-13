"use client";
import React, { useState } from "react";

import { storyItems } from "@/context/DatastoryItems";
import Container from "../../container/Container";
import StoryItemList from "../../ui/StoryItemList";
import Story from "../../ui/Story";

export type StoryItem = {
  image: string;
  name: string;
};

function StoryList() {
  const [openStoryIndex, setOpenStoryIndex] = useState<number | null>(null);

  const handleClick = (index: number) => setOpenStoryIndex(index);
  const handleClose = () => setOpenStoryIndex(null);

  return (
    <section>
      <Container>
        <div className="flex items-center justify-center py-4">
          <StoryItemList storyItems={storyItems} onItemClick={handleClick} />
          {openStoryIndex !== null && (
            <Story
              images={storyItems.map((s) => s.image)}
              currentIndex={openStoryIndex}
              onClose={handleClose}
            />
          )}
        </div>
      </Container>
    </section>
  );
}

export default StoryList;
