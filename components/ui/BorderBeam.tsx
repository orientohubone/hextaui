
import React from "react";
import { motion } from "framer-motion";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className = "",
  size = 300,
  duration = 15,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] ${className}`}>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          delay: delay,
        }}
        style={{
          width: size,
          height: size,
          position: "absolute",
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 70%, ${colorFrom} 85%, ${colorTo} 100%)`,
          opacity: 1,
        }}
      />
    </div>
  );
};
