import React, { useState } from "react";
import { Heart, Send, MessageCircle } from "lucide-react";
import { toast } from "react-hot-toast";

function LikeProductCard({ handelsendlinkpost }: any) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    toast.success("محصول با موفقیت به علاقه‌مندی‌ها اضافه شد");
  };

  return (
    <div className="absolute bottom-0 mb-5 right-4 flex flex-col gap-2 text-black">
      {liked ? (
        <Heart
          className="cursor-pointer text-red-600"
          fill="red"
          onClick={() => setLiked(false)}
          size={24}
        />
      ) : (
        <Heart className="cursor-pointer" onClick={handleLike} size={24} />
      )}

      <Send onClick={() => handelsendlinkpost()} />
      <MessageCircle />
    </div>
  );
}

export default LikeProductCard;
