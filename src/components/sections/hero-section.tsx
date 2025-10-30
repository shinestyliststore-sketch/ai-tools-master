"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import SuggestToolDialog from "@/components/suggest-tool-dialog";

// This component is not used in the new design, but we keep it for reference.
// The new hero section is directly in `src/app/page.tsx`.
interface HeroSectionProps {
  onSearchChange: (query: string) => void;
}

export default function HeroSection({ onSearchChange }: HeroSectionProps) {
  return (
    <section className="relative w-full py-24 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Explore the Future with AI Tools Master
        </h2>
        <p className="mt-2.5 text-base text-gray-300 sm:text-lg">
          Discover the latest AI tools transforming creativity, business, and life.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-[#6a1b9a] text-white rounded-lg hover:bg-[#8e24aa] transition-colors">
            <Link href="#tools">Explore AI Tools</Link>
          </Button>
          <SuggestToolDialog />
        </div>
      </div>
    </section>
  );
}
