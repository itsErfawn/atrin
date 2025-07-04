import React from "react";

interface OrderNotesProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const OrderNotes: React.FC<OrderNotesProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col md:col-span-2 m-3">
      <label htmlFor="orderNotes" className="mb-1 text-sm font-medium">
        یادداشت سفارش (اختیاری)
      </label>
      <textarea
        id="orderNotes"
        rows={4}
        value={value}
        placeholder={placeholder}
        className="border border-stone-300 rounded-md p-2 text-sm resize-y"
        onChange={onChange}
      />
    </div>
  );
};

export default OrderNotes;
