
import React from "react";
import { User } from "lucide-react";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const Avatar = ({ className = "", src, alt, fallback, size = "md", ...props }: AvatarProps) => {
  const [hasError, setHasError] = React.useState(false);

  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-base",
    xl: "h-20 w-20 text-lg",
  };

  return (
    <div
      className={`relative flex shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5 ${sizes[size]} ${className}`}
      {...props}
    >
      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className="aspect-square h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white/10 text-gray-400 font-medium uppercase">
          {fallback ? fallback : <User className="h-[50%] w-[50%]" />}
        </div>
      )}
    </div>
  );
};
