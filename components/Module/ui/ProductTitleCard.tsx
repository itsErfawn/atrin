interface ProductTitleProps {
  title: string;
}

function ProductTitleCard({ title }: ProductTitleProps) {
  return <h4 className="mt-3 text-secondary text-center">{title}</h4>;
}
export default ProductTitleCard;
