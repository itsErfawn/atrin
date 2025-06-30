export default function CartActions() {
  return (
    <div className="w-full border border-stone-400 rounded-md p-3 flex flex-col md:flex-row gap-4 md:justify-between md:items-center">
      <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
        <input
          type="text"
          placeholder="کد تخفیف را وارد کنید:"
          className="border p-2 rounded-md border-stone-400 text-sm w-full sm:w-64"
        />
        <button
          type="submit"
          className="bg-primary text-white text-center p-2 rounded-md hover:bg-white hover:text-primary hover:border hover:border-stone-500 transition duration-300 w-full sm:w-auto"
        >
          اعمال کد تخفیف
        </button>
      </div>

      <button className="bg-primary text-white text-center p-2 rounded-md hover:bg-white hover:text-primary hover:border hover:border-stone-500 transition duration-300 w-full md:w-auto">
        بروزرسانی سبد خرید
      </button>
    </div>
  );
}
