"use client";
import Container from "@/components/module/container/Container";
import React, { useState } from "react";

function Address() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal(type: any) {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Container>
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-primary mb-8">آدرس‌ها</h1>

        <section className="bg-white rounded-xl shadow p-6 border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold mb-2">آدرس صورتحساب</h2>
          <p className="mb-4 text-gray-600">
            آدرس‌های زیر برای ارسال فاکتور و صورت حساب استفاده خواهند شد.
          </p>
          <p className="text-gray-500 mb-4">شما هنوز آدرسی ثبت نکرده‌اید.</p>
          <button
            onClick={() => openModal("billing")}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition"
          >
            آدرس صورتحساب (اضافه کردن)
          </button>
        </section>

        <section className="bg-white rounded-xl shadow p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">آدرس برای ارسال بار</h2>
          <p className="text-gray-500 mb-4">شما هنوز آدرسی ثبت نکرده‌اید.</p>
          <button
            onClick={() => openModal("shipping")}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition"
          >
            آدرس برای ارسال بار (اضافه کردن)
          </button>
        </section>

        {modalOpen && (
          <div
            className="fixed inset-0 bg-black/45 bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg p-6 w-96 max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={closeModal}>بستن</button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Address;
