
import React from "react";

interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  value: number[];
  max?: number;
  min?: number;
  step?: number;
  onValueChange?: (value: number[]) => void;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className = "", min = 0, max = 100, step = 1, value, onValueChange, ...props }, ref) => {
    const val = value[0] || 0;
    const percentage = ((val - min) / (max - min)) * 100;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       if (onValueChange) {
           onValueChange([parseFloat(e.target.value)]);
       }
    }

    return (
      <div className={`relative flex w-full touch-none select-none items-center ${className}`}>
        {/* Track Background */}
        <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-white/20">
             {/* Track Active */}
             <div 
                className="absolute h-full bg-purple-600 transition-all" 
                style={{ width: `${percentage}%` }}
             />
        </div>
        
        {/* Native Input invisible on top for accessibility and interaction */}
        <input 
            type="range"
            ref={ref}
            min={min}
            max={max}
            step={step}
            value={val}
            onChange={handleChange}
            className="absolute w-full h-full opacity-0 cursor-pointer z-20"
            {...props}
        />

        {/* Thumb Visual */}
        <div 
            className="absolute h-5 w-5 rounded-full border-2 border-purple-600 bg-[#0c0414] ring-offset-[#0c0414] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-purple-600/20 pointer-events-none z-10"
            style={{ left: `calc(${percentage}% - 10px)` }}
        />
      </div>
    );
  }
);
Slider.displayName = "Slider";
