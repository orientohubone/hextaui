
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "low" | "medium" | "high";
  children?: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ className = "", intensity = "medium", children, ...props }: GlassCardProps) => {
  const intensities = {
    low: "bg-white/5 backdrop-blur-sm border-white/5",
    medium: "bg-white/10 backdrop-blur-md border-white/10",
    high: "bg-white/20 backdrop-blur-lg border-white/20 shadow-xl",
  };

  return (
    <div
      className={`rounded-xl border p-6 relative overflow-hidden ${intensities[intensity]} ${className}`}
      {...props}
    >
      {/* Optional Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
