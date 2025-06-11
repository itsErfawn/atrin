"use client";

import React from "react";
import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";
import FooterTrust from "./FooterTrust";
import FooterApps from "./FooterApps";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer className="border-t border-stone-300 py-10 text-right rtl">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row flex-wrap gap-8">
        <FooterInfo />
        <FooterLinks />
        <FooterTrust />
      </div>

      <FooterApps />
      <FooterBottom />
    </footer>
  );
}

export default Footer;
