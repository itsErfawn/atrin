import z from "zod";

export const PlayerSchema = z.object({
  firstName: z.string().min(1, "نام الزامی است"),
  lastName: z.string().min(1, "نام خانوادگی الزامی است"),
  country: z.string().min(1, "کشور الزامی است"),
  street: z.string().min(1, "خیابان الزامی است"),
  apartment: z.string().optional(),
  city: z.string().min(1, "شهر الزامی است"),
  province: z.string().min(1, "استان الزامی است"),
  postalCode: z.string().regex(/^\d+$/, "کد پستی باید عددی باشد"),
  phone: z.string().min(10, "شماره تلفن باید حداقل ۱۰ رقم باشد"),
  email: z.string().email("ایمیل معتبر نیست"),
  orderNotes: z.string().optional(),
});

export interface FormData {
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

export const initialFormData: FormData = {
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

export interface PaymentForminformationProps {
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
  errors?: Record<string, string>;
}
