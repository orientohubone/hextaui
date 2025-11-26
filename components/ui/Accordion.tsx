
import React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
  children?: React.ReactNode;
  className?: string;
}

interface AccordionItemProps {
  value: string;
  children?: React.ReactNode;
  className?: string;
}

interface AccordionTriggerProps {
  children?: React.ReactNode;
  onClick?: () => void;
  isOpen?: boolean;
}

interface AccordionContentProps {
  children?: React.ReactNode;
  isOpen?: boolean;
}

// Context to manage open state
const AccordionContext = React.createContext<{
  openItem: string | null;
  setOpenItem: (value: string | null) => void;
} | null>(null);

export const Accordion = ({ children, className = "" }: AccordionProps) => {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className={`space-y-2 ${className}`}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ value, children, className = "" }: AccordionItemProps) => {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionItem must be used within Accordion");

  const isOpen = context.openItem === value;

  return (
    <div className={`border-b border-white/10 ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as any, { 
            isOpen, 
            onClick: () => context.setOpenItem(isOpen ? null : value) 
          });
        }
        return child;
      })}
    </div>
  );
};

export const AccordionTrigger = ({ children, onClick, isOpen }: AccordionTriggerProps) => (
  <button
    onClick={onClick}
    className="flex w-full items-center justify-between py-4 font-medium transition-all hover:text-purple-400 text-left text-sm"
  >
    {children}
    <ChevronDown
      className={`h-4 w-4 shrink-0 transition-transform duration-200 text-gray-400 ${
        isOpen ? "rotate-180" : ""
      }`}
    />
  </button>
);

export const AccordionContent = ({ children, isOpen }: AccordionContentProps) => (
  <AnimatePresence initial={false}>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pb-4 pt-0 text-sm text-gray-400">{children}</div>
      </motion.div>
    )}
  </AnimatePresence>
);
