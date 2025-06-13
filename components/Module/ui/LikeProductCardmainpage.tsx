import React, { useState } from "react";
import { Heart } from "lucide-react";
function LikeProductCardmainpage() {
  const [liked, setLiked] = useState(false);

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
        <Heart
          className="cursor-pointer"
          onClick={() => setLiked(true)}
          size={20}
        />
      )}
    </div>
  );
}

export default LikeProductCardmainpage;
