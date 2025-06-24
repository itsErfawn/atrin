import { useRef, useState } from "react";
import LikeProductCard from "./LikeProductCard";
import ProductModal from "./ProductModal";

type TProducrCard = {
  src: string;
  price: string;
  isVideo: boolean;
};

export default function ProductCard({
  src,
  price,
  isVideo = false,
}: TProducrCard) {
  const [duration, setDuration] = useState<string>("");
  const [durationSet, setDurationSet] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [sendlinkpost, setsendlinkpost] = useState(false);

  const handleLoadedMetadata = () => {
    if (videoRef.current && !durationSet) {
      const totalSeconds = Math.floor(videoRef.current.duration);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      setDuration(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
      setDurationSet(true);
    }
  };

  function handelsendlinkpost() {
    setsendlinkpost(!sendlinkpost);
  }
  return (
    <div className="rounded-2xl w-full sm:max-w-sm bg-white transition-all duration-300 overflow-hidden relative">
      <div className="relative overflow-hidden group rounded-2xl">
        {isVideo ? (
          <>
            <video
              ref={videoRef}
              src={src}
              controls={false}
              autoPlay
              muted
              loop
              className="w-full max-h-[440px] rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300"
              onLoadedMetadata={handleLoadedMetadata}
            />
            {duration && (
              <span className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                {duration}
              </span>
            )}
          </>
        ) : (
          <img
            src={src}
            alt="product"
            className="w-full h-[440px] rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300"
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
        <LikeProductCard handelsendlinkpost={handelsendlinkpost} />
      </div>
      <ProductModal
        open={sendlinkpost}
        onClose={() => setsendlinkpost(false)}
        shortLink="https://short.link/example"
      />
      <p className="text-center text-sm mt-2">{price} تومان</p>
    </div>
  );
}
