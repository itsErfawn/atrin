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

export default function ProductDetail() {
  return (
    <div className="flex flex-col md:flex-row shadow-sm p-2 gap-4 rounded-2xl justify-between">
      <div className="flex-1 space-y-4">
        <ProductTitle />
        <ProductInfo />
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-between items-center">
          <ProductQuantity />
          <ProductPrice />
        </div>
        <BtnAddCard />
        <ProductBenefits />
        <div>
          <ProductDescriptionWithModal />
        </div>
      </div>
      <div className="flex justify-center items-center relative w-full md:w-1/2 bg-stone-50 p-2 rounded-2xl mt-6 md:mt-0">
        <ProductImage />

        <ProductCommunication />
      </div>
    </div>
  );
}
