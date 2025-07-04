import Container from "@/components/Module/container/Container";
import React from "react";

const orders = [
  {
    id: "ORD12345",
    date: "1402/04/15",
    status: "در انتظار پرداخت",
    amount: "1,200,000 تومان",
  },
  {
    id: "ORD12346",
    date: "1402/04/10",
    status: "تحویل شده",
    amount: "850,000 تومان",
  },
  {
    id: "ORD12347",
    date: "1402/04/05",
    status: "لغو شده",
    amount: "0 تومان",
  },
];

function page() {
  return (
    <Container>
      <div className=" bg-gray-50 p-4">
        <h1 className="text-3xl font-bold text-primary mb-8">سفارشات من</h1>

        {orders.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            سفارشی یافت نشد.
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-xl shadow p-6 border border-gray-200">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="py-3 px-6 text-left">شماره سفارش</th>
                  <th className="py-3 px-6 text-left">تاریخ</th>
                  <th className="py-3 px-6 text-left">وضعیت</th>
                  <th className="py-3 px-6 text-left">مبلغ</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(({ id, date, status, amount }) => (
                  <tr
                    key={id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="py-4 px-6 text-primary font-medium">{id}</td>
                    <td className="py-4 px-6">{date}</td>
                    <td
                      className={`py-4 px-6 font-semibold ${
                        status === "تحویل شده"
                          ? "text-green-600"
                          : status === "لغو شده"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {status}
                    </td>
                    <td className="py-4 px-6 font-bold">{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Container>
  );
}

export default page;
