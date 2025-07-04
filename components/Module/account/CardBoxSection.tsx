import React from "react";
import CardBox from "./CardBox";
import ChartsSection from "../ui/chart/ChartsSection";
type CardItem = {
  icon: React.ReactNode;
  title: string;
  value: string | number;
};

function CardBoxSection({
  title,
  items,
}: {
  title: string;
  items: CardItem[];
}) {
  return (
    <div className="bg-white rounded-xl shadow p-3 border border-gray-200">
      <h2 className="text-lg font-semibold text-primary mb-4 border-b border-gray-200 pb-2">
        {title}
      </h2>
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible">
        {items.map((item, index) => (
          <CardBox key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CardBoxSection;
