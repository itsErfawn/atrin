"use client";
import React, { useState } from "react";
import OrderNotes from "./OrderNotesProps";
import PaymentForminformation from "./PaymentForminformation";
import {
  FormData,
  initialFormData,
  PlayerSchema,
} from "@/types/zodfrom/zodtype";
import z from "zod";

const PaymentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    try {
      PlayerSchema.parse(formData);
      setErrors({});
    } catch (error) {
      const newErrors: Record<string, string> = {};
      if (error instanceof z.ZodError) {
        error.issues.forEach((err: any) => {
          if (err.path.length > 0) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
      }
      setErrors(newErrors);
    }
  };
  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      onSubmit={handleSubmit}
    >
      <PaymentForminformation
        formData={formData}
        handleChange={handleChange}
        errors={errors}
      />

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
