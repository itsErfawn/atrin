import AccountInformation from "@/components/module/account/AccountInformation";
import Container from "@/components/module/container/Container";

export interface InputFieldProps {
  id: string;
  name: string;
  type?: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description?: string;
  autoComplete?: string;
  options?: {
    label: string;
    value: string;
  }[];
  error?: string;
}
export default function ProfileEditPage() {
  return (
    <Container>
      <div className="mx-auto  bg-white rounded-lg shadow mt-10 p-2">
        <h1 className="text-2xl font-bold mb-6">ویرایش اطلاعات حساب کاربری</h1>
        <AccountInformation />
      </div>
    </Container>
  );
}
