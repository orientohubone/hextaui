
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContextMenuProps {
  children?: React.ReactNode;
}

interface ContextMenuTriggerProps {
  children?: React.ReactNode;
}

interface ContextMenuContentProps {
  children?: React.ReactNode;
}

const ContextMenuContext = React.createContext<{
  visible: boolean;
  position: { x: number; y: number };
  openMenu: (e: React.MouseEvent) => void;
  closeMenu: () => void;
} | null>(null);

export const ContextMenu = ({ children }: ContextMenuProps) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setVisible(false);
      }
    };
    if (visible) window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [visible]);

  const openMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.pageX, y: e.pageY });
    setVisible(true);
  };

  const closeMenu = () => setVisible(false);

  return (
    <ContextMenuContext.Provider value={{ visible, position, openMenu, closeMenu }}>
      <div ref={menuRef}>{children}</div>
    </ContextMenuContext.Provider>
  );
};

export const ContextMenuTrigger = ({ children }: ContextMenuTriggerProps) => {
  const context = React.useContext(ContextMenuContext);
  if (!context) throw new Error("Trigger must be used within ContextMenu");

  return (
    <div onContextMenu={context.openMenu}>
      {children}
    </div>
  );
};

export const ContextMenuContent = ({ children }: ContextMenuContentProps) => {
  const context = React.useContext(ContextMenuContext);
  if (!context) throw new Error("Content must be used within ContextMenu");

  return (
    <AnimatePresence>
      {context.visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          style={{ top: context.position.y, left: context.position.x }}
          className="fixed z-[9999] min-w-[8rem] overflow-hidden rounded-md border border-white/10 bg-[#130d1d] p-1 shadow-md animate-in fade-in-80"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ContextMenuItem = ({ children, onClick, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    const context = React.useContext(ContextMenuContext);
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (onClick) onClick(e);
        context?.closeMenu();
    }
  return (
    <div
      onClick={handleClick}
      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm text-gray-200 outline-none focus:bg-white/10 hover:bg-purple-500/20 hover:text-white"
      {...props}
    >
      {children}
    </div>
  );
};
