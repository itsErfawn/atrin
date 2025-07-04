"use client";
import React, { useState } from "react";
import InputField from "./InputField";
import PasswordChangeSection from "./PasswordChangeSection";

function AccountInformation() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex gap-4">
        <div className="w-1/2">
          <InputField
            id="firstName"
            name="firstName"
            label="نام"
            required
            value={form.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="w-1/2">
          <InputField
            id="lastName"
            name="lastName"
            label="نام خانوادگی"
            required
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <InputField
        id="displayName"
        name="displayName"
        label="نام نمایشی"
        required
        value={form.displayName}
        onChange={handleChange}
        description="به این صورت اسم شما در حساب کاربری و نظرات دیده خواهد شد"
      />

      <InputField
        id="email"
        name="email"
        type="email"
        label="آدرس ایمیل"
        required
        value={form.email}
        onChange={handleChange}
      />

      <PasswordChangeSection
        form={{
          currentPassword: form.currentPassword,
          newPassword: form.newPassword,
          confirmPassword: form.confirmPassword,
        }}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition"
      >
        ذخیره تغییرات
      </button>
    </form>
  );
}

export default AccountInformation;
