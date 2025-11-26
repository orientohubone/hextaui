
import React from "react";
import { Check } from "lucide-react";
import { Button } from "./Button";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

export const PricingCard = ({
  title,
  price,
  period = "/mês",
  features,
  isPopular = false,
  ctaText = "Começar Agora",
  onCtaClick,
  className = "",
}: PricingCardProps) => {
  return (
    <div
      className={`relative p-8 rounded-2xl border flex flex-col ${
        isPopular
          ? "border-purple-500/50 bg-purple-900/10"
          : "border-white/10 bg-[#130d1d]"
      } ${className}`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
          POPULAR
        </div>
      )}
      
      <h3 className={`text-lg font-semibold ${isPopular ? "text-white" : "text-gray-300"}`}>
        {title}
      </h3>
      
      <div className="mt-4 mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-gray-500 text-sm ml-1">{period}</span>
      </div>
      
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
            <Check className={`w-5 h-5 shrink-0 ${isPopular ? "text-purple-400" : "text-gray-500"}`} />
            <span className="leading-tight">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button
        onClick={onCtaClick}
        variant={isPopular ? "glow" : "outline"}
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
};
