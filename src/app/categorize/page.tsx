"use client";

import { useState } from "react";
import { categorizeTool } from "@/ai/flows/categorize-tool";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Tag } from "lucide-react";
import { categories } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function CategorizePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedCategory, setSuggestedCategory] = useState<string | null>(
    null
  );
  const { toast } = useToast();

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    setSuggestedCategory(null);
    const description = formData.get("description") as string;
    if (!description) {
      toast({
        variant: "destructive",
        title: "Description is empty",
        description: "Please enter a tool description to categorize.",
      });
      setIsLoading(false);
      return;
    }

    try {
      const result = await categorizeTool({ description });
      setSuggestedCategory(result.category);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to categorize the tool. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const categoryDetails = categories.find((c) => c.id === suggestedCategory);

  return (
    <div className="container py-20">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight">
            AI-Powered Tool Categorizer
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Enter a description of an AI tool, and our AI will suggest the best
            category for it.
          </p>
        </div>

        <form className="mt-12" action={handleSubmit}>
          <div className="grid w-full gap-2">
            <Textarea
              name="description"
              placeholder="e.g., 'A tool that generates high-quality images from text prompts using advanced diffusion models.'"
              className="min-h-[120px] text-base"
              required
            />
            <Button type="submit" size="lg" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Tag className="mr-2 h-4 w-4" />
              )}
              Categorize Tool
            </Button>
          </div>
        </form>

        {suggestedCategory && categoryDetails && (
          <div className="mt-12 text-center rounded-lg border bg-card p-8">
            <h2 className="text-lg font-medium text-muted-foreground">
              Suggested Category
            </h2>
            <div className="mt-4">
              <Badge className="px-6 py-2 text-xl">
                <categoryDetails.icon className="mr-2 h-5 w-5" />
                {categoryDetails.name}
              </Badge>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
