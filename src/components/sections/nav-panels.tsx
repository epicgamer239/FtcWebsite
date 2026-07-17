import Link from "next/link";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const PANEL_SPONSOR_LOGOS = [
  { name: "Reinvent", logo: "/sponsor-logos/reinvent.png" },
  { name: "Apple", logo: "/sponsor-logos/apple.png" },
  { name: "ICF", logo: "/sponsor-logos/icf.png" },
  { name: "CVS", logo: "/sponsor-logos/cvs.png" },
  { name: "Maruthi.AI", logo: "/sponsor-logos/maruthiai.png" },
  { name: "Groundswell", logo: "/sponsor-logos/groundswell.png" },
] as const;

const PANELS = [
  {
    href: "/bot",
    label: "Bot",
    image: "/panels/bot.jpeg",
    alt: "WoodChucker competition robot with the BeaverBots team",
    showLogos: false,
    imageStyle: {
      position: "absolute",
      width: "120%",
      height: "120%",
      maxWidth: "none",
      left: "0%",
      top: "-8%",
      right: "auto",
      bottom: "auto",
    } satisfies CSSProperties,
  },
  {
    href: "/outreach",
    label: "Outreach",
    image: "/panels/outreach.jpg",
    alt: "BeaverBots students at a FIRST Chesapeake event",
    showLogos: false,
    imageStyle: undefined as CSSProperties | undefined,
  },
  {
    href: "/sponsor",
    label: "Sponsors",
    image: "/panels/sponsors.jpg",
    alt: "BeaverBots sponsors over a team photo",
    showLogos: false,
    imageStyle: undefined as CSSProperties | undefined,
  },
] as const;

export function NavPanels() {
  return (
    <section
      aria-label="Explore BeaverBots"
      className="border-b border-border bg-background px-[max(1.25rem,12vw)] py-14 sm:py-16 lg:py-20"
    >
      <ul className="mx-auto grid max-w-[56rem] grid-cols-1 gap-2.5 md:grid-cols-3 md:gap-3">
        {PANELS.map((panel, index) => (
          <Reveal
            key={panel.href}
            as="li"
            motion="float"
            index={index}
            delay={120}
          >
            <Link
              href={panel.href}
              className="group relative block aspect-[3/4] overflow-hidden rounded-xl border border-border focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={panel.image}
                alt={panel.alt}
                style={panel.imageStyle}
                className={cn(
                  "object-cover brightness-95 transition-[filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:brightness-105 group-focus-visible:brightness-105 motion-reduce:transition-none",
                  panel.imageStyle ? "" : "absolute inset-0 h-full w-full"
                )}
              />

              {panel.showLogos ? (
                <div
                  className="absolute inset-0 z-[1] flex flex-col justify-between px-3 py-4 sm:px-4 sm:py-5"
                  aria-hidden
                >
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    {PANEL_SPONSOR_LOGOS.slice(0, 3).map((s) => (
                      <div
                        key={s.name}
                        className="flex aspect-[5/3] items-center justify-center rounded-md bg-background/95 p-1.5 shadow-sm ring-1 ring-border transition-[background-color] duration-500 group-hover:bg-background"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={s.logo}
                          alt=""
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    {PANEL_SPONSOR_LOGOS.slice(3, 6).map((s) => (
                      <div
                        key={s.name}
                        className="flex aspect-[5/3] items-center justify-center rounded-md bg-background/95 p-1.5 shadow-sm ring-1 ring-border transition-[background-color] duration-500 group-hover:bg-background"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={s.logo}
                          alt=""
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div
                className={cn(
                  "absolute inset-0 transition-colors duration-500 group-hover:bg-transparent group-focus-visible:bg-transparent",
                  panel.showLogos
                    ? "bg-[oklch(0.12_0.02_290/0.2)]"
                    : "bg-[oklch(0.12_0.02_290/0.35)]"
                )}
                aria-hidden
              />
              <div className="absolute inset-x-0 top-1/2 z-10 flex h-[15%] min-h-[58px] -translate-y-1/2 items-center justify-center bg-foreground/75 px-3 transition-[background-color] duration-500 group-hover:bg-foreground/85">
                <span className="block text-center font-[family-name:var(--font-panel)] text-3xl font-medium leading-snug text-background">
                  {panel.label}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
