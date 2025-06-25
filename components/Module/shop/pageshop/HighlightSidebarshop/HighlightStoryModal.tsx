"use client";
import React from "react";
import Stories from "react-insta-stories";

type TStory = {
  url: string;
  duration: number;
  header: {
    heading: string;
    subheading: string;
  };
};

type HighlightStoryModalProps = {
  stories: TStory[];
  onClose: () => void;
};

function HighlightStoryModal({ stories, onClose }: HighlightStoryModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="w-full max-w-md">
        <Stories
          stories={stories as any}
          defaultInterval={3000}
          width="100%"
          height="100%"
          onAllStoriesEnd={onClose}
        />
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        ✖
      </button>
    </div>
  );
}

export default HighlightStoryModal;
