"use client";

import React from "react";
import { videosrandomaimpage } from "@/context/Datavideosrandomaimpage";
import Container from "../../container/Container";
import SectionDivider from "../../ui/SectionDivider";
import LatestAtrinProductsCard from "../../ui/LatestAtrinProductsCard";

interface VideoItem {
  image: string;
  image2?: string;
  isVideo: boolean;
  price: string;
  title: string;
  discount: string;
  time: string;
}

function shuffleArray(array: VideoItem[]): VideoItem[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function LatestAtrinProducts() {
  const shuffledVideos = shuffleArray(videosrandomaimpage);

  return (
    <Container>
      <SectionDivider title="جدیدترین محصولات آترین" />
      <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4 mt-6">
        {shuffledVideos.map((item, index) => (
          <LatestAtrinProductsCard key={index} item={item} />
        ))}
      </div>
    </Container>
  );
}

export default LatestAtrinProducts;
