
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const NavigationMenu = ({ children }: { children?: React.ReactNode }) => {
  return (
    <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center">
      <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
        {children}
      </ul>
    </nav>
  );
};

export const NavigationMenuItem = ({ title, children }: { title: string, children?: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <li 
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
    >
      <button className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10/50 data-[state=open]:bg-white/10/50 text-gray-200">
        {title}
        {children && (
            <ChevronDown
            className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180`}
            aria-hidden="true"
            />
        )}
      </button>

      <AnimatePresence>
        {open && children && (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-full w-[400px] md:w-[500px] lg:w-[600px] bg-[#130d1d] border border-white/10 rounded-md shadow-2xl p-4 grid gap-3 overflow-hidden"
            >
                {children}
            </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export const NavigationMenuLink = ({ href, title, children }: { href: string, title: string, children?: React.ReactNode }) => {
    return (
        <a 
            href={href} 
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white"
        >
            <div className="text-sm font-medium leading-none text-white">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                {children}
            </p>
        </a>
    )
}
