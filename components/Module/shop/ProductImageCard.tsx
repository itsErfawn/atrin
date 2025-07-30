import Image from "next/image";
import { ProductCardProps } from "./ProductCard";

function ProductImageCard({ product }: ProductCardProps) {
  return (
    <div className="relative bg-secondary-10 rounded-xl h-40 flex justify-center items-center overflow-hidden">
      <div className="w-[70px] h-[70px] flex justify-center items-center">
        <Image
          src={product.image}
          alt={product.title}
          width={70}
          height={70}
          className="object-contain"
        />
      </div>

      <div className="absolute top-2 right-2 flex flex-col space-y-1">
        {product.colors.map((color, i) => (
          <span
            key={i}
            style={{ backgroundColor: color }}
            className="w-4 h-4 rounded-full border border-white"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImageCard;
