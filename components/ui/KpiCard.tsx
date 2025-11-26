
import React from "react";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

interface KpiCardProps {
  label: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

export const KpiCard = ({ label, value, change, trend = "neutral", className = "" }: KpiCardProps) => {
  return (
    <div className={`p-6 rounded-xl border border-white/10 bg-[#130d1d] shadow-sm ${className}`}>
      <div className="flex justify-between items-start mb-4">
        <span className="text-gray-400 text-sm font-medium">{label}</span>
        {change && (
          <span
            className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${
              trend === "up"
                ? "text-green-400 bg-green-400/10"
                : trend === "down"
                ? "text-red-400 bg-red-400/10"
                : "text-gray-400 bg-gray-400/10"
            }`}
          >
            {change}
            {trend === "up" && <ArrowUpRight className="w-3 h-3 ml-1" />}
            {trend === "down" && <ArrowDownRight className="w-3 h-3 ml-1" />}
            {trend === "neutral" && <Minus className="w-3 h-3 ml-1" />}
          </span>
        )}
      </div>
      <div className="text-3xl font-bold text-white">{value}</div>
    </div>
  );
};
