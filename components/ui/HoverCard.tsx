
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HoverCardProps {
  children?: React.ReactNode;
}

interface HoverCardTriggerProps {
  children?: React.ReactNode;
}

interface HoverCardContentProps {
  children?: React.ReactNode;
  className?: string;
}

const HoverCardContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

export const HoverCard = ({ children }: HoverCardProps) => {
  const [open, setOpen] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  return (
    <HoverCardContext.Provider value={{ open, setOpen }}>
      <div 
        className="relative inline-block"
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </HoverCardContext.Provider>
  );
};

export const HoverCardTrigger = ({ children }: HoverCardTriggerProps) => {
  return <div className="cursor-pointer inline-block">{children}</div>;
};

export const HoverCardContent = ({ children, className = "" }: HoverCardContentProps) => {
  const context = React.useContext(HoverCardContext);
  if (!context) throw new Error("HoverCardContent must be used within HoverCard");

  return (
    <AnimatePresence>
      {context.open && (
        <motion.div
          initial={{ opacity: 0, y: 5, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 5, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={`absolute left-0 top-full mt-2 z-50 w-64 rounded-md border border-white/10 bg-[#130d1d] p-4 text-white shadow-xl outline-none ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
