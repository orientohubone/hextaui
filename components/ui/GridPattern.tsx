
import React from "react";

interface GridPatternProps {
  size?: number;
  strokeColor?: string;
  className?: string;
}

export const GridPattern = ({ size = 40, strokeColor = "rgba(255,255,255,0.05)", className = "" }: GridPatternProps) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `linear-gradient(${strokeColor} 1px, transparent 1px), linear-gradient(90deg, ${strokeColor} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 100%)'
      }}
    />
  );
};
