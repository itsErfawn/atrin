"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

const steps = [
  { name: "سبد خرید", path: "/shopcard" },
  { name: "اطلاعات ارسال", path: "/shopcard/checkout" },
  { name: "پرداخت", path: "/shopcard/payment" },
];

export default function CartStepper() {
  const pathname = usePathname();
  const currentStep = steps.findIndex((s) => s.path === pathname);

  return (
    <div
      className="flex justify-center items-center rtl gap-0 flex-wrap my-10 px-6
                    md:flex-nowrap md:gap-0"
    >
      {steps.map((step, index) => {
        const isActive = pathname === step.path;
        const isPassed = currentStep > index;

        return (
          <div
            key={index}
            className="flex items-center
                       flex-col md:flex-row"
          >
            <Link href={step.path} className="z-10">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className={clsx(
                  "flex items-center gap-2 md:gap-3 px-4 md:px-8 py-2 md:py-3 rounded-md transition-all duration-300 shadow-md border text-sm md:text-base font-semibold",
                  isActive && "bg-primary text-white border-primary",
                  isPassed && "bg-green-500 text-white border-green-600",
                  !isActive &&
                    !isPassed &&
                    "bg-gray-200 text-gray-700 border-gray-300"
                )}
              >
                <span className="whitespace-nowrap">{step.name}</span>
              </motion.div>
            </Link>

            {index !== steps.length - 1 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className={clsx(
                  "hidden md:block ",
                  "rounded-full transition-all duration-300",
                  "mx-0 md:mx-2",
                  "w-1 h-12 md:w-14 md:h-1",
                  isPassed
                    ? "bg-green-500"
                    : currentStep === index
                    ? "bg-primary"
                    : "bg-gray-300"
                )}
              ></motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
