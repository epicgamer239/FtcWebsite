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
      className="border-b border-border bg-background px-[max(1.25rem,10vw)] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-5xl text-center">
        <Reveal motion="float" delay={0}>
          <p className="text-balance text-lg font-medium leading-relaxed text-foreground sm:text-xl">
            Team 26073 - BeaverBots is proud to be supported by:
          </p>
        </Reveal>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {HOME_SPONSORS.map((s, index) => (
            <Reveal
              key={s.name}
              as="li"
              motion="float"
              index={index}
              delay={90}
            >
              <div className="flex h-16 w-[9.5rem] items-center justify-center rounded-xl border border-border bg-background px-4 transition-colors hover:border-primary/30 sm:h-[4.5rem] sm:w-40">
                <Image
                  src={s.logo}
                  alt={s.name}
                  width={140}
                  height={48}
                  className="h-8 w-auto max-w-full object-contain sm:h-9"
                />
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal motion="float" index={HOME_SPONSORS.length} delay={90}>
          <Link
            href="/sponsor"
            className="mt-10 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            See all sponsors
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
