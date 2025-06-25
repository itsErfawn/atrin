import React from "react";
type TProductDescription = {
  description: string;
};
export default function ProductDescription({
  description,
}: TProductDescription) {
  console.log(description);

  return (
    <>
      <div className="bg-gray-50 rounded-md p-5 mt-6 shadow-sm mx-auto max-w-3xl">
        <h3 className="text-lg font-semibold mb-3 text-right">توضیحات محصول</h3>
        <div
          className="text-gray-700 text-sm text-right leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </>
  );
}
