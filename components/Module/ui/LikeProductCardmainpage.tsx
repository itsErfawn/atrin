import React, { useState } from "react";
import { Heart } from "lucide-react";
import { toast } from "react-hot-toast";

function LikeProductCardmainpage() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    toast.success("محصول با موفقیت به علاقه‌مندی‌ها اضافه شد");
  };

  return (
    <div>
      {liked ? (
        <Heart
          className="cursor-pointer text-red-600"
          fill="red"
          onClick={() => setLiked(false)}
          size={20}
        />
      ) : (
        <Heart className="cursor-pointer" onClick={handleLike} size={20} />
      )}
    </div>
  );
}

export default LikeProductCardmainpage;
