import Link from "next/link";
import { BeaverLogo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { Mail, Camera, Film, AtSign } from "lucide-react";

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
    links: [
      { href: "/outreach", label: "Outreach" },
      { href: "/first", label: "FIRST Programs" },
      { href: "/outreach#robo-kicks", label: "Robo Kicks" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/sponsor", label: "Sponsor" },
      { href: "/sponsor#donate", label: "Donate" },
      { href: "mailto:beaverbotsftc@gmail.com", label: "Email Us" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background relative">
      <div className="container-px mx-auto max-w-7xl pt-16 pb-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <BeaverLogo className="h-12 w-12 group-hover:-rotate-3 transition-transform" />
              <div>
                <div className="font-extrabold tracking-wider">BEAVERBOTS</div>
                <div className="label-mono text-[10px] text-primary">
                  FIRST TECH CHALLENGE · ASHBURN, VA
                </div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              A second-year FTC team heading to the 2026 FIRST Worlds
              Championship. Building robots, building engineers, building each
              other up, one dam at a time.
            </p>

            <a
              href="mailto:beaverbotsftc@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-accent hover:bg-secondary px-4 py-2 text-sm font-medium text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              beaverbotsftc@gmail.com
            </a>

            <div className="mt-6 flex items-center gap-2">
              <SocialIcon icon={<Camera className="h-4 w-4" />} label="Instagram" />
              <SocialIcon icon={<AtSign className="h-4 w-4" />} label="X / Twitter" />
              <SocialIcon icon={<Film className="h-4 w-4" />} label="YouTube" />
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <div className="label-mono text-[10px] text-muted-foreground mb-4">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((l) =>
                  l.href.startsWith("mailto:") ? (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <div className="label-mono text-[10px] text-muted-foreground mb-4">
              Status
            </div>
            <div className="label-mono inline-flex items-center gap-2 text-[10px] text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              ACTIVE · 2025-26
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} BeaverBots FTC · 501(c)(3) ·
            EIN 99-3214567
          </div>
          <div className="font-mono">
            Built by students, in Kotlin and TypeScript.
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="h-10 w-10 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
    >
      {icon}
    </a>
  );
}
