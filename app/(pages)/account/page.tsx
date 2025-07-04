import React from "react";

import CardBoxSection from "@/components/Module/account/CardBoxSection";
import { userInfo } from "@/context/DatauserInfo";
import { orderStatus } from "@/context/DatauserInfo";
import ChartsSection from "@/components/Module/ui/chart/ChartsSection";

function Account() {
  return (
    <div className=" bg-gray-50 p-6 space-y-8">
      <h1 className="text-2xl font-bold text-primary mb-4">پنل کاربری</h1>

      <CardBoxSection title="اطلاعات حساب کاربری" items={userInfo} />
      <CardBoxSection title="وضعیت سفارش‌ها" items={orderStatus} />
      <ChartsSection />
    </div>
  );
}

export default Account;
