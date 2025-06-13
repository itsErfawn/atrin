import { ReactNode } from "react";

type Props = {
  title: string;
  action?: ReactNode;
};

export default function SectionHeader({ title, action }: Props) {
  return (
    <div className="flex items-center justify-between py-4 gap-2 sm:gap-0">
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="w-5 h-1  rounded-2xl bg-gray-800" />
        <h2 className="text-sm sm:text-lg font-bold">{title}</h2>
      </div>

      <div className="flex-grow mx-2 sm:mx-4 border-t border-gray-300" />

      {action && (
        <div className="flex items-center text-sm sm:text-sm text-gray-700 hover:text-black cursor-pointer gap-1">
          {action}
        </div>
      )}
    </div>
  );
}
