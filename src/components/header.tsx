"use client";

import Link from "next/link";
import { BrainCircuit, Coffee } from "lucide-react";
import AuthModals from "@/components/auth-modals";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 px-8 bg-[#0a0a23] shadow-lg">
      <Link href="/" className="flex items-center gap-2.5">
        <BrainCircuit className="h-10 w-10 text-white" />
        <h1 className="text-xl font-bold text-white">AI Tools Master</h1>
      </Link>
      <nav className="hidden md:flex items-center gap-2.5 text-sm">
        <Link href="/#tools" className="text-gray-300 hover:text-accent font-medium px-2">
          Tools
        </Link>
        <Link href="/#articles" className="text-gray-300 hover:text-accent font-medium px-2">
          Blog
        </Link>
        <Link href="/categorize" className="text-gray-300 hover:text-accent font-medium px-2">
          Categories
        </Link>
        <Link href="#" className="text-gray-300 hover:text-accent font-medium px-2">
            About
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link
          href="https://www.buymeacoffee.com/MD.Zahid"
          target="_blank"
          className="hidden md:inline-flex items-center gap-2 bg-[#f4b400] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#ffca28] transition-colors"
        >
          <Coffee className="h-4 w-4" />
          Buy Me a Coffee
        </Link>
        <div className="md:hidden">
          <AuthModals />
        </div>
      </div>
    </header>
  );
}
