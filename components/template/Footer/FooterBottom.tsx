"use client"
import React from "react";
import { Instagram, Youtube, Send } from "lucide-react";

function FooterBottom() {
  return (
    <>
      <div className="footer-up-wrapper ">
        <div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="footer-up-btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
            برو به بالا
          </button>
        </div>
      </div>

      <div className="footer-CR-wrapper">
        <p className="text-[#7A7A7A]">کلیه حقوق این وب‌سایت متعلق به فروشگاه آترین می‌باشد</p>
        <div className="flex gap-4 text-xl text-stone-500">
          {[Instagram, Send, Youtube, Send].map((Icon, idx) => (
            <a key={idx} href="#">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default FooterBottom;
