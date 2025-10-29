import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Tool } from "@/lib/types";
import { categories } from "@/lib/data";
import { getPlaceholderImageDetails } from "@/lib/placeholder-images";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const category = categories.find((c) => c.id === tool.category);
  const imageDetails = getPlaceholderImageDetails(tool.imageId);

  return (
    <Card className="flex h-full flex-col overflow-hidden bg-card transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader className="flex-row items-start gap-4 space-y-0">
        {imageDetails && (
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src={imageDetails.imageUrl}
              alt={`${tool.name} logo`}
              width={64}
              height={64}
              data-ai-hint={imageDetails.imageHint}
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-grow">
          <CardTitle className="font-headline text-xl">{tool.name}</CardTitle>
          {category && (
            <Badge variant="secondary" className="mt-1">
              {category.name}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{tool.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="outline">
          <Link href={tool.link} target="_blank">
            Visit Tool <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
