
import React, { useState } from "react";
import { Search } from "lucide-react";

interface CommandProps {
  children?: React.ReactNode;
  className?: string;
}

const CommandContext = React.createContext<{
  search: string;
  setSearch: (s: string) => void;
} | null>(null);

export const Command = ({ children, className = "" }: CommandProps) => {
  const [search, setSearch] = useState("");
  return (
    <CommandContext.Provider value={{ search, setSearch }}>
      <div className={`flex h-full w-full flex-col overflow-hidden rounded-md bg-[#130d1d] text-gray-200 border border-white/10 ${className}`}>
        {children}
      </div>
    </CommandContext.Provider>
  );
};

export const CommandInput = ({ placeholder = "Type a command..." }: { placeholder?: string }) => {
  const context = React.useContext(CommandContext);
  if (!context) throw new Error("CommandInput must be used within Command");

  return (
    <div className="flex items-center border-b border-white/10 px-3">
      <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <input
        className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder={placeholder}
        value={context.search}
        onChange={(e) => context.setSearch(e.target.value)}
      />
    </div>
  );
};

export const CommandList = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="max-h-[300px] overflow-y-auto overflow-x-hidden">
      {children}
    </div>
  );
};

export const CommandEmpty = ({ children }: { children?: React.ReactNode }) => {
    const context = React.useContext(CommandContext);
    // Simple mock logic: in a real implementation this would react to filtered items count
    if (!context) return null;
    return <div className="py-6 text-center text-sm text-gray-500">{children}</div>;
};

export const CommandGroup = ({ heading, children }: { heading: string, children?: React.ReactNode }) => {
  return (
    <div className="overflow-hidden p-1 text-gray-200">
      <div className="px-2 py-1.5 text-xs font-medium text-gray-500 uppercase tracking-wider">
        {heading}
      </div>
      {children}
    </div>
  );
};

export const CommandItem = ({ children, onSelect }: { children?: React.ReactNode, onSelect?: () => void }) => {
   const context = React.useContext(CommandContext);
   // In a real implementation, we would filter based on context.search here
   
  return (
    <div
      onClick={onSelect}
      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white hover:bg-white/5 hover:text-white"
    >
      {children}
    </div>
  );
};
