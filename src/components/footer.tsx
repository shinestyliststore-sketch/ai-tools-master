import { Instagram, Youtube, Twitter, Linkedin, Coffee } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "#",
  },
  {
    name: "X (formerly Twitter)",
    icon: Twitter,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} AIGearFinder – All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4 md:ml-auto">
          <Button asChild variant="outline" size="sm">
            <Link href="https://buymeacoffee.com/MD.Zahid" target="_blank" rel="noopener noreferrer">
              <Coffee className="mr-2 h-4 w-4" />
              Buy me a coffee
            </Link>
          </Button>
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
