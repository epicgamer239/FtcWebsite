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
        <div className="container-px mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
            aria-label="BeaverBots Home"
          >
            <BeaverLogo className="h-12 w-auto transition-transform group-hover:-rotate-3" />
            <div className="hidden flex-col leading-none sm:flex">
              <span className="text-base font-extrabold tracking-wider">
                BEAVERBOTS
              </span>
              <span className="label-mono text-[10px] text-primary">
                FTC 26073 · ASHBURN, VA
              </span>
            </div>
          </Link>

          <nav className="hidden min-w-0 justify-center md:flex">
            <ul className="flex flex-nowrap items-center">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href} className="shrink-0">
                    <Link
                      href={link.href}
                      className={cn(
                        "relative block px-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors lg:px-4",
                        "after:absolute after:-bottom-1.5 after:left-3 after:right-3 after:h-px after:bg-primary after:transition-transform after:duration-300 after:origin-left lg:after:left-4 lg:after:right-4",
                        active
                          ? "text-primary after:scale-x-100"
                          : "text-foreground/85 hover:text-primary after:scale-x-0 hover:after:scale-x-100"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-3">
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
              className="md:hidden text-foreground/90 hover:text-primary transition-colors p-3 -mr-3"
            >
              <Menu className="h-8 w-8 stroke-[1.75]" />
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
            <BeaverLogo className="h-10" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-3 -mr-3 hover:text-primary transition-colors"
            >
              <X className="h-8 w-8" />
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
                    "text-2xl font-semibold tracking-wide py-4 min-h-[48px] flex items-center border-b border-border transition-colors",
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
