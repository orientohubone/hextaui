
import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  weight?: "light" | "regular" | "bold";
}

// Helper para gerenciar espessura do traço
const getStrokeWidth = (weight: string = "regular") => {
  switch (weight) {
    case "light": return 1;
    case "bold": return 2;
    default: return 1.5;
  }
};

// --- BRAND ICONS ---

export const AxionAtom = ({ size = 24, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M20.2 20.2c2.4-2.4 2.4-6.3 0-8.7L12 2.3 3.8 11.5c-2.4 2.4-2.4 6.3 0 8.7" opacity="0.5" />
    <path d="M3.8 3.8c-2.4 2.4-2.4 6.3 0 8.7L12 21.7l8.2-9.2c2.4-2.4 2.4-6.3 0-8.7" opacity="0.5" />
    <path d="M2 12h20" className="opacity-30" />
  </svg>
);

export const AxionHex = ({ size = 24, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 2L2 8v10l10 6 10-6V8L12 2z" />
    <path d="M12 22V12" className="opacity-50" />
    <path d="M2 8l10 4 10-4" className="opacity-50" />
    <circle cx="12" cy="12" r="3" className="fill-current opacity-20" />
  </svg>
);

export const AxionCircuit = ({ size = 24, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="2" y="2" width="8" height="8" rx="2" />
    <rect x="14" y="14" width="8" height="8" rx="2" />
    <path d="M6 10v4a2 2 0 0 0 2 2h4" className="opacity-60" />
    <path d="M16 14v-4a2 2 0 0 0-2-2h-4" className="opacity-60" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const AxionPulse = ({ size = 24, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    <path d="M12 12v.01" className="stroke-[4px] opacity-50" />
  </svg>
);

export const AxionShield = ({ size = 24, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M8 11h8" className="opacity-50" />
    <path d="M12 7v8" className="opacity-50" />
  </svg>
);

export const AxionSpark = ({ size = 24, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" className="opacity-30" />
  </svg>
);

// --- NAVIGATION & INTERFACE ---

export const AxSidebar = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="3" x2="9" y2="21" className="group-hover:translate-x-1 transition-transform" />
    <circle cx="14" cy="12" r="1" className="opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" stroke="none" />
  </svg>
);

export const AxGrid = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect x="3" y="3" width="7" height="7" className="group-hover:scale-90 origin-center transition-transform" />
    <rect x="14" y="3" width="7" height="7" className="group-hover:scale-90 origin-center transition-transform delay-75" />
    <rect x="14" y="14" width="7" height="7" className="group-hover:scale-90 origin-center transition-transform delay-150" />
    <rect x="3" y="14" width="7" height="7" className="group-hover:scale-90 origin-center transition-transform delay-100" />
  </svg>
);

export const AxList = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <line x1="8" y1="6" x2="21" y2="6" className="group-hover:translate-x-1 transition-transform" />
    <line x1="8" y1="12" x2="21" y2="12" className="group-hover:translate-x-1 transition-transform delay-75" />
    <line x1="8" y1="18" x2="21" y2="18" className="group-hover:translate-x-1 transition-transform delay-150" />
    <circle cx="3.5" cy="6" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="3.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="3.5" cy="18" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

export const AxExternal = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    <line x1="10" y1="14" x2="21" y2="3" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
  </svg>
);

export const AxRefresh = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M21.5 2v6h-6" className="group-hover:translate-y-[-2px] transition-transform" />
    <path d="M2.5 22v-6h6" className="group-hover:translate-y-[2px] transition-transform" />
    <path d="M21.5 12.5a9 9 0 0 1-15.07 6.5L2.5 16" />
    <path d="M2.5 11.5a9 9 0 0 1 15.07-6.5L21.5 8" />
  </svg>
);

export const AxLock = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" className="group-hover:stroke-purple-400 transition-colors" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" className="group-hover:translate-y-1 transition-transform" />
    <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const AxLogout = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" className="group-hover:translate-x-1 transition-transform" />
    <line x1="21" y1="12" x2="9" y2="12" className="group-hover:translate-x-1 transition-transform" />
  </svg>
);

export const AxFilter = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" className="group-hover:fill-current group-hover:text-purple-500/20 transition-colors" />
  </svg>
);

export const AxSort = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="m7 15 5 5 5-5" className="group-hover:translate-y-1 transition-transform" />
    <path d="m7 9 5-5 5 5" className="group-hover:-translate-y-1 transition-transform" />
  </svg>
);

