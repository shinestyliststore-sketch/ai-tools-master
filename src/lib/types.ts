import type { LucideIcon } from "lucide-react";

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  imageId: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  link: string;
  category: string;
  imageId: string;
  affiliateLink?: string;
  isSponsored?: boolean;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  link: string;
  imageId: string;
}
