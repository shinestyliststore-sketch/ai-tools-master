"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search } from "lucide-react";
import SuggestToolDialog from "@/components/suggest-tool-dialog";

interface HeroSectionProps {
  onSearchChange: (query: string) => void;
}

export default function HeroSection({ onSearchChange }: HeroSectionProps) {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto text-center px-4">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Explore the Future with AI
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Discover the latest AI tools transforming creativity, business, and
          daily life. Your comprehensive guide to the world of artificial
          intelligence.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#tools" passHref>
            <Button size="lg" variant="default" className="text-lg py-7 px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore AI Tools
            </Button>
          </Link>
          <SuggestToolDialog />
        </div>
        <div className="relative mt-12 max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for an AI tool..."
            className="w-full rounded-full p-6 pl-12 text-lg bg-card border-2 border-border focus:ring-primary"
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search AI tools"
          />
        </div>
      </div>
    </section>
  );
}
