import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AI Tools Master",
  description: "Explore the Future with AI — Tools, Tips, and Trends",
};
export const metadata = {
  title: "AI Tools Hub",
  description: "Explore the future with AI tools, tips, and trends!",
  other: {
    "google-site-verification": "YAHAN_APNA_CODE_DALO"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
         <meta name="google-adsense-account"
       content="ca-pub-2753365010882256" />
          <script />
            async
         src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2753365010882256"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-gradient-to-br from-[#0a0a23] to-[#1b0036] font-body antialiased",
          poppins.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
