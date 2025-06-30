import Container from "@/components/Module/container/Container";

import CartSummary from "@/components/Module/shopcard/CartSummary";

function checkout() {
  return (
    <Container>
      <main className="px-4 md:px-8 py-6">
        <section className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-col w-full lg:w-2/3 space-y-3 border p-2 border-stone-300 rounded-md">
            <h2 className="text-lg font-semibold mb-2">جزئیات پرداخت</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* نام */}
              <div className="flex flex-col">
                <label htmlFor="firstName" className="mb-1 text-sm font-medium">
                  نام *
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="border border-stone-300 rounded-md p-2 text-sm"
                />
              </div>

              {/* نام خانوادگی */}
              <div className="flex flex-col">
                <label htmlFor="lastName" className="mb-1 text-sm font-medium">
                  نام خانوادگی *
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="border border-stone-300 rounded-md p-2 text-sm"
                />
              </div>

              {/* کشور / منطقه */}
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="country" className="mb-1 text-sm font-medium">
                  کشور / منطقه *
                </label>
                <select
                  id="country"
                  required
                  className="border border-stone-300 rounded-md p-2 text-sm"
                >
                  <option value="">یک گزینه انتخاب کنید</option>
                  <option value="iran">ایران</option>
                  <option value="uae">امارات</option>
                  <option value="turkey">ترکیه</option>
                </select>
              </div>

              {/* خیابان */}
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="street" className="mb-1 text-sm font-medium">
                  خیابان *
                </label>
                <input
                  type="text"
                  id="street"
                  required
                  className="border border-stone-300 rounded-md p-2 text-sm"
                />
              </div>

              {/* آپارتمان (اختیاری) */}
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="apartment" className="mb-1 text-sm font-medium">
                  آپارتمان، مجتمع، واحد و... (اختیاری)
                </label>
                <input
                  type="text"
                  id="apartment"
                  className="border border-stone-300 rounded-md p-2 text-sm"
                />
              </div>

              {/* شهر */}
              <div className="flex flex-col">
                <label htmlFor="city" className="mb-1 text-sm font-medium">
                  شهر *
                </label>
                <input
                  type="text"
                  id="city"
                  required
                  className="border border-stone-300 rounded-md p-2 text-sm"
                />
              </div>

              {/* استان */}
              <div className="flex flex-col">
                <label htmlFor="province" className="mb-1 text-sm font-medium">
                  استان *
                </label>
                <input
                  type="text"
                  id="province"
                  required
                  className="border border-stone-300 rounded-md p-2 text-sm"
                />
              </div>

              {/* کد پستی */}
              <div className="flex flex-col">
                <label
                  htmlFor="postalCode"
                  className="mb-1 text-sm font-medium"
                >
                  کد پستی *
                </label>
                <input
                  type="text"
                  id="postalCode"
                  required
                  className="border border-stone-300 rounded-md p-2 text-sm"
                />
              </div>

              {/* تلفن (اختیاری) */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-1 text-sm font-medium">
                  تلفن (اختیاری)
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="border border-stone-300 rounded-md p-2 text-sm"
                />
              </div>

              {/* ایمیل */}
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="email" className="mb-1 text-sm font-medium">
                  آدرس ایمیل *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="border border-stone-300 rounded-md p-2 text-sm"
                />
              </div>

              {/* دکمه ارسال (اختیاری برای تست) */}
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-white hover:text-primary hover:border hover:border-stone-500 transition duration-300"
                >
                  ادامه به پرداخت
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/3">
            <CartSummary />
          </div>
        </section>
        <div className="flex flex-col md:col-span-2 m-3">
          <label htmlFor="orderNotes" className="mb-1 text-sm font-medium">
            یادداشت سفارش (اختیاری)
          </label>
          <textarea
            id="orderNotes"
            rows={4}
            placeholder="در صورت نیاز توضیحات تکمیلی خود را وارد کنید..."
            className="border border-stone-300 rounded-md p-2 text-sm resize-y"
          />
        </div>

        {/* دکمه ارسال */}
        <div className="md:col-span-2 mt-4 m-3">
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-white hover:text-primary hover:border hover:border-stone-500 transition duration-300"
          >
            ادامه به پرداخت
          </button>
        </div>
      </main>
    </Container>
  );
}
export default checkout;
