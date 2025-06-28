"use client";
import { User } from "lucide-react";
import React, { useState } from "react";
import LoginStepOne from "./LoginStepOne";
import LoginStepTwo from "./LoginStepTwo";

function LoginPopUp() {
  const [step, setStep] = useState(0);
  const [active, setActive] = useState(false);
  return (
    <>
      <button>
        <User
          className="cursor-pointer h-8 w-8"
          onClick={() => setActive(true)}
        />
      </button>
      <div
        className={`bg-overlay ${active ? "active" : ""}`}
        onClick={() => setActive(false)}
      ></div>
      <div
        className={`login-container ${active ? "active" : ""}`}
        onClick={() => setActive(false)}
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="login-wrapper"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-6/12 p-5">
            <div className="login-header">
              <img src="/logo.png" className="login-header--logo" />
            </div>
            <div className="login-body">
              {!step ? (
                <LoginStepOne setStep={setStep} />
              ) : (
                <LoginStepTwo setStep={setStep} />
              )}
            </div>
          </div>
          <div className="w-6/12">
            <img src="/image/login-bg.jpg" className="login-image" />
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPopUp;
