
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface AnimatedBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

export const AnimatedBadge = ({ text, icon, className = "", ...props }: AnimatedBadgeProps) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-gray-300 hover:bg-white/10 transition-colors cursor-pointer group hover:border-purple-500/50 shadow-[0_0_0_1px_rgba(0,0,0,0)] hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] ${className}`}
      {...props}
    >
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 relative overflow-hidden">
         <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
           className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
         />
         {icon || <Sparkles className="w-3 h-3 relative z-10" />}
      </span>
      <span>{text}</span>
      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
    </div>
  );
};
