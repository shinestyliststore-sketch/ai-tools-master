"use client";

import { useMemo } from "react";
import { tools, categories } from "@/lib/data";
import ToolCard from "@/components/tool-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/types";

interface ToolsSectionProps {
  searchQuery: string;
  selectedCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

export default function ToolsSection({
  searchQuery,
  selectedCategory,
  onCategoryChange,
}: ToolsSectionProps) {
  const filteredTools = useMemo(() => {
    const filtered = tools.filter((tool) => {
      const matchesCategory = !selectedCategory || tool.category === selectedCategory;
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sort to show sponsored tools first
    return filtered.sort((a, b) => {
      if (a.isSponsored && !b.isSponsored) return -1;
      if (!a.isSponsored && b.isSponsored) return 1;
      return 0;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="tools" className="py-20 md:py-28">
      <div className="container">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          AI Tool Directory
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          Filter by category or search to find the perfect tool for your needs.
        </p>

        <div className="my-12 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant={!selectedCategory ? "default" : "outline"}
            onClick={() => onCategoryChange(null)}
            className={cn(
              "rounded-full",
              !selectedCategory && "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            All
          </Button>
          {categories.map((category: Category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "rounded-full",
                selectedCategory === category.id &&
                  "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              <category.icon className="mr-2 h-4 w-4" />
              {category.name}
            </Button>
          ))}
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <h3 className="font-headline text-2xl font-semibold">No Tools Found</h3>
            <p className="mt-2 text-muted-foreground">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
