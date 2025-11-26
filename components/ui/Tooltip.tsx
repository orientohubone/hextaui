
import React from "react";

interface TooltipProps {
  children?: React.ReactNode;
  content: string;
}

export const Tooltip = ({ children, content }: TooltipProps) => {
  return (
    <div className="group relative flex items-center justify-center w-fit">
      {children}
      <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center">
        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-[#1c1528] border border-white/10 shadow-lg rounded-md">
          {content}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-[#1c1528] border-r border-b border-white/10"></div>
      </div>
    </div>
  );
};