export const AxMoreHorizontal = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <circle cx="12" cy="12" r="1" className="group-hover:scale-125 transition-transform" />
    <circle cx="19" cy="12" r="1" className="group-hover:scale-125 transition-transform delay-75" />
    <circle cx="5" cy="12" r="1" className="group-hover:scale-125 transition-transform delay-150" />
  </svg>
);

export const AxMoreVertical = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <circle cx="12" cy="12" r="1" className="group-hover:scale-125 transition-transform" />
    <circle cx="12" cy="5" r="1" className="group-hover:scale-125 transition-transform delay-75" />
    <circle cx="12" cy="19" r="1" className="group-hover:scale-125 transition-transform delay-150" />
  </svg>
);

export const AxMaximize = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M15 3h6v6" className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
    <path d="M9 21H3v-6" className="group-hover:translate-y-0.5 group-hover:-translate-x-0.5 transition-transform" />
    <path d="M21 3l-7 7" />
    <path d="M3 21l7-7" />
  </svg>
);

export const AxMinimize = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M4 14h6v6" className="group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-transform" />
    <path d="M20 10h-6V4" className="group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
    <path d="M14 10l7-7" />
    <path d="M3 21l6.6-6.6" />
  </svg>
);

export const AxPin = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M12 17v5" />
    <path d="M9 10.7 7 8a2.4 2.4 0 0 1 0-3.1l.2-.2a2.4 2.4 0 0 1 3.1 0l2.7 2" />
    <path d="M17 14.3 12 17" />
    <path d="M12 17 9.3 12" />
    <circle cx="16" cy="9" r="3" className="group-hover:fill-current group-hover:text-red-500/20 transition-colors" />
  </svg>
);

export const AxLogin = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" className="group-hover:translate-x-1 transition-transform" />
    <line x1="15" y1="12" x2="3" y2="12" className="group-hover:translate-x-1 transition-transform" />
  </svg>
);

export const AxBookmark = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" className="group-hover:fill-current group-hover:text-purple-500/10 transition-colors" />
  </svg>
);

// --- COMMUNICATION & SOCIAL ---

export const AxMail = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" className="group-hover:stroke-blue-400 transition-colors" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" className="group-hover:translate-y-[2px] transition-transform" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </svg>
);

export const AxMessage = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" className="group-hover:-translate-y-1 transition-transform" />
    <circle cx="12" cy="11" r="1" fill="currentColor" stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </svg>
);

export const AxSend = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <line x1="22" y1="2" x2="11" y2="13" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" className="group-hover:stroke-purple-400 transition-colors" />
  </svg>
);

export const AxBell = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" className="group-hover:rotate-12 origin-top transition-transform" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </svg>
);

export const AxShare = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" className="group-hover:stroke-purple-400 transition-colors" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" className="group-hover:stroke-purple-400 transition-colors" />
  </svg>
);

export const AxLink = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export const AxThumbsUp = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M7 10v12" />
    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" className="group-hover:fill-current group-hover:text-blue-500/20 transition-colors" />
  </svg>
);

export const AxPhone = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" className="group-hover:rotate-12 origin-bottom-left transition-transform" />
  </svg>
);

export const AxVideo = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="m22 8-6 4 6 4V8Z" className="group-hover:translate-x-[-2px] transition-transform" />
    <rect x="2" y="6" width="14" height="12" rx="2" ry="2" />
  </svg>
);

export const AxCamera = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" className="group-hover:fill-current group-hover:text-purple-500/20 transition-colors" />
  </svg>
);

export const AxMic = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" className="group-hover:-translate-y-1 transition-transform" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

// --- FILES & DOCUMENTS ---

