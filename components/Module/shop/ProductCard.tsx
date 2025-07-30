import ProductImageCard from "./ProductImageCard";
import ProductTitleCard from "../ui/ProductTitleCard";
import ProductPriceCard from "./ProductPriceCard";

interface Product {
  id: number;
  title: string;
  image: string;
  colors: string[];
  price: number;
  discount?: number;
  discounttol: number;
}

export interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="shadow-sm rounded-lg p-3 flex flex-col hover:-translate-y-5 transition-transform duration-400 w-full">
      <ProductImageCard product={product} />
      <ProductTitleCard title={product.title} />
      <ProductPriceCard
        price={product.price}
        discount={product.discount}
        discounttol={product.discounttol}
      />
    </div>
  );
}
