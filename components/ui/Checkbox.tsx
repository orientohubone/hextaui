import React from "react";
import { Check } from "lucide-react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = "", label, id, ...props }, ref) => {
    const generatedId = id || Math.random().toString(36).substr(2, 9);

    return (
      <div className="flex items-center space-x-2">
        <div className="relative flex items-center">
            <input
            type="checkbox"
            id={generatedId}
            ref={ref}
            className="peer h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-sm border border-white/20 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-purple-600 checked:border-purple-600"
            {...props}
            />
            <Check className="pointer-events-none absolute top-0.5 left-0.5 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
        </div>
        {label && (
          <label
            htmlFor={generatedId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300 select-none cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";