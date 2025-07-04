export const monthlyData = {
  labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد"],
  datasets: [
    {
      label: "میزان خرید (تومان)",
      data: [120000, 250000, 180000, 320000, 150000],
      backgroundColor: "#353535",
      borderRadius: 6,
    },
  ],
};

export const orderStatusLineData = {
  labels: ["در انتظار", "در حال انجام", "تحویل شده", "لغو شده"],
  datasets: [
    {
      label: "تعداد سفارش‌ها",
      data: [12, 19, 7, 3],
      borderColor: "#353535",
      backgroundColor: "rgba(53, 53, 53, 0.5)",
      fill: false,
      tension: 0.4,
    },
  ],
};
