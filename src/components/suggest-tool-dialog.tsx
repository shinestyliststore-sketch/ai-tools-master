"use client";

import { useState } from "react";
import { suggestTools } from "@/ai/flows/suggest-tools";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Wand2, Loader2 } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

export default function SuggestToolDialog() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { toast } = useToast();

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    setSuggestions([]);
    const prompt = formData.get("prompt") as string;
    if (!prompt) {
      toast({
        variant: "destructive",
        title: "Prompt is empty",
        description: "Please describe what you want to do.",
      });
      setIsLoading(false);
      return;
    }

    try {
      const result = await suggestTools({ prompt });
      setSuggestions(result.toolSuggestions);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to get tool suggestions. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="text-lg py-7 px-8">
          <Wand2 className="mr-2 h-5 w-5" />
          Suggest me a tool
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">
            Get AI Tool Suggestions
          </DialogTitle>
          <DialogDescription>
            Describe what you want to achieve, and we'll suggest some tools.
          </DialogDescription>
        </DialogHeader>
        <form action={handleSubmit}>
          <div className="grid gap-4">
            <Textarea
              name="prompt"
              placeholder="e.g., 'I want to create a logo for my new company' or 'Help me write an essay about climate change'"
              className="min-h-[100px]"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Get Suggestions
            </Button>
          </div>
        </form>
        {suggestions.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Here are some suggestions:</h3>
            <ScrollArea className="h-40 w-full rounded-md border p-4">
              <div
                className="prose prose-sm dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: suggestions.join("") }}
              ></div>
            </ScrollArea>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
