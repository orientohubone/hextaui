
import React from "react";
import { Toggle } from "./Toggle";

interface ToggleGroupProps {
  type: "single" | "multiple";
  value?: string | string[];
  onValueChange?: (value: any) => void;
  children?: React.ReactNode;
  className?: string;
}

const ToggleGroupContext = React.createContext<{
  value: string | string[];
  onChange: (value: string) => void;
  type: "single" | "multiple";
} | null>(null);

export const ToggleGroup = ({ type, value = type === "multiple" ? [] : "", onValueChange, children, className = "" }: ToggleGroupProps) => {
  const [internalValue, setInternalValue] = React.useState<string | string[]>(value);

  React.useEffect(() => {
      setInternalValue(value);
  }, [value]);

  const handleChange = (itemValue: string) => {
    let newValue: string | string[];

    if (type === "single") {
        newValue = internalValue === itemValue ? "" : itemValue;
    } else {
        const arr = Array.isArray(internalValue) ? [...internalValue] : [];
        if (arr.includes(itemValue)) {
            newValue = arr.filter(i => i !== itemValue);
        } else {
            newValue = [...arr, itemValue];
        }
    }

    setInternalValue(newValue);
    if (onValueChange) onValueChange(newValue);
  };

  return (
    <ToggleGroupContext.Provider value={{ value: internalValue, onChange: handleChange, type }}>
      <div className={`flex items-center justify-center gap-1 ${className}`}>
        {children}
      </div>
    </ToggleGroupContext.Provider>
  );
};

export const ToggleGroupItem = ({ value, children, ...props }: React.ComponentProps<typeof Toggle> & { value: string }) => {
    const context = React.useContext(ToggleGroupContext);
    if (!context) throw new Error("ToggleGroupItem must be used within ToggleGroup");

    const isPressed = context.type === "single" 
        ? context.value === value 
        : (context.value as string[]).includes(value);

    return (
        <Toggle 
            pressed={isPressed} 
            onPressedChange={() => context.onChange(value)} 
            {...props}
        >
            {children}
        </Toggle>
    );
}
