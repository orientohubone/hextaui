
import React from "react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  active?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const Timeline = ({ items, className = "" }: TimelineProps) => {
  return (
    <div className={`relative border-l border-white/10 pl-8 ml-4 ${className}`}>
      {items.map((item, i) => (
        <div key={i} className="relative mb-10 last:mb-0">
          <div
            className={`absolute -left-[39px] w-5 h-5 rounded-full border-4 border-[#0c0414] transition-colors ${
              item.active ? "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" : "bg-gray-700"
            }`}
          />
          <div className="text-xs font-mono text-purple-400 mb-1 opacity-80">
            {item.date}
          </div>
          <h3 className={`text-lg font-bold mb-2 ${item.active ? "text-white" : "text-gray-400"}`}>
            {item.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
