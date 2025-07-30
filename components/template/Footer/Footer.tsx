import React from "react";
import Container from "@/components/module/container/Container";
import Image from "next/image";
import Link from "next/link";

const socialItems = [
  { name: "گوگل پلی", image: "/image/footer/google-play-5-1.png" },
  { name: "مایکت", image: "/image/footer/myket.png" },
  { name: "کافه بازار", image: "/image/footer/cafebazaar.png" },
];

const quickAccessItems = [
  "دسته‌بندی",
  "پرفروش‌ترین‌ها",
  "محصولات تخفیف‌دار",
  "پشتیبانی",
  "محبوب ترین ها",
  "سوالی دارید",
  "تماس با ما",
  "درباره ما",
];

const contactInfo = [
  { name: "تماس با ما:", description: "0123465" },
  { name: "آدرس ایمیل:", description: "des@gmail.com" },
  { name: "آدرس:", description: "تهران, خیابان پاسداران کوچه 18" },
];

const licenseImages = [
  "/image/footer/enamad.png",
  "/image/footer/melli-n.png",
  "/image/footer/etehadie.png",
];

function Footer() {
  return (
    <footer className=" pt-10">
      <Container>
        <div className="bg-secondary rounded-3xl p-6 shadow-md">
          <div className="flex">
            <div className="space-y-4 text-white w-2/3">
              <h3 className="text-lg  ">درباره کالا پلاس</h3>
              <p className="text-sm leading-8 text-secondary-40">
                فروشگاه اینترنتی شاپینو سال‌ها است که به‌عنوان بزرگترین فروشگاه
                کالای دیجیتال مشغول فعالیت است. از آن‌جا که خرید اینترنتی همواره
                موجی از بی‌اعتمادی و شک را با خود به‌همراه داشته، نماد
                الکترونیکی می‌تواند خیال خیلی از افراد را راحت کند.
              </p>
              <div className="flex items-center justify-between">
                <div className="bg-[#081638] p-2 rounded-xl">icon</div>
                <div className="bg-[#081638] p-2 rounded-xl">icon</div>
                <div className="bg-[#081638] p-2 rounded-xl">icon</div>
                <div className="bg-[#081638] p-2 rounded-xl">icon</div>
              </div>
            </div>
            <div className="flex items-center w-full justify-between">
              <div className="text-center">
                <h3 className="text-lg  text-white mb-4">دسترسی سریع</h3>
                <ul className="space-y-2">
                  {quickAccessItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={"#"}
                        className="text-secondary-40 hover:text-primary text-sm transition"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div>
                  <h3 className="text-lg  text-white mb-4">تماس با ما</h3>
                  <ul className="space-y-3">
                    {contactInfo.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm text-secondary-40 flex justify-between items-center"
                      >
                        <span className="font-medium">{item.name}</span>
                        <span>{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7">
                  <div className="flex items-center">
                    <h3 className="text-lg  text-white mb-2">خبرنامه</h3>
                    <p className="text-secondary-40 text-sm mb-3">
                      جهت عضویت در خبرنامه از کادر زیر اقدام کنید.
                    </p>
                  </div>
                  <div className="flex bg-[#081638] rounded-2xl p-1 ">
                    <input
                      type="text"
                      placeholder="ایمیل شما"
                      className="  text-sm focus:outline-none text-white"
                    />
                    <button className="button bg-secondary text-white">
                      ثبت
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg  text-white mb-4">دسترسی سریع</h3>
                <ul className="space-y-2">
                  {quickAccessItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-secondary-40 hover:text-primary text-sm transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex gap-4 flex-col items-center justify-center  w-1/4">
              {licenseImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-[#081638] p-2 rounded-lg shadow-sm"
                >
                  <Image
                    src={image}
                    alt="نماد اعتماد"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className=" p-2 rounded-2xl  bg-[#081638] mt-8  flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <Image
                src="/image/footer/logofooter.png"
                width={120}
                height={40}
                alt="لوگو کالاپلاس"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div>
                <div className="space-x-3 flex">
                  {socialItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center  px-4 py-1 rounded-lg bg-secondary transition"
                    >
                      <div>
                        <span className="text-white text-xs block">
                          دانلود از:
                        </span>
                        <span className="text-white text-sm">{item.name}</span>
                      </div>
                      <div className="w-5 h-5 relative mr-3">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
