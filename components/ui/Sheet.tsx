
import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
  side?: "left" | "right";
}

const SheetContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

export const Sheet = ({ open: controlledOpen, onOpenChange, children }: SheetProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  
  const setOpen = React.useCallback((newOpen: boolean) => {
      if (onOpenChange) onOpenChange(newOpen);
      if (!isControlled) setUncontrolledOpen(newOpen);
  }, [isControlled, onOpenChange]);

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
};

export const SheetTrigger = ({ children, asChild, className = "" }: { children?: React.ReactNode, asChild?: boolean, className?: string }) => {
    const context = React.useContext(SheetContext);
    if (!context) throw new Error("SheetTrigger must be used within Sheet");
    
    return (
        <div onClick={() => context.setOpen(true)} className={`inline-block cursor-pointer ${className}`}>
            {children}
        </div>
    )
}

interface SheetContentProps {
    children?: React.ReactNode;
    side?: "left" | "right";
    className?: string;
}

export const SheetContent = ({ children, side = "right", className = "" }: SheetContentProps) => {
  const context = React.useContext(SheetContext);
  if (!context) throw new Error("SheetContent must be used within Sheet");
  
  const variants = {
    left: { x: "-100%" },
    right: { x: "100%" },
  };

  return (
    <AnimatePresence>
      {context.open && (
        <div className="fixed inset-0 z-50 flex">
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => context.setOpen(false)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
             />
             <motion.div
                initial={variants[side]}
                animate={{ x: 0 }}
                exit={variants[side]}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className={`fixed z-50 gap-4 bg-[#0c0414] p-6 shadow-2xl border-white/10 ${
                    side === "right" ? "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm" : "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm"
                } ${className}`}
             >
                {children}
                <button
                    onClick={() => context.setOpen(false)}
                    className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-400 hover:text-white"
                >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </button>
             </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const SheetHeader = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex flex-col space-y-2 text-center sm:text-left ${className}`} {...props} />
);

export const SheetFooter = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`} {...props} />
);

export const SheetTitle = ({ className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={`text-lg font-semibold text-white ${className}`} {...props} />
);

export const SheetDescription = ({ className = "", ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`text-sm text-gray-400 ${className}`} {...props} />
);
