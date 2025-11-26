
import React from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "./DropdownMenu";

export const Menubar = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => {
  return (
    <div className={`flex h-10 items-center space-x-1 rounded-md border border-white/10 bg-[#0c0414] p-1 ${className}`}>
      {children}
    </div>
  );
};

export const MenubarMenu = ({ children }: { children?: React.ReactNode }) => {
  return <DropdownMenu>{children}</DropdownMenu>;
};

export const MenubarTrigger = ({ children }: { children?: React.ReactNode }) => {
  return (
    <DropdownMenuTrigger>
        <div className="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium text-gray-300 outline-none hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white">
            {children}
        </div>
    </DropdownMenuTrigger>
  );
};

export const MenubarContent = ({ children }: { children?: React.ReactNode }) => {
  return <DropdownMenuContent>{children}</DropdownMenuContent>;
};

export const MenubarItem = DropdownMenuItem;
export const MenubarSeparator = DropdownMenuSeparator;
