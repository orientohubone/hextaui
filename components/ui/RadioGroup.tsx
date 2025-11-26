
import React from "react";
import { Circle } from "lucide-react";

const RadioGroupContext = React.createContext<{
  value: string;
  onChange: (value: string) => void;
} | null>(null);

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className = "", defaultValue, value: controlledValue, onValueChange, children, ...props }, ref) => {
    const [value, setValue] = React.useState(defaultValue || "");

    const handleChange = (newValue: string) => {
      setValue(newValue);
      if (onValueChange) onValueChange(newValue);
    };

    const currentValue = controlledValue !== undefined ? controlledValue : value;

    return (
      <RadioGroupContext.Provider value={{ value: currentValue, onChange: handleChange }}>
        <div className={`grid gap-2 ${className}`} ref={ref} {...props}>
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

interface RadioGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const RadioGroupItem = React.forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ className = "", value, ...props }, ref) => {
    const context = React.useContext(RadioGroupContext);
    if (!context) throw new Error("RadioGroupItem must be used within RadioGroup");

    const isChecked = context.value === value;

    return (
      <button
        ref={ref}
        role="radio"
        aria-checked={isChecked}
        onClick={() => context.onChange(value)}
        className={`aspect-square h-4 w-4 rounded-full border border-purple-500/50 text-purple-600 ring-offset-[#0c0414] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-white/5 ${
            isChecked ? "bg-purple-600 border-purple-600" : "bg-transparent"
        } ${className}`}
        {...props}
      >
        <div className="flex items-center justify-center">
          {isChecked && <Circle className="h-2.5 w-2.5 fill-current text-white" />}
        </div>
      </button>
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";
