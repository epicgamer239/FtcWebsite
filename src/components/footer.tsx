import Link from "next/link";
import { BeaverLogo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import { DONATE_URL } from "@/lib/site";

const COLS = [
  {
    title: "Team",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/bot", label: "The Bot" },
    ],
  },
  {
    title: "Community",
    links: [{ href: "/outreach", label: "Outreach" }],
  },
  {
    title: "Support",
    links: [
      { href: "/sponsor", label: "Sponsor" },
      { href: DONATE_URL, label: "Donate" },
      { href: "mailto:beaverbotsftc@gmail.com", label: "Email Us" },
    ],
  },
] as const;

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-px mx-auto max-w-7xl pb-8 pt-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="group mb-4 flex items-center gap-3">
              <BeaverLogo className="h-14 w-auto transition-transform group-hover:-rotate-3" />
              <div>
                <div className="text-base font-bold tracking-tight">
                  BeaverBots
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  FTC 26073 · Ashburn, VA
                </div>
              </div>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              A second-year FTC team from Ashburn, VA. We build robots, run free
              STEM programs for kids, and competed at the 2026 FIRST Worlds
              Championship.
            </p>
            <a
              href="mailto:beaverbotsftc@gmail.com"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-muted"
            >
              <Mail className="h-4 w-4" />
              beaverbotsftc@gmail.com
            </a>
          </div>

          {COLS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="mb-3 text-sm font-semibold">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {isExternal(l.href) ? (
                      <a
                        href={l.href}
                        {...(l.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} BeaverBots FTC · Fiscally sponsored by
            Hack Club · EIN 81-2908499
          </p>
          <p>FTC Team 26073 · Ashburn, Virginia</p>
        </div>
      </div>
    </footer>
  );
}
