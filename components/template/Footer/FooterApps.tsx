import React from "react";

function FooterApps() {
  const items=["play.svg","bazar.svg","myket.svg","sibapp.svg"]
  return (
    <div className="footer-app-container">
            <div className="flex items-center gap-3 text-center">
        <img src="https://d1.siteroze.ir/wp-content/themes/atrin/img/icon-application.png" className="w-12 h-12"/>
        <p className="text-lg font-semibold">دانلود اپلیکیشن</p>
      </div>
          <div className="footer-app_image-wrapper">
            {items.map((src,index) => (
              <a key={index} href="#" >
                <img src={`https://d1.siteroze.ir/wp-content/themes/atrin/img/app/${src}`}/>
              </a>
             ))} 
          </div>
    </div>
  );
}
export default FooterApps;
