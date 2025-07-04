import React from "react";
import InputField from "../account/InputField";

interface PaymentForminformationProps {
  formData: {
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
  };
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

const PaymentForminformation: React.FC<PaymentForminformationProps> = ({
  formData,
  handleChange,
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
      />
      <InputField
        id="lastName"
        name="lastName"
        label="نام خانوادگی"
        value={formData.lastName}
        required
        onChange={handleChange}
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
      />
      <InputField
        id="street"
        name="street"
        label="خیابان"
        value={formData.street}
        required
        onChange={handleChange}
      />
      <InputField
        id="apartment"
        name="apartment"
        label="آپارتمان، مجتمع، واحد و..."
        value={formData.apartment}
        onChange={handleChange}
      />
      <InputField
        id="city"
        name="city"
        label="شهر"
        value={formData.city}
        required
        onChange={handleChange}
      />
      <InputField
        id="province"
        name="province"
        label="استان"
        value={formData.province}
        required
        onChange={handleChange}
      />
      <InputField
        id="postalCode"
        name="postalCode"
        label="کد پستی"
        value={formData.postalCode}
        required
        onChange={handleChange}
      />
      <InputField
        id="phone"
        name="phone"
        label="تلفن"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
      />
      <InputField
        id="email"
        name="email"
        label="آدرس ایمیل"
        type="email"
        value={formData.email}
        required
        onChange={handleChange}
      />
    </>
  );
};

export default PaymentForminformation;
