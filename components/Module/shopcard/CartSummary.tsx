export default function CartSummary() {
  return (
    <div>
      <div className="shadow-sm p-3 border border-stone-400 rounded-md space-y-4">
        <div className="flex justify-between">
          <span>2,400,000 تومان</span>
          <h3>کل سبد خرید</h3>
        </div>
        <hr className="w-full text-stone-400" />
        <div className="flex justify-between bg-green-100 rounded-md p-2">
          <span>2,400,000 تومان</span>
          <h3>مجموع نهایی</h3>
        </div>
      </div>
      <button className="bg-primary text-center rounded-md w-full mt-3 p-2 text-white hover:bg-white hover:text-primary hover:border hover:border-stone-500 transition duration-300">
        اقدام به پرداخت
      </button>
    </div>
  );
}
