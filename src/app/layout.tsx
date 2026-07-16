import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Closest open substitute for Simbotics' futura-lt-w01-book / Futura Medium */
const jost = Jost({
  variable: "--font-panel",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "BeaverBots FTC · Headed to the 2026 FIRST Worlds Championship",
  description:
    "The BeaverBots are a second-year FIRST Tech Challenge team in Ashburn, VA. We qualified for the 2026 FIRST Worlds Championship in Houston, Texas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <TooltipProvider delay={150}>
          <Navbar />
          <main className="flex-1 flex flex-col pb-16 md:pb-0">{children}</main>
          <Footer />
          <MobileNav />
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
