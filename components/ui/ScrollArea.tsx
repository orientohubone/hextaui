
import React from "react";

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
    height?: string;
}

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className = "", children, height = "h-full", ...props }, ref) => (
    <div
      ref={ref}
      className={`relative overflow-hidden ${height} ${className} group`}
      {...props}
    >
      <div className="h-full w-full overflow-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent hover:scrollbar-thumb-white/20 pr-3">
        {children}
      </div>
    </div>
  )
);
ScrollArea.displayName = "ScrollArea";
