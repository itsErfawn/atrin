import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  name: string;
  value: string;
  required?: boolean;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  options?: { value: string; label: string }[];
  textarea?: boolean;
  rows?: number;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  name,
  value,
  required = false,
  onChange,
  options,
  textarea = false,
  rows = 3,
  placeholder,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 text-sm font-medium">
        {label} {required && "*"}
      </label>

      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          className="border border-stone-300 rounded-md p-2 text-sm resize-y"
        />
      ) : options ? (
        <select
          id={id}
          name={name}
          value={value}
          required={required}
          onChange={onChange}
          className="border border-stone-300 rounded-md p-2 text-sm"
        >
          <option value="">یک گزینه انتخاب کنید</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          required={required}
          onChange={onChange}
          placeholder={placeholder}
          className="border border-stone-300 rounded-md p-2 text-sm"
        />
      )}
    </div>
  );
};

export default InputField;
