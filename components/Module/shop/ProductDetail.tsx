import ProductDescriptionWithModal from "./ProductDescriptionWithModal";
import React from "react";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import ProductQuantity from "./ProductQuantity";
import BtnAddCard from "./BtnAddCard";
import ProductBenefits from "./ProductBenefits";
import ProductCommunication from "./ProductCommunication";
import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";
interface Product {
  discount?: number;
  price?: number;
  description?: string;
  thumbnail?: string;
  title?: string;
  images?: string[];
}

export interface ProductDetailProps {
  product: Product;
}
export default function ProductDetail({ product }: ProductDetailProps) {
  const {
    discount = 0,
    price = 0,
    description = "",
    thumbnail = "",
    title = "",
    images = [],
  } = product || {};
  return (
    <div className="flex flex-col md:flex-row shadow-sm p-2 gap-4 rounded-2xl justify-between">
      <div className="flex-1 space-y-4">
        <ProductTitle title={title} />
        <ProductInfo />
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-between items-center">
          <ProductQuantity />
          <ProductPrice price={price} discount={discount} />
        </div>
        <BtnAddCard />
        <ProductBenefits />
        <div>
          <ProductDescriptionWithModal description={description} />
        </div>
      </div>
      <div className="flex justify-center items-center relative w-full md:w-1/2 bg-stone-50 p-2 rounded-2xl mt-6 md:mt-0">
        <ProductImage thumbnail={thumbnail} images={images} />

        <ProductCommunication />
      </div>
    </div>
  );
}