export const AxFile = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" className="group-hover:translate-x-[-2px] group-hover:translate-y-[2px] transition-transform" />
    <line x1="16" y1="13" x2="8" y2="13" className="opacity-0 group-hover:opacity-50 transition-opacity" />
    <line x1="16" y1="17" x2="8" y2="17" className="opacity-0 group-hover:opacity-50 transition-opacity" />
  </svg>
);

export const AxFileText = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

export const AxFilePdf = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M9 17h1" className="stroke-red-400" />
    <path d="M12 13v4" className="stroke-red-400" />
  </svg>
);

export const AxFolder = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" className="group-hover:stroke-yellow-400 transition-colors" />
    <path d="M2 10h20" className="opacity-30" />
  </svg>
);

export const AxFolderOpen = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" className="group-hover:stroke-yellow-400 transition-colors" />
  </svg>
);

export const AxArchive = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect width="20" height="5" x="2" y="3" rx="1" />
    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
    <path d="M10 12h4" className="group-hover:scale-x-125 origin-center transition-transform" />
  </svg>
);

export const AxCloud = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M17.5 19c0-1.7-1.3-3-3-3h-1.7c-1.3 0-2.4-.8-2.8-2-.7-2 1.3-4 3.3-3.7 1.6.2 2.8 1.5 2.8 3.2" className="opacity-50" />
    <path d="M17.5 19h-13c-2.5 0-4.5-2-4.5-4.5S4.5 10 7 10c.3 0 .6 0 .9.1C9 5.5 14 5 16 9c4 0 6 3 6 7 0 2.5-2 4.5-4.5 4.5Z" className="group-hover:scale-105 origin-center transition-transform" />
  </svg>
);

export const AxImage = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" className="group-hover:fill-current group-hover:text-yellow-500/20 transition-colors" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);

export const AxFileCode = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="m10 13-2 2 2 2" className="group-hover:-translate-x-0.5 transition-transform" />
    <path d="m14 17 2-2-2-2" className="group-hover:translate-x-0.5 transition-transform" />
  </svg>
);

// --- E-COMMERCE ---

export const AxCart = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    <circle cx="12" cy="11" r="1" fill="currentColor" stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </svg>
);

export const AxShoppingBag = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" className="group-hover:scale-y-110 origin-top transition-transform" />
  </svg>
);

export const AxTag = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" className="group-hover:fill-current group-hover:text-green-500/10 transition-colors" />
    <path d="M7 7h.01" strokeWidth="3" className="text-white" />
  </svg>
);

export const AxGift = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M12 8v13" />
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" className="group-hover:-translate-y-1 transition-transform" />
  </svg>
);

export const AxCreditCard = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect x="2" y="5" width="20" height="14" rx="2" className="group-hover:stroke-green-400 transition-colors" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <circle cx="6" cy="15" r="1" fill="currentColor" stroke="none" className="opacity-50 group-hover:opacity-100" />
    <circle cx="10" cy="15" r="1" fill="currentColor" stroke="none" className="opacity-50 group-hover:opacity-100" />
  </svg>
);

export const AxDollar = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" className="group-hover:stroke-green-400 transition-colors" />
  </svg>
);

export const AxTrendingUp = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" className="group-hover:stroke-green-400 transition-colors" />
    <polyline points="16 7 22 7 22 13" className="group-hover:stroke-green-400 transition-colors" />
  </svg>
);

export const AxBarChart = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <line x1="12" x2="12" y1="20" y2="10" className="group-hover:stroke-purple-400 transition-colors" />
    <line x1="18" x2="18" y1="20" y2="4" className="group-hover:stroke-purple-400 transition-colors delay-75" />
    <line x1="6" x2="6" y1="20" y2="16" className="group-hover:stroke-purple-400 transition-colors delay-150" />
  </svg>
);

export const AxPieChart = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" className="group-hover:fill-purple-500/20 group-hover:stroke-purple-400 transition-all" />
  </svg>
);

export const AxPackage = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="m16.5 9.4-9-5.19" />
    <path d="m21 16-9 5.19-9-5.19V5.81l9-5.19 9 5.19Z" />
    <path d="M3.27 6.96 12 12.01l8.73-5.05" />
    <path d="M12 22.08V12" className="group-hover:translate-y-1 transition-transform" />
  </svg>
);

