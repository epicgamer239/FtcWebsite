"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { BeaverLogo } from "@/components/logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/outreach", label: "Outreach" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/bot", label: "Bot" },
  { href: "/first", label: "First" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-background/95 border-b border-border shadow-sm"
            : "bg-background/95 border-b border-border"
        )}
      >
        <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label="BeaverBots Home"
          >
            <BeaverLogo className="h-12 w-12 transition-transform group-hover:-rotate-3" />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-base font-extrabold tracking-wider">
                BEAVERBOTS
              </span>
              <span className="label-mono text-[10px] text-primary">
                FTC · ASHBURN, VA
              </span>
            </div>
          </Link>

          {/* Desktop horizontal nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold tracking-[0.16em] uppercase transition-colors relative",
                    "after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-px after:bg-primary after:transition-transform after:duration-300 after:origin-left",
                    active
                      ? "text-primary after:scale-x-100"
                      : "text-foreground/85 hover:text-primary after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/sponsor#donate"
              className={cn(
                buttonVariants(),
                "hidden md:inline-flex group bg-primary hover:bg-primary/90 px-4"
              )}
            >
              <Heart className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Donate
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden text-foreground/90 hover:text-primary transition-colors p-2 -mr-2"
            >
              <Menu className="h-7 w-7 stroke-[1.75]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-foreground/20"
          onClick={() => setOpen(false)}
        />
        <aside
          className={cn(
            "absolute top-0 right-0 h-full w-full sm:w-[400px] bg-sidebar text-foreground border-l border-border transition-transform duration-300 flex flex-col",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 py-6 border-b border-border">
            <BeaverLogo className="h-10 w-10" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2 hover:text-primary transition-colors"
            >
              <X className="h-7 w-7" />
            </button>
          </div>
          <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-2xl font-semibold tracking-wide py-3 border-b border-border transition-colors",
                    active ? "text-primary" : "hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/sponsor#donate"
              className={cn(buttonVariants(), "mt-6 py-5 text-base")}
            >
              <Heart className="h-4 w-4" />
              Donate
            </Link>
          </nav>
        </aside>
      </div>
    </>
  );
}
