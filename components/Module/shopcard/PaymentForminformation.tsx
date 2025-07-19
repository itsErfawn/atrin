import React, { useState } from "react";
import InputField from "../account/InputField";
import { PaymentForminformationProps } from "@/types/zodfrom/zodtype";

const PaymentForminformation: React.FC<PaymentForminformationProps> = ({
  formData,
  handleChange,
  errors,
}) => {
  return (
    <>
      <InputField
        id="firstName"
        name="firstName"
        label="نام"
        value={formData.firstName}
        required
        onChange={handleChange}
        error={errors?.firstName}
      />
      <InputField
        id="lastName"
        name="lastName"
        label="نام خانوادگی"
        value={formData.lastName}
        required
        onChange={handleChange}
        error={errors?.lastName}
      />
      <InputField
        id="country"
        name="country"
        label="کشور / منطقه"
        value={formData.country}
        required
        onChange={handleChange}
        options={[
          { value: "iran", label: "ایران" },
          { value: "uae", label: "امارات" },
          { value: "turkey", label: "ترکیه" },
        ]}
        error={errors?.country}
      />
      <InputField
        id="street"
        name="street"
        label="خیابان"
        value={formData.street}
        required
        onChange={handleChange}
        error={errors?.street}
      />
      <InputField
        id="apartment"
        name="apartment"
        label="آپارتمان، مجتمع، واحد و..."
        value={formData.apartment}
        onChange={handleChange}
        error={errors?.apartment}
      />
      <InputField
        id="city"
        name="city"
        label="شهر"
        value={formData.city}
        required
        onChange={handleChange}
        error={errors?.city}
      />
      <InputField
        id="province"
        name="province"
        label="استان"
        value={formData.province}
        required
        onChange={handleChange}
        error={errors?.province}
      />
      <InputField
        id="postalCode"
        name="postalCode"
        label="کد پستی"
        value={formData.postalCode}
        required
        onChange={handleChange}
        error={errors?.postalCode}
      />
      <InputField
        id="phone"
        name="phone"
        label="تلفن"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        error={errors?.phone}
      />
      <InputField
        id="email"
        name="email"
        label="آدرس ایمیل"
        type="email"
        value={formData.email}
        required
        onChange={handleChange}
        error={errors?.email}
      />
    </>
  );
};

export default PaymentForminformation;
