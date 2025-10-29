import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Join 10,000+ Readers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover new AI tools and trends weekly, delivered right to your
            inbox.
          </p>
          <form className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 flex-grow rounded-full text-center sm:text-left"
              aria-label="Email for newsletter"
            />
            <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
