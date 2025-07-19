import { InputFieldProps } from "@/app/(pages)/account/(page)/editaccount/page";

export default function InputField({
  id,
  name,
  type = "text",
  label,
  required = false,
  value,
  onChange,
  description,
  autoComplete,
  error,
}: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block font-medium mb-1">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {description && (
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      )}
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
}
