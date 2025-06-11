import React from "react";

function FooterApps() {
  return (
    <div className="container mx-auto px-4 py-4 rounded-md mt-10 flex flex-col md:flex-row justify-between bg-[#313131] items-center gap-6 md:gap-0 rtl text-white">
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        {[
          [
            { src: "play.svg", alt: "Google Play" },
            { src: "bazar.svg", alt: "Bazaar" },
          ],
          [
            { src: "myket.svg", alt: "Myket" },
            { src: "sibapp.svg", alt: "SibApp" },
          ],
        ].map((group, i) => (
          <div className="flex flex-col gap-2 sm:flex-row" key={i}>
            {group.map(({ src, alt }) => (
              <a key={alt} href="#">
                <img
                  src={`https://d1.siteroze.ir/wp-content/themes/atrin/img/app/${src}`}
                  alt={alt}
                  className="h-10"
                />
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 text-center">
        <img
          src="https://d1.siteroze.ir/wp-content/themes/atrin/img/icon-application.png"
          alt="اپلیکیشن"
          className="w-12 h-12"
        />
        <p className="text-lg font-semibold">دانلود اپلیکیشن</p>
      </div>
    </div>
  );
}

export default FooterApps;
