import Link from "next/link";
import { BrainCircuit } from "lucide-react";
import AuthModals from "@/components/auth-modals";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link
          href="/"
          className="mr-6 flex items-center space-x-2"
          aria-label="AIGearFinder Home"
        >
          <BrainCircuit className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block">
            AIGearFinder
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="/#tools"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Tools
          </Link>
          <Link
            href="/#articles"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Blog
          </Link>
          <Link
            href="/categorize"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Categorize
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <AuthModals />
        </div>
      </div>
    </header>
  );
}
