
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const ScrollBeams = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll progress for parallax effects
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax transformations for background elements
  const y1 = useTransform(smoothProgress, [0, 1], [0, 1000]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -500]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Central Connectivity Line */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[20vh] bg-gradient-to-b from-transparent via-purple-400 to-transparent blur-[2px]"
        />
      </div>

      {/* Left Beam */}
      <div className="hidden md:block absolute left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent">
        <motion.div 
          animate={{
            y: [0, 1000],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[2px] h-[30vh] bg-gradient-to-b from-transparent via-blue-400/50 to-transparent blur-[1px]"
        />
      </div>

      {/* Right Beam */}
      <div className="hidden md:block absolute right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent">
        <motion.div 
          animate={{
            y: [0, 1000],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[2px] h-[30vh] bg-gradient-to-b from-transparent via-indigo-400/50 to-transparent blur-[1px]"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
        }}
      />
      
      {/* Floating Particles (Parallax) */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-purple-500/20 blur-[1px]" />
          <div className="absolute top-[40%] right-[15%] w-3 h-3 rounded-full bg-blue-500/20 blur-[2px]" />
          <div className="absolute top-[70%] left-[20%] w-2 h-2 rounded-full bg-indigo-500/20 blur-[1px]" />
      </motion.div>
    </div>
  );
};
