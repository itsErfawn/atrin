import { useRef, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import LikeProductCardmainpage from "./LikeProductCardmainpage";

type TProductCard = {
  src: string;
  price: string;
  isVideo: boolean;
  title?: string;
  discount?: string;
  time?: string;
};

export default function SpecialProductCard({
  src,
  price,
  isVideo = false,
  title = "",
  discount = "",
  time = "",
}: TProductCard) {
  const [duration, setDuration] = useState<string>("");
  const [durationSet, setDurationSet] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleLoadedMetadata = () => {
    if (videoRef.current && !durationSet) {
      const totalSeconds = Math.floor(videoRef.current.duration);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      setDuration(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
      setDurationSet(true);
    }
  };
  const priceNumber = parseInt(price.replace(/,/g, ""));
  const discountNumber = parseInt(discount.replace(/,/g, ""));
  const originalPrice = priceNumber + discountNumber;
  const discountPercent = Math.round((discountNumber / originalPrice) * 100);
  return (
    <div className="rounded-2xl  w-full sm:max-w-sm bg-white hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">
      <div className="relative  overflow-hidden group">
        {isVideo ? (
          <>
            <video
              ref={videoRef}
              src={src}
              controls={false}
              autoPlay
              muted
              loop
              className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-300"
              onLoadedMetadata={handleLoadedMetadata}
            />
            {duration && (
              <span className="absolute top-2 left-2 text-xs bg-white/90 text-black px-2 py-0.5 rounded-full shadow-sm">
                {duration}
              </span>
            )}
          </>
        ) : (
          <img
            src={src}
            alt="product"
            className="w-full h-70 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}

        <div className="absolute flex items-center gap-1 bottom-2 left-2 text-sm font-medium text-white bg-black/60 px-2 py-1 rounded-full backdrop-blur-sm">
          <img
            src="https://d1.siteroze.ir/wp-content/uploads/2025/04/ggg.jpg"
            alt="user"
            className="w-6 h-6 rounded-full"
          />
          <span>atrin</span>
        </div>
      </div>

      <div className="p-4 text-center space-y-2">
        <h3 className="text-sm justify-between flex font-semibold text-gray-800 line-clamp-2">
          {title}
          <LikeProductCardmainpage />
        </h3>
        {time && (
          <div className="mt-4">
            <CountdownTimer />
          </div>
        )}

        <div className="flex items-center gap-2 mt-1">
          <div>
            <h1 className="text-lg font-bold ">{price} تومان</h1>
            {discount && (
              <span className="text-sm text-gray-400 line-through">
                {(
                  parseInt(price.replace(/,/g, "")) +
                  parseInt(discount.replace(/,/g, ""))
                ).toLocaleString()}{" "}
                تومان
              </span>
            )}
          </div>
          {discount && (
            <div className="bg-[#1BD2A3] text-xs px-2 py-0.5 rounded-full font-medium text-white">
              {discountPercent}% تخفیف
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
