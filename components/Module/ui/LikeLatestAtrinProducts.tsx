import React, { useState } from "react";
import { Heart, Send, MessageCircle } from "lucide-react";
import { toast } from "react-hot-toast";

type Cols = {
  Col?: "col" | "row";
};

function LikeLatestAtrinProducts({ Col = "col" }: Cols) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    toast.success("محصول با موفقیت به علاقه‌مندی‌ها اضافه شد");
  };

  return (
    <div className={`flex flex-${Col} gap-2 text-black`}>
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

      <Send />
      <MessageCircle />
    </div>
  );
}

export default LikeLatestAtrinProducts;
