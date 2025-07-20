import Image from "next/image";
import { Plus, Minus, Trash2 } from "lucide-react";
import { CartItemType } from "@/types/cart";


export default function CartItem({ item }:{item:CartItemType}) {
  return (
    <div className="flex flex-col items-center w-64 border border-stone-400 rounded-xl bg-white shadow-sm p-4">
      <Image
        src={item.product.thumbnail}
        alt={item.product.title}
        width={200}
        height={120}
        className="rounded-md object-cover"
      />
      <div className="w-full mt-4">
        <div className="flex justify-between items-center mb-2 text-sm">
          <h3 className="font-semibold">{item.product.title}</h3>
          <span className="text-primary font-bold">
            {item.product.price.toLocaleString()} تومان
          </span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <button className="bg-gray-200 p-1.5 rounded hover:bg-gray-300">
              <Plus size={16} />
            </button>
            <span className="w-6 text-center">{item.quantity}</span>
            <button className="bg-gray-200 p-1.5 rounded hover:bg-gray-300">
              <Minus size={16} />
            </button>
          </div>

          <button className="flex items-center gap-1 text-red-500 hover:text-red-600">
            <Trash2 size={16} />
            <span>حذف</span>
          </button>
        </div>
      </div>
    </div>
  );
}
