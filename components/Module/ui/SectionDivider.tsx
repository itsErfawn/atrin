import React from "react";
type Ttitle = {
  title: string;
};
function SectionDivider({ title }: Ttitle) {
  return (
    <div className="flex items-center gap-2 sm:gap-4 py-4 sm:py-8">
      <hr className="flex-grow border-t border-gray-300" />
      <h1 className="text-base sm:text-xl font-bold whitespace-nowrap">
        {title}
      </h1>
      <hr className="flex-grow border-t border-gray-300" />
    </div>
  );
}

export default SectionDivider;
