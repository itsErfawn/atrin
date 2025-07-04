import InputField from "./InputField";

export default function PasswordChangeSection({
  form,
  onChange,
}: {
  form: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <fieldset className="border border-gray-300 rounded p-4">
      <legend className="font-semibold mb-4">تغییر گذرواژه</legend>

      <div className="mb-4">
        <InputField
          id="currentPassword"
          name="currentPassword"
          type="password"
          label="رمز عبور پیشین (در صورتی که قصد تغییر ندارید خالی بگذارید)"
          value={form.currentPassword}
          onChange={onChange}
          autoComplete="current-password"
        />
      </div>

      <div className="mb-4">
        <InputField
          id="newPassword"
          name="newPassword"
          type="password"
          label="رمز عبور جدید (در صورتی که قصد تغییر ندارید خالی بگذارید)"
          value={form.newPassword}
          onChange={onChange}
          autoComplete="new-password"
        />
      </div>

      <InputField
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        label="تکرار رمز عبور"
        value={form.confirmPassword}
        onChange={onChange}
        autoComplete="new-password"
      />
    </fieldset>
  );
}
