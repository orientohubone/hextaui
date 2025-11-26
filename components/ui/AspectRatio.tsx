
import React from "react";

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number;
  children?: React.ReactNode;
}

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className = "", ratio = 16 / 9, style, ...props }, ref) => (
    <div
      ref={ref}
      style={{ position: "relative", width: "100%", paddingBottom: `${100 / ratio}%`, ...style }}
      className={className}
      {...props}
    >
      <div className="absolute inset-0 [&>img]:object-cover [&>img]:h-full [&>img]:w-full">
        {props.children}
      </div>
    </div>
  )
);
AspectRatio.displayName = "AspectRatio";
