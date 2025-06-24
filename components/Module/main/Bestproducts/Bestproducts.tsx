import React from "react";
import Container from "../../container/Container";
import SectionDivider from "../../ui/SectionDivider";
import { Crown } from "lucide-react";
import { bestvideos, Specialauctiondata } from "@/context/DataSpecialauction";

function Bestproducts() {
  return (
    <Container>
      <SectionDivider title="پرفروش ترین محصولات" />

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="bg-primary p-4 rounded-2xl shadow flex flex-col items-center lg:w-1/4">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-1">
              <Crown className="text-yellow-500 animate-bounce w-5 h-5 sm:w-6 sm:h-6" />
              پرفروش‌ترین محصول <span className="text-stone-200">#۱</span>
            </h2>
          </div>

          {bestvideos.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={item.bestname}
                alt={item.besttitle}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover animate-pulse hover:scale-105 transition duration-500"
              />
              <div className="space-y-2 mt-4">
                <h3 className="text-white text-base sm:text-lg">
                  {item.besttitle}
                </h3>
                <p className="text-sm text-white">
                  قیمت: {item.bestprice} تومان
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-wrap gap-4">
          {Specialauctiondata.map((item, index) => (
            <div
              key={index}
              className="p-2 rounded shadow bg-white flex items-center gap-3 w-full sm:w-[48%] md:w-[30%]"
            >
              <img
                src={item.name}
                alt={item.title}
                className="w-26 h-20 sm:w-20 sm:h-20 object-cover rounded"
              />
              <div className="space-y-1 flex-1">
                <h3 className="font-bold text-sm sm:text-base">{item.title}</h3>
                <div className="flex gap-3 items-center justify-between">
                  <span className="bg-stone-300 text-white text-xs px-2 rounded-2xl">
                    {index + 1}
                  </span>
                  <p className="text-sm text-gray-500">{item.price} تومان</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Bestproducts;