// --- SYSTEM & CONFIG ---

export const AxWifi = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M5 12.55a11 11 0 0 1 14.08 0" className="group-hover:opacity-100 opacity-40 transition-opacity delay-75" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" className="group-hover:opacity-100 opacity-30 transition-opacity" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" className="group-hover:opacity-100 opacity-60 transition-opacity delay-150" />
    <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="2.5" className="group-hover:text-purple-400" />
  </svg>
);

export const AxBattery = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect x="1" y="6" width="18" height="12" rx="2" />
    <path d="M23 13v-2" strokeWidth="2" />
    <path d="M5 10v4" className="group-hover:stroke-green-400 transition-colors" />
    <path d="M9 10v4" className="group-hover:stroke-green-400 transition-colors delay-75" />
    <path d="M13 10v4" className="group-hover:stroke-green-400 transition-colors delay-150" />
  </svg>
);

export const AxBluetooth = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="m7 7 10 10-5 5V2l5 5L7 17" className="group-hover:stroke-blue-400 transition-colors" />
  </svg>
);

export const AxVolume = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" className="group-hover:opacity-100 opacity-50 transition-opacity" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" className="group-hover:opacity-100 opacity-50 transition-opacity delay-75" />
  </svg>
);

export const AxBrightness = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <circle cx="12" cy="12" r="4" className="group-hover:fill-current group-hover:text-yellow-500/20 transition-colors" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

export const AxMonitor = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none" className="opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all" />
  </svg>
);

export const AxSmartphone = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" strokeWidth="2" />
  </svg>
);

export const AxKeyboard = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect width="20" height="12" x="2" y="4" rx="2" ry="2" />
    <path d="M6 8h.001" strokeWidth="2" className="group-hover:text-purple-400 transition-colors" />
    <path d="M10 8h.001" strokeWidth="2" className="group-hover:text-purple-400 transition-colors delay-75" />
    <path d="M14 8h.001" strokeWidth="2" className="group-hover:text-purple-400 transition-colors delay-150" />
    <path d="M18 8h.001" strokeWidth="2" className="group-hover:text-purple-400 transition-colors delay-200" />
    <path d="M8 12h8" />
  </svg>
);

export const AxDatabase = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M21 15c0 1.66-4 3-9 3s-9-1.34-9-3" className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </svg>
);

export const AxPower = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
    <line x1="12" y1="2" x2="12" y2="12" className="group-hover:stroke-red-400 transition-colors" />
  </svg>
);

// --- TIME & CALENDAR ---

export const AxCalendar = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <rect x="8" y="14" width="2" height="2" fill="currentColor" stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </svg>
);

export const AxClock = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" className="group-hover:rotate-90 origin-center transition-transform duration-500" />
  </svg>
);

export const AxTimer = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <line x1="10" y1="2" x2="14" y2="2" />
    <line x1="12" y1="14" x2="15" y2="11" />
    <circle cx="12" cy="14" r="8" />
  </svg>
);

export const AxHistory = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l4 2" className="group-hover:stroke-purple-400 transition-colors" />
  </svg>
);

export const AxMoon = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" className="group-hover:fill-current group-hover:text-blue-500/20 transition-colors" />
  </svg>
);

export const AxSun = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <circle cx="12" cy="12" r="4" className="group-hover:fill-current group-hover:text-yellow-500/20 transition-colors" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

// --- MEDIA & LOCATION ---

export const AxPlay = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <polygon points="5 3 19 12 5 21 5 3" className="group-hover:fill-current group-hover:stroke-purple-400 transition-colors" />
  </svg>
);

export const AxPause = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect x="6" y="4" width="4" height="16" className="group-hover:fill-current transition-colors" />
    <rect x="14" y="4" width="4" height="16" className="group-hover:fill-current transition-colors" />
  </svg>
);

export const AxStop = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect width="14" height="14" x="5" y="5" rx="1" className="group-hover:fill-current transition-colors" />
  </svg>
);

