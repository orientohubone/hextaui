
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PopoverProps {
  children?: React.ReactNode;
}

interface PopoverTriggerProps {
  children?: React.ReactNode;
  asChild?: boolean;
}

interface PopoverContentProps {
  children?: React.ReactNode;
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

const PopoverContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLDivElement>;
} | null>(null);

export const Popover = ({ children }: PopoverProps) => {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  // Close on click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <PopoverContext.Provider value={{ open, setOpen, triggerRef }}>
      <div className="relative inline-block" ref={triggerRef}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

export const PopoverTrigger = ({ children }: PopoverTriggerProps) => {
  const context = React.useContext(PopoverContext);
  if (!context) throw new Error("PopoverTrigger must be used within Popover");

  return (
    <div onClick={() => context.setOpen(!context.open)} className="cursor-pointer">
      {children}
    </div>
  );
};

export const PopoverContent = ({ children, align = "center", sideOffset = 4 }: PopoverContentProps) => {
  const context = React.useContext(PopoverContext);
  if (!context) throw new Error("PopoverContent must be used within Popover");

  const alignClass = {
    start: "left-0",
    center: "left-1/2 -translate-x-1/2",
    end: "right-0",
  };

  return (
    <AnimatePresence>
      {context.open && (
        <motion.div
          initial={{ opacity: 0, y: -5, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -5, scale: 0.95 }}
          transition={{ duration: 0.15 }}
          style={{ marginTop: sideOffset }}
          className={`absolute z-50 w-72 rounded-md border border-white/10 bg-[#130d1d] p-4 text-white shadow-md outline-none ${alignClass[align]}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
