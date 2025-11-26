
import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success";
  className?: string;
}

export const Badge = ({ className = "", variant = "default", ...props }: BadgeProps) => {
  const variants = {
    default: "border-transparent bg-purple-500/20 text-purple-200 hover:bg-purple-500/30 border-purple-500/50",
    secondary: "border-transparent bg-white/10 text-gray-200 hover:bg-white/20",
    destructive: "border-transparent bg-red-500/20 text-red-300 hover:bg-red-500/30 border-red-500/50",
    success: "border-transparent bg-green-500/20 text-green-300 hover:bg-green-500/30 border-green-500/50",
    outline: "text-gray-300 border-white/20",
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}
      {...props}
    />
  );
};
