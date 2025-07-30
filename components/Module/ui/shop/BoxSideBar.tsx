import React, { ReactNode } from "react";

interface BoxSideBarProps {
  title: string;
  children: ReactNode;
}

const BoxSideBar: React.FC<BoxSideBarProps> = ({ title, children }) => {
  return (
    <div className="bg-secondary-10 p-5 mt-3 rounded-2xl">
      <h6 className="mb-2 !font-extralight !text-[16px]">{title}</h6>
      <hr className="border-t border-dashed border-secondary-80 mb-4" />
      {children}
    </div>
  );
};

export default BoxSideBar;
