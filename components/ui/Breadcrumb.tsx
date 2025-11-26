
import React from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";

export const Breadcrumb = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />
);
Breadcrumb.displayName = "Breadcrumb";

export const BreadcrumbList = React.forwardRef<HTMLOListElement, React.OlHTMLAttributes<HTMLOListElement>>(
  ({ className = "", ...props }, ref) => (
    <ol ref={ref} className={`flex flex-wrap items-center gap-1.5 break-words text-sm text-gray-400 sm:gap-2.5 ${className}`} {...props} />
  )
);
BreadcrumbList.displayName = "BreadcrumbList";

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
  ({ className = "", ...props }, ref) => (
    <li ref={ref} className={`inline-flex items-center gap-1.5 ${className}`} {...props} />
  )
);
BreadcrumbItem.displayName = "BreadcrumbItem";

export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className = "", ...props }, ref) => (
    <a ref={ref} className={`transition-colors hover:text-white hover:underline ${className}`} {...props} />
  )
);
BreadcrumbLink.displayName = "BreadcrumbLink";

export const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className = "", ...props }, ref) => (
    <span ref={ref} role="link" aria-disabled="true" aria-current="page" className={`font-normal text-white ${className}`} {...props} />
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";

export const BreadcrumbSeparator = ({ children, className = "", ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
  <li role="presentation" aria-hidden="true" className={`[&>svg]:size-3.5 ${className}`} {...props}>
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export const BreadcrumbEllipsis = ({ className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span role="presentation" aria-hidden="true" className={`flex h-9 w-9 items-center justify-center ${className}`} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">Mais</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
