import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Article } from "@/lib/types";
import { getPlaceholderImageDetails } from "@/lib/placeholder-images";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
    const imageDetails = getPlaceholderImageDetails(article.imageId);

  return (
    <Card className="flex flex-col overflow-hidden bg-background transition-all hover:shadow-lg hover:shadow-primary/20">
      {imageDetails && (
        <div className="relative aspect-video w-full">
            <Image
            src={imageDetails.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            data-ai-hint={imageDetails.imageHint}
            />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <CardHeader className="p-0">
          <CardTitle className="font-headline text-lg">{article.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow p-0 pt-4">
          <CardDescription>{article.description}</CardDescription>
        </CardContent>
        <CardFooter className="p-0 pt-4">
          <Button asChild variant="secondary" className="w-full">
            <Link href={article.link}>Read More</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
