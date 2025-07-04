"use client";
import React, { useState } from "react";
import InputField from "./InputField";
import OrderNotes from "./OrderNotesProps";
import PaymentForminformation from "./PaymentForminformation";

interface FormData {
  firstName: string;
  lastName: string;
  country: string;
  street: string;
  apartment: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  email: string;
  orderNotes: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  country: "",
  street: "",
  apartment: "",
  city: "",
  province: "",
  postalCode: "",
  phone: "",
  email: "",
  orderNotes: "",
};

const PaymentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("فرم پرداخت ارسال شد:", formData);
  };

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      onSubmit={handleSubmit}
    >
      <PaymentForminformation formData={formData} handleChange={handleChange} />

      <OrderNotes
        value={formData.orderNotes}
        onChange={handleChange}
        placeholder="در صورت نیاز توضیحات تکمیلی خود را وارد کنید..."
      />

      <div className="md:col-span-2 mt-4">
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-white hover:text-primary hover:border hover:border-stone-500 transition duration-300"
        >
          ادامه به پرداخت
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
