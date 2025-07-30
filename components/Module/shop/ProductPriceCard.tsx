interface ProductPriceProps {
  price: number;
  discount?: number;
  discounttol: number;
}

function ProductPriceCard({ price, discount, discounttol }: ProductPriceProps) {
  return (
    <div className="flex flex-col mt-2">
      <div className="flex items-center gap-2">
        {discount ? (
          <span className="line-through text-secondary-80 text-sm">
            {price.toLocaleString()}
          </span>
        ) : (
          ""
        )}
        <span className="text-lg font-bold text-secondary">
          {discount
            ? (price - discount).toLocaleString()
            : price.toLocaleString()}
          <span className="text-secondary-80 mx-1 !font-extralight text-sm">
            تومان
          </span>
        </span>
      </div>

      <hr className="border-t border-dashed border-secondary-40 my-2" />

      <div className="mt-2 flex items-center gap-1">
        <div className="relative w-full h-[5px] bg-secondary-20 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${discounttol}%` }}
          />
        </div>
        <div className="text-xs text-secondary mt-1 font-semibold">
          {discounttol}/100
        </div>
      </div>
    </div>
  );
}

export default ProductPriceCard;
