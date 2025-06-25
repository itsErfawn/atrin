import React from "react";
import type { MutableRefObject } from "react";
type Props = {
  src: string;
  videoRef: MutableRefObject<HTMLVideoElement | null>;
  handleLoadedMetadata: () => void;
  duration: string;
};

function SpecialProductCardVideo({
  src,
  videoRef,
  handleLoadedMetadata,
  duration,
}: Props) {
  return (
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
  );
}

export default SpecialProductCardVideo;
