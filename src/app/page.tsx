"use client";

import { useState } from "react";
import ToolsSection from "@/components/sections/tools-section";
import ArticlesSection from "@/components/sections/articles-section";
import NewsletterSection from "@/components/sections/newsletter-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <section className="text-center mt-24">
        <h2 className="text-3xl font-bold">
          Explore the Future with AI Tools Master
        </h2>
        <p className="mt-2.5 text-lg text-muted-foreground">
          Discover the latest AI tools transforming creativity, business, and life.
        </p>
        <div className="mt-8 flex justify-center gap-4">
            <Button asChild className="bg-primary hover:bg-secondary rounded-lg px-5 py-2.5 transition-colors">
                <Link href="#tools">Explore AI Tools</Link>
            </Button>
             <Button asChild variant="outline" className="bg-primary hover:bg-secondary rounded-lg px-5 py-2.5 transition-colors">
                <Link href="#">Suggest a Tool</Link>
            </Button>
        </div>
      </section>

      <ToolsSection
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ArticlesSection />
      <NewsletterSection />
    </>
  );
}
