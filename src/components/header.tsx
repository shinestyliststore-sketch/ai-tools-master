
"use client";

import Link from "next/link";
import { BrainCircuit, Menu } from "lucide-react";
import AuthModals from "@/components/auth-modals";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

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
        <nav className="hidden items-center gap-4 text-sm lg:flex lg:gap-6">
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
          <div className="hidden sm:flex">
            <AuthModals />
          </div>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pt-12">
              <nav className="flex flex-col gap-6 text-lg font-medium">
                <SheetClose asChild>
                  <Link
                    href="/#tools"
                    className="text-foreground/60 transition-colors hover:text-foreground/80"
                  >
                    Tools
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/#articles"
                    className="text-foreground/60 transition-colors hover:text-foreground/80"
                  >
                    Blog
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/categorize"
                    className="text-foreground/60 transition-colors hover:text-foreground/80"
                  >
                    Categorize
                  </Link>
                </SheetClose>
              </nav>
              <div className="mt-8 flex flex-col gap-2">
                 <AuthModals />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
