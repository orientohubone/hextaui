import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownMenuProps {
  children?: React.ReactNode;
}

interface DropdownMenuTriggerProps {
  children?: React.ReactNode;
  asChild?: boolean;
}

interface DropdownMenuContentProps {
  children?: React.ReactNode;
  align?: 'start' | 'center' | 'end';
}

const DropdownContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

export const DropdownMenu = ({ children }: DropdownMenuProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if(open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block text-left" ref={containerRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export const DropdownMenuTrigger = ({ children }: DropdownMenuTriggerProps) => {
  const context = React.useContext(DropdownContext);
  if (!context) throw new Error("Trigger must be used within DropdownMenu");
  return (
    <div onClick={() => context.setOpen(!context.open)} className="cursor-pointer">
      {children}
    </div>
  );
};

export const DropdownMenuContent = ({ children, align = 'start' }: DropdownMenuContentProps) => {
  const context = React.useContext(DropdownContext);
  if (!context) throw new Error("Content must be used within DropdownMenu");

  const aligns = {
      start: 'left-0',
      center: 'left-1/2 -translate-x-1/2',
      end: 'right-0'
  };

  return (
    <AnimatePresence>
      {context.open && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className={`absolute ${aligns[align]} z-50 mt-2 w-56 rounded-md border border-white/10 bg-[#130d1d] p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const DropdownMenuItem = ({ children, onClick, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    const context = React.useContext(DropdownContext);
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if(onClick) onClick(e);
        context?.setOpen(false);
    }
  return (
    <div
      onClick={handleClick}
      className={`relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm text-gray-200 outline-none transition-colors hover:bg-purple-500/20 hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const DropdownMenuLabel = ({ children }: { children?: React.ReactNode }) => (
  <div className="px-2 py-1.5 text-sm font-semibold text-white">
    {children}
  </div>
);

export const DropdownMenuSeparator = () => (
  <div className="-mx-1 my-1 h-px bg-white/10" />
);