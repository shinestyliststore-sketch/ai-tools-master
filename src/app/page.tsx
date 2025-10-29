"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/hero-section";
import ToolsSection from "@/components/sections/tools-section";
import ArticlesSection from "@/components/sections/articles-section";
import NewsletterSection from "@/components/sections/newsletter-section";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <HeroSection onSearchChange={setSearchQuery} />
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
