
import React from "react";
import { ChevronsUpDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CollapsibleProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

const CollapsibleContext = React.createContext<{
  isOpen: boolean;
  toggle: () => void;
} | null>(null);

export const Collapsible = ({ children, open: controlledOpen, onOpenChange, defaultOpen = false, className = "" }: CollapsibleProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  const toggle = () => {
    const newState = !isOpen;
    if (!isControlled) setUncontrolledOpen(newState);
    if (onOpenChange) onOpenChange(newState);
  };

  return (
    <CollapsibleContext.Provider value={{ isOpen, toggle }}>
      <div className={className}>{children}</div>
    </CollapsibleContext.Provider>
  );
};

export const CollapsibleTrigger = ({ children, className = "", asChild = false }: { children?: React.ReactNode, className?: string, asChild?: boolean }) => {
  const context = React.useContext(CollapsibleContext);
  if (!context) throw new Error("CollapsibleTrigger must be used within Collapsible");

  if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, { onClick: context.toggle });
  }

  return (
    <button onClick={context.toggle} className={className}>
      {children}
    </button>
  );
};

export const CollapsibleContent = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => {
  const context = React.useContext(CollapsibleContext);
  if (!context) throw new Error("CollapsibleContent must be used within Collapsible");

  return (
    <AnimatePresence>
      {context.isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className={`overflow-hidden ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
