"use client";

import React from "react";
import { videosandimpage } from "@/context/Datavideosrandomaimpage";
import WomenclothingCard from "../../ui/WomenclothingCard";
import SectionDivider from "../../ui/SectionDivider";
import Container from "../../container/Container";

function Womenclothing() {
  return (
    <Container>
      <SectionDivider title="جدیدترین محصولات آترین" />
      <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4 mt-6">
        {videosandimpage.map((item, index) => (
          <WomenclothingCard key={index} item={item} />
        ))}
      </div>
    </Container>
  );
}

export default Womenclothing;
