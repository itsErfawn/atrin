import React, { useState, useEffect } from "react";

function LoginStepTwo({ setStep }: { setStep: (step: number) => void }) {
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  return (
    <div>
      <p className="font-bold text-xl text-center mb-4">عضویت یا ورود</p>
      <p className="login-title">کد ارسال شده را وارد کنید.</p>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          const value = e.target.value;
          if (/^\d*$/.test(value) && value.length <= 6) {
            setInput(value);
          }
        }}
        className="login-input"
        placeholder="کد تایید"
      />
      <div className="text-center text-sm text-gray-500">
        {!canResend ? (
          <span>ارسال مجدد کد تا {timer} ثانیه دیگر</span>
        ) : (
          <button className="underline">ارسال مجدد کد</button>
        )}
      </div>
      <div className="flex items-center justify-center mt-4 gap-2">
        <button className="login-btn" disabled={input.length !== 6}>
          تایید
        </button>

        <button
          className="text-sm text-gray-600 underline"
          onClick={() => setStep(0)}
        >
          بازگشت
        </button>
      </div>
    </div>
  );
}

export default LoginStepTwo;
