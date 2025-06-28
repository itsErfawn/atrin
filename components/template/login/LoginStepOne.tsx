"use client";

import React, { useState } from "react";
import { User, Phone } from "lucide-react";

function LoginStepOne({ setStep }: { setStep: (step: number) => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const isPhoneValid = phone.length === 11 && /^\d+$/.test(phone);

  return (
    <div className="p-6">
      <p className="font-bold text-xl text-center mb-6">عضویت یا ورود</p>
      <p className="text-center text-gray-600 mb-4">
        لطفا نام و شماره موبایل خود را وارد کنید. کد تایید به شماره موبایل ارسال
        خواهد شد.
      </p>

      <div className="flex items-center border border-stone-400 rounded-md mb-4 px-3 py-2 focus-within:ring-1 transition">
        <User className="text-gray-400 mr-2" size={20} />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="نام خود را وارد کنید"
          className="outline-none w-full placeholder-gray-400"
        />
      </div>

      <div className="flex items-center border border-stone-400 rounded-md mb-4 px-3 py-2 focus-within:ring-1 transition">
        <Phone className="text-gray-400 mr-2" size={20} />
        <input
          type="tel"
          value={phone}
          onChange={(e) => {
            const val = e.target.value;
            if (/^\d*$/.test(val)) setPhone(val);
          }}
          placeholder="0913xxxxxxx"
          maxLength={11}
          className="outline-none w-full placeholder-gray-400"
        />
      </div>

      {!isPhoneValid && phone.length > 0 && (
        <p className="text-red-500 text-sm mb-4 text-center">
          شماره موبایل باید 11 رقم و فقط عدد باشد.
        </p>
      )}

      <div className="flex justify-center">
        <button
          className={`login-btn  rounded-md font-semibold text-white transition
            ${
              isPhoneValid && name.trim().length > 0
                ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }
          `}
          disabled={!isPhoneValid || name.trim().length === 0}
          onClick={() => setStep(1)}
        >
          تایید و ادامه
        </button>
      </div>
    </div>
  );
}

export default LoginStepOne;
