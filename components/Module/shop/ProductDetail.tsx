import ProductDescription from "./ProductDescriptionWithModal";
import React from "react";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import ProductQuantity from "./ProductQuantity";
import BtnAddCard from "./BtnAddCard";
import ProductBenefits from "./ProductBenefits";
import ProductCommunication from "./ProductCommunication";
import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";
import { ProductType } from "@/types/products";

export default function ProductDetail({ product }: { product: ProductType }) {
  const {
    discount = 0,
    price = 0,
    description = "",
    thumbnail = "",
    title = "",
    images = [],
    id = 0,
  } = product || {};
  return (
    <div className="flex flex-col md:flex-row shadow-sm p-2 gap-4 rounded-2xl justify-between">
      <div className="order-1 md:order-2 flex justify-center items-center relative w-full md:w-1/2 bg-stone-50 p-2 rounded-2xl">
        <ProductImage thumbnail={thumbnail} images={images} />
        <ProductCommunication />
      </div>

      <div className="order-2 md:order-1 flex-1 space-y-4">
        <ProductTitle title={title} />
        <ProductInfo />
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-between items-center">
          <ProductQuantity productId={id} />
          <ProductPrice price={price} discount={discount} />
        </div>
        <BtnAddCard product={product} />
        <ProductBenefits />
        <div>
          <ProductDescription description={description} />
        </div>
      </div>
    </div>
  );
}
