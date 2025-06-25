import React from "react";
type ProductTitle = {
  title: string;
};

function ProductTitle({ title }: ProductTitle) {
  return (
    <>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <hr className="text-stone-100" />
    </>
  );
}

export default ProductTitle;
