import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const HOME_SPONSORS = [
  { name: "Reinvent", logo: "/sponsor-logos/reinvent.png" },
  { name: "Apple", logo: "/sponsor-logos/apple.png" },
  { name: "ICF", logo: "/sponsor-logos/icf.png" },
  { name: "CVS", logo: "/sponsor-logos/cvs.png" },
  { name: "Maruthi.AI", logo: "/sponsor-logos/maruthiai.png" },
  { name: "Groundswell", logo: "/sponsor-logos/groundswell.png" },
  {
    name: "22nd Century Technologies",
    logo: "/sponsor-logos/22nd-century-technologies.png",
  },
] as const;

export function SponsorStrip() {
  return (
    <section
      aria-label="Sponsors"
      className="bg-[oklch(0.22_0.015_290)] px-[max(1.25rem,10vw)] pb-14 pt-4 sm:pb-16 sm:pt-6 lg:pb-20 lg:pt-8"
    >
      <div className="mx-auto max-w-5xl text-center">
        <Reveal motion="float" delay={0}>
          <p
            className="text-balance text-[clamp(1rem,2vw+0.4rem,1.35rem)] font-medium leading-[1.4] text-[oklch(0.96_0.01_290)]"
            style={{
              fontFamily:
                'Futura, "Futura Std", futura-lt-w01-book, var(--font-panel), "Century Gothic", CenturyGothic, sans-serif',
            }}
          >
            Team 26073 - BeaverBots is proud to be supported by:
          </p>
        </Reveal>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-12 sm:gap-y-10">
          {HOME_SPONSORS.map((s, index) => (
            <Reveal
              key={s.name}
              as="li"
              motion="float"
              index={index}
              delay={90}
              className="flex items-center justify-center"
            >
              <Image
                src={s.logo}
                alt={s.name}
                width={160}
                height={64}
                className="h-10 w-auto max-w-[140px] object-contain sm:h-12 sm:max-w-[160px]"
              />
            </Reveal>
          ))}
        </ul>

        <Reveal motion="float" index={HOME_SPONSORS.length} delay={90}>
          <Link
            href="/sponsor"
            className="mt-10 inline-block text-sm font-semibold text-[oklch(0.82_0.08_295)] underline-offset-4 hover:underline"
          >
            See all sponsors
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
