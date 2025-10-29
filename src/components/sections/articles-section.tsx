import { articles } from "@/lib/data";
import ArticleCard from "@/components/article-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Latest Articles & News
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay updated with the latest trends and insights in the AI world.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button size="lg" asChild>
                <Link href="#">View All Articles</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
