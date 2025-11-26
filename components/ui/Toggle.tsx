
import React from "react";

interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className = "", pressed, onPressedChange, variant = "default", size = "md", children, ...props }, ref) => {
    const [isPressed, setIsPressed] = React.useState(pressed || false);
    
    // Sync with controlled prop
    React.useEffect(() => {
        if (pressed !== undefined) {
            setIsPressed(pressed);
        }
    }, [pressed]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newValue = !isPressed;
        if (pressed === undefined) {
            setIsPressed(newValue);
        }
        if (onPressedChange) {
            onPressedChange(newValue);
        }
        if (props.onClick) props.onClick(e);
    }

    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-white/20 data-[state=on]:text-white";
    
    const variants = {
        default: "bg-transparent",
        outline: "border border-white/10 bg-transparent hover:bg-white/10 hover:text-white"
    };

    const sizes = {
        sm: "h-8 px-2",
        md: "h-9 px-3",
        lg: "h-10 px-3"
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={isPressed}
        data-state={isPressed ? "on" : "off"}
        onClick={handleClick}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Toggle.displayName = "Toggle";
