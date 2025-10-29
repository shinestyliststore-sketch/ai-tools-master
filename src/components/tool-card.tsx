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
import { getPlaceholderImage } from "@/lib/placeholder-images";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const category = categories.find((c) => c.id === tool.category);
  
  let logoUrl: string;

  if (tool.id === 'dall-e-3') {
    logoUrl = getPlaceholderImage(tool.imageId);
  } else {
    try {
      const domain = new URL(tool.link).hostname;
      logoUrl = `https://logo.clearbit.com/${domain}`;
    } catch (error) {
      console.error(`Invalid URL for tool ${tool.name}: ${tool.link}`);
      logoUrl = `https://via.placeholder.com/64?text=${tool.name.charAt(0)}`;
    }
  }

  const visitLink = tool.affiliateLink || tool.link;

  return (
    <Card className="flex h-full flex-col overflow-hidden bg-card transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader className="flex-row items-start gap-4 space-y-0">
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src={logoUrl}
            alt={`${tool.name} logo`}
            width={64}
            height={64}
            unoptimized={true} 
            onError={(e) => {
              e.currentTarget.src = `https://via.placeholder.com/64?text=${tool.name.charAt(0)}`;
              e.currentTarget.onerror = null;
            }}
            className="object-contain"
          />
        </div>
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
          <Link href={visitLink} target="_blank">
            Visit Tool <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