export const AxSkipForward = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <polygon points="5 4 15 12 5 20 5 4" className="group-hover:translate-x-1 transition-transform" />
    <line x1="19" y1="5" x2="19" y2="19" />
  </svg>
);

export const AxSkipBack = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <polygon points="19 20 9 12 19 4 19 20" className="group-hover:-translate-x-1 transition-transform" />
    <line x1="5" y1="19" x2="5" y2="5" />
  </svg>
);

export const AxMusic = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" className="group-hover:fill-current group-hover:text-purple-500/20 transition-colors" />
    <circle cx="18" cy="16" r="3" className="group-hover:fill-current group-hover:text-purple-500/20 transition-colors" />
  </svg>
);

export const AxHeadphones = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" className="group-hover:fill-current group-hover:text-purple-500/20 transition-colors" />
  </svg>
);

export const AxMapPin = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" className="group-hover:-translate-y-1 transition-transform" />
    <circle cx="12" cy="10" r="3" className="group-hover:fill-current group-hover:text-purple-400 transition-colors" />
  </svg>
);

export const AxGlobe = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" className="group-hover:rotate-45 origin-center transition-transform duration-700" />
  </svg>
);

// --- EDITING & FORMATTING ---

export const AxEdit = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
  </svg>
);

export const AxSave = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" className="group-hover:stroke-green-400 transition-colors" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);

export const AxUndo = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M3 7v6h6" className="group-hover:-translate-x-1 transition-transform" />
    <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
  </svg>
);

export const AxRedo = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M21 7v6h-6" className="group-hover:translate-x-1 transition-transform" />
    <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
  </svg>
);

export const AxBold = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
    <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" className="group-hover:fill-white/10 transition-colors" />
  </svg>
);

export const AxItalic = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <line x1="19" y1="4" x2="10" y2="4" />
    <line x1="14" y1="20" x2="5" y2="20" />
    <line x1="15" y1="4" x2="9" y2="20" className="group-hover:rotate-[15deg] origin-center transition-transform" />
  </svg>
);

export const AxQuote = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" className="group-hover:translate-y-[-2px] transition-transform" />
  </svg>
);

// --- PEOPLE & ORGANIZATION ---

export const AxUser = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" className="group-hover:translate-y-[-2px] transition-transform" />
    <circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </svg>
);

export const AxUsers = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" className="group-hover:translate-x-1 transition-transform" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" className="group-hover:translate-x-1 transition-transform" />
  </svg>
);

export const AxUserPlus = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" className="group-hover:stroke-green-400 transition-colors" />
    <line x1="23" y1="11" x2="17" y2="11" className="group-hover:stroke-green-400 transition-colors" />
  </svg>
);

export const AxUserMinus = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="23" y1="11" x2="17" y2="11" className="group-hover:stroke-red-400 transition-colors" />
  </svg>
);

export const AxUserCheck = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <polyline points="17 11 19 13 23 9" className="group-hover:stroke-green-400 transition-colors" />
  </svg>
);

export const AxTeam = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const AxCrown = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" className="group-hover:fill-yellow-500/20 group-hover:stroke-yellow-500 transition-colors" />
  </svg>
);

export const AxAward = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <circle cx="12" cy="8" r="7" className="group-hover:fill-purple-500/20 transition-colors" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

export const AxBadgeIcon = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" className="group-hover:rotate-45 origin-center transition-transform" />
  </svg>
);

export const AxHeart = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" className="group-hover:fill-pink-500/20 group-hover:stroke-pink-500 transition-all duration-300" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" className="opacity-0 group-hover:opacity-100 group-hover:fill-pink-500 transition-opacity delay-100" />
  </svg>
);

export const AxStar = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" className="group-hover:fill-yellow-500/20 group-hover:stroke-yellow-500 transition-all duration-300 group-hover:rotate-12 origin-center" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" className="opacity-0 group-hover:opacity-100 group-hover:fill-yellow-500 transition-opacity" />
  </svg>
);

