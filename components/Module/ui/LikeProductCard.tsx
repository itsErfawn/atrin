import React, { useState } from "react";
import { Heart, Send, MessageCircle } from "lucide-react";
function LikeProductCard() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="absolute bottom-0 mb-5 right-4 flex flex-col  gap-2 text-black">
      {liked ? (
        <Heart
          className="cursor-pointer text-red-600"
          fill="red"
          onClick={() => setLiked(false)}
          size={24}
        />
      ) : (
        <Heart
          className="cursor-pointer"
          onClick={() => setLiked(true)}
          size={24}
        />
      )}

      <Send />
      <MessageCircle />
    </div>
  );
}

export default LikeProductCard;
