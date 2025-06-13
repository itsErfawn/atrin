import React from "react";
import LikeLatestAtrinProducts from "./LikeLatestAtrinProducts";

interface VideoItem {
  image: string;
  image2?: string;
  isVideo: boolean;
  price: string;
  title: string;
  discount: string;
  time: string;
}

interface Props {
  item: VideoItem;
}

const LatestAtrinProductsCard: React.FC<Props> = ({ item }) => {
  const isImageFirst = Math.random() < 0.5;

  const logo = (
    <div className="flex items-center gap-2 text-xs font-semibold">
      <img
        src="https://d1.siteroze.ir/wp-content/uploads/2025/04/ggg.jpg"
        alt="user"
        className="w-6 h-6 rounded-full"
      />
      <span>atrin</span>
    </div>
  );

  const renderImage = (
    <>
      <img
        src={item.image2 || item.image} 
        alt={item.title}
        className="w-full rounded-lg object-cover"
        style={{ height: `${300 + Math.random() * 150}px` }}
      />
      <div className="mt-2">{logo}</div>
    </>
  );

  const renderVideo = (
    <>
      <video
        src={item.image}
        className="w-full rounded-lg"
        controls
        muted
        autoPlay
        loop
      />
      <div className="absolute top-2 right-2 bg-white/70 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
        <img
          src="https://d1.siteroze.ir/wp-content/uploads/2025/04/ggg.jpg"
          alt="user"
          className="w-5 h-5 rounded-full"
        />
        <span>atrin</span>
      </div>
    </>
  );

  return (
    <div className="break-inside-avoid p-2 bg-white rounded-xl shadow-md">
      <div className="relative w-full">
        {item.isVideo ? (
          isImageFirst ? (
            <>
              {renderImage}
              <div className="mt-4 relative">{renderVideo}</div>
            </>
          ) : (
            <>
              <div className="relative">{renderVideo}</div>
              <div className="mt-4">{renderImage}</div>
            </>
          )
        ) : (
          renderImage
        )}
        <div className="flex justify-between items-center w-full">
          <h1>{item.price}</h1>
          <LikeLatestAtrinProducts Col="row" />
        </div>
      </div>
    </div>
  );
};

export default LatestAtrinProductsCard;
