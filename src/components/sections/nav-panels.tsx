import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const PANELS = [
  {
    href: "/bot",
    label: "Bot",
    image: "/panels/bot.jpg",
    alt: "WoodChucker competition robot with the BeaverBots team",
  },
  {
    href: "/outreach",
    label: "Outreach",
    image: "/panels/outreach.jpg",
    alt: "BeaverBots students at a FIRST Chesapeake event",
  },
  {
    href: "/sponsor",
    label: "Sponsors",
    image: "/panels/sponsor.jpg",
    alt: "BeaverBots sponsor logos",
  },
] as const;

export function NavPanels() {
  return (
    <section
      aria-label="Explore BeaverBots"
      className="bg-[oklch(0.22_0.015_290)] px-[max(1.25rem,12vw)] py-10 sm:py-12 lg:py-14"
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
              className="group relative block aspect-[3/4] overflow-hidden focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Image
                src={panel.image}
                alt={panel.alt}
                fill
                sizes="(min-width: 768px) 240px, 76vw"
                className="object-cover grayscale brightness-90 contrast-95 transition-[filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:brightness-110 group-hover:saturate-150 group-hover:contrast-110 group-focus-visible:grayscale-0 group-focus-visible:brightness-110 group-focus-visible:saturate-150 group-focus-visible:contrast-110 motion-reduce:transition-none"
              />
              <div
                className="absolute inset-0 bg-[oklch(0.12_0.02_290/0.35)] transition-colors duration-500 group-hover:bg-transparent group-focus-visible:bg-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 top-1/2 z-10 flex h-[15%] min-h-[58px] -translate-y-1/2 items-center justify-center bg-[rgb(0_0_0/0.72)] px-3 transition-[background-color] duration-500 group-hover:bg-[rgb(0_0_0/0.82)]">
                <span
                  className="block text-center text-[29px] font-medium leading-[1.4] text-white"
                  style={{
                    fontFamily:
                      'Futura, "Futura Std", futura-lt-w01-book, var(--font-panel), "Century Gothic", CenturyGothic, sans-serif',
                    letterSpacing: "normal",
                    textTransform: "none",
                    fontWeight: 500,
                  }}
                >
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
