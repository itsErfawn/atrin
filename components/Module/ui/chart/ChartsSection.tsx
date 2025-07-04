"use client";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
} from "chart.js";
import { monthlyData, orderStatusLineData } from "@/context/DataChart";

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  PointElement
);

export default function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
      <div className="bg-white rounded-xl shadow p-5 border border-gray-200">
        <h2 className="text-lg font-semibold text-primary mb-4 border-b pb-2">
          نمودار خرید ماهانه
        </h2>
        <Bar
          data={monthlyData}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
          }}
        />
      </div>

      <div className="bg-white rounded-xl shadow p-5 border border-gray-200">
        <h2 className="text-lg font-semibold text-primary mb-4 border-b pb-2">
          نمودار خطی وضعیت سفارش‌ها
        </h2>
        <Line
          data={orderStatusLineData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  color: "#353535",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
