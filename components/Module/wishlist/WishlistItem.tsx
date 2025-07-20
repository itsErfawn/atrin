import { WishListType } from "@/types/wishlist";
import { Clock, PlayCircle, Trash2 } from "lucide-react";

export default function WishlistItem({ item}:{item:WishListType}) {
  const { product:{thumbnail, title, price, discount}} = item;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200">
      <div className="relative w-full h-58">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* {isVideo && (
          <div className="absolute top-2 left-2 bg-black/60 p-1 rounded-full">
            <PlayCircle className="text-white w-6 h-6" />
          </div>
        )} */}
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-[--color-primary] font-yekanBakh text-lg">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-[--color-primary] font-bold text-base">
            {price} تومان
          </span>
          {discount && (
            <span className="text-stone-500 line-through text-sm">
              {discount} تومان
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-sm mt-2">
          <span className="text-gray-500 flex items-center gap-1">
            <Clock className="w-4 h-4 text-gray-400" />
            {/* {time} */}
          </span>

          <button
            className="text-stone-500 hover:text-red-600 transition-colors"
            title="حذف از علاقه‌مندی‌ها"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
