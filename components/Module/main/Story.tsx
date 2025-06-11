"use client";
import React, { useMemo } from "react";
import Stories from "react-insta-stories";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  images?: string[];
  currentIndex: number;
  onClose: () => void;
};
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const containerVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const Story: React.FC<Props> = ({ images, currentIndex, onClose }) => {
  const stories= useMemo(() => {
    const baseStories = images
      ? images.map((img) => ({
          url: img,
          type: "image",
          duration: 3000,
        }))
      : [];

    return baseStories;
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl font-bold z-50 hover:text-red-500 transition"
          aria-label="Close"
        >
          <X className="w-8 h-8" />
        </button>
        <motion.div
          className="relative w-full max-w-[100vw] h-full max-h-[100vh] sm:max-w-[400px] sm:max-h-[600px] rounded-md overflow-hidden shadow-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Stories
            stories={stories}
            defaultInterval={3000}
            width="100%"
            height="100%"
            currentIndex={currentIndex}
            onAllStoriesEnd={onClose}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Story;
