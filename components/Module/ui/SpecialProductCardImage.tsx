import React from "react";

type Props = {
  src: string;
};

function SpecialProductCardImage({ src }: Props) {
  return (
    <div>
      <img
        src={src}
        alt="product"
        className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}

export default SpecialProductCardImage;
