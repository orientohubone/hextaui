
import React from "react";

interface PhoneMockupProps {
  children?: React.ReactNode;
  frameColor?: string;
  className?: string;
}

export const PhoneMockup = ({ children, frameColor = "bg-gray-900", className = "" }: PhoneMockupProps) => {
  return (
    <div className={`relative w-[300px] h-[600px] rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden ${frameColor} ${className}`}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20 pointer-events-none" />
      
      {/* Side Buttons */}
      <div className="absolute top-24 -left-2.5 w-1 h-7 bg-gray-800 rounded-l-lg" />
      <div className="absolute top-36 -left-2.5 w-1 h-12 bg-gray-800 rounded-l-lg" />
      <div className="absolute top-28 -right-2.5 w-1 h-16 bg-gray-800 rounded-r-lg" />

      {/* Screen */}
      <div className="w-full h-full bg-[#0c0414] overflow-hidden relative z-10">
        {children}
      </div>
    </div>
  );
};
