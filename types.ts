import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ComponentShowcaseItem {
  name: string;
  description: string;
  icon: LucideIcon;
  colSpan?: string;
}

export type Theme = 'dark' | 'light';

export interface DocSection {
  title: string;
  items: { label: string; href: string }[];
}
