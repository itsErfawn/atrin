"use client";
import React, { useState } from "react";

type Props = {
  description: string;
};

export default function ClientReadMore({ description }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-500 text-sm mt-2 hover:text-blue-700"
      >
        بیشتر بخوانید
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-right">
                  توضیحات کامل محصول
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
              <div
                className="text-gray-700 text-sm text-right leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
