import ClientReadMore from "./ClientReadMore";
type TProductDescription = {
  description: string;
};

export default function ProductDescription({
  description,
}: TProductDescription) {
  const wordCount = description.trim().split(/\s+/).length;
  const shouldTruncate = wordCount > 50;
  const truncatedText = shouldTruncate
    ? description.trim().split(/\s+/).slice(0, 50).join(" ") + "..."
    : description;

  return (
    <div className="bg-gray-50 rounded-md p-5 mt-6 shadow-sm mx-auto max-w-3xl">
      <h3 className="text-lg font-semibold mb-3 text-right">توضیحات محصول</h3>
      <div
        className="text-gray-700 text-sm text-right leading-relaxed"
        dangerouslySetInnerHTML={{ __html: truncatedText }}
      />
      {shouldTruncate && <ClientReadMore description={description} />}
    </div>
  );
}