export const AxEye = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" className="group-hover:scale-y-75 origin-center transition-transform" />
    <circle cx="12" cy="12" r="3" className="group-hover:scale-75 origin-center transition-transform" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const AxDownload = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" className="group-hover:translate-y-1 transition-transform" />
    <line x1="12" y1="15" x2="12" y2="3" className="group-hover:translate-y-1 transition-transform" />
    <circle cx="12" cy="3" r="1.5" fill="currentColor" stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </svg>
);

export const AxCopy = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    <circle cx="15.5" cy="15.5" r="1.5" fill="currentColor" stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </svg>
);

// --- EXISTING CORE ICONS (KEPT FOR COMPATIBILITY) ---

export const AxMenu = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <line x1="3" y1="12" x2="21" y2="12" className="group-hover:stroke-purple-400 transition-colors" />
    <line x1="3" y1="6" x2="15" y2="6" />
    <circle cx="19" cy="6" r="1.5" fill="currentColor" stroke="none" className="group-hover:scale-125 transition-transform" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const AxClose = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M18 6L6 18" className="group-hover:rotate-90 origin-center transition-transform duration-300" />
    <path d="M6 6l12 12" className="group-hover:-rotate-90 origin-center transition-transform duration-300" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </svg>
);

export const AxChevronDown = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M6 9l6 6 6-6" className="group-hover:translate-y-1 transition-transform" />
    <circle cx="12" cy="9" r="1" fill="currentColor" stroke="none" className="opacity-50 group-hover:opacity-100 transition-opacity" />
  </svg>
);

export const AxArrowRight = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M5 12h14" className="group-hover:translate-x-1 transition-transform" />
    <path d="M12 5l7 7-7 7" className="group-hover:translate-x-1 transition-transform delay-75" />
    <circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none" className="group-hover:scale-0 transition-transform" />
  </svg>
);

export const AxHome = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" className="group-hover:stroke-purple-400 transition-colors" />
    <polyline points="9 22 9 12 15 12 15 22" />
    <circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none" className="group-hover:translate-y-1 transition-transform" />
  </svg>
);

export const AxSearch = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <circle cx="11" cy="11" r="8" className="group-hover:scale-110 origin-center transition-transform" />
    <path d="M21 21l-4.35-4.35" />
    <circle cx="16.65" cy="16.65" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

export const AxPlus = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M5 12h14" className="group-hover:rotate-90 origin-center transition-transform duration-300" />
    <path d="M12 5v14" className="group-hover:rotate-90 origin-center transition-transform duration-300" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity delay-200" />
  </svg>
);

export const AxTrash = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" className="group-hover:-translate-y-1 transition-transform" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
    <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" className="opacity-30 group-hover:opacity-100 transition-opacity" />
  </svg>
);

export const AxCheck = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M20 6L9 17l-5-5" className="group-hover:stroke-green-400 transition-colors" />
    <circle cx="20" cy="6" r="1.5" fill="currentColor" stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </svg>
);

export const AxAlert = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <circle cx="12" cy="12" r="10" className="group-hover:stroke-yellow-400 transition-colors" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="3" className="group-hover:text-yellow-400" />
  </svg>
);

export const AxInfo = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <circle cx="12" cy="12" r="10" className="group-hover:stroke-blue-400 transition-colors" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" strokeWidth="3" className="group-hover:text-blue-400" />
  </svg>
);

export const AxError = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <circle cx="12" cy="12" r="10" className="group-hover:stroke-red-400 transition-colors" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" className="opacity-0 group-hover:opacity-100 group-hover:fill-red-400 transition-opacity" />
  </svg>
);

export const AxLoader = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" className="group-hover:animate-spin origin-center" />
    <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" className="opacity-20 group-hover:opacity-50 transition-opacity" />
  </svg>
);

export const AxSettings = ({ size = 24, weight, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={getStrokeWidth(weight)} strokeLinecap="round" strokeLinejoin="round" className={`group ${className}`} {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" className="group-hover:rotate-45 origin-center transition-transform duration-700" />
    <circle cx="12" cy="12" r="3" className="group-hover:stroke-purple-400 transition-colors" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);
