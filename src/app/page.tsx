import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Bot as BotIcon,
  HeartHandshake,
  School,
  Cog,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Hero } from "@/components/sections/hero";
import { NavPanels } from "@/components/sections/nav-panels";
import { SponsorStrip } from "@/components/sections/sponsor-strip";

const PAGE_CARDS = [
  {
    href: "/about",
    label: "About",
    title: "Meet the team",
    description:
      "A second-year FTC team from Ashburn, VA. Twelve students, real mentors, and a serious build program.",
    icon: HeartHandshake,
  },
  {
    href: "/outreach",
    label: "Outreach",
    title: "STEM in the community",
    description:
      "Robo Kicks, CAD Camp, Robo Rumble, and more. Over 1,400 kids reached every year.",
    icon: School,
  },
  {
    href: "/bot",
    label: "Bot",
    title: "Meet DAM-1",
    description:
      "Our 2025–26 competition robot. CNC chassis, vision stack, and 3,600+ lines of student code.",
    icon: BotIcon,
  },
  {
    href: "/first",
    label: "FIRST",
    title: "FLL, FTC, and FRC",
    description:
      "The K–12 robotics pipeline. BeaverBots competes in FIRST Tech Challenge.",
    icon: Cog,
  },
];

const STATS = [
  { value: "12", label: "Students", caption: "Grades 8–12" },
  { value: "1,400+", label: "Kids reached", caption: "Through outreach" },
  { value: "$13,650", label: "Raised", caption: "Worlds travel fund" },
  { value: "Worlds", label: "2026 qualifier", caption: "Houston, TX" },
  { value: "2nd", label: "Season", caption: "Founded 2024" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <NavPanels />
      <SponsorStrip />

      <section
        aria-labelledby="stats-heading"
        className="border-b border-white/10 bg-[oklch(0.22_0.015_290)] py-12 lg:py-16"
      >
        <div className="container-px mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="By the numbers"
              title={
                <span className="text-[oklch(0.96_0.01_290)]">
                  A team that puts in the work
                </span>
              }
            />
            <Link
              href="/sponsor"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.82_0.08_295)] hover:underline"
            >
              View budget
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <dl
            id="stats-heading"
            className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-5"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-[oklch(0.26_0.015_290)] p-5 lg:p-6"
              >
                <dt className="text-sm text-[oklch(0.72_0.02_290)]">{s.label}</dt>
                <dd className="mt-1 text-2xl font-bold text-[oklch(0.78_0.14_295)] sm:text-3xl">
                  {s.value}
                </dd>
                <p className="mt-1 text-xs text-[oklch(0.62_0.02_290)]">
                  {s.caption}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[oklch(0.22_0.015_290)] py-16 lg:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Explore"
              title={
                <span className="text-[oklch(0.96_0.01_290)]">
                  Learn more about us
                </span>
              }
            />
            <Link
              href="/sponsor"
              className="text-sm font-semibold text-[oklch(0.82_0.08_295)] hover:underline"
            >
              Become a sponsor
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PAGE_CARDS.map((p) => {
              const Icon = p.icon;
              return (
                <Link key={p.href} href={p.href} className="group block h-full">
                  <Card className="h-full border-white/10 bg-[oklch(0.26_0.015_290)] text-[oklch(0.96_0.01_290)] transition-colors hover:border-[oklch(0.62_0.18_295)]">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[oklch(0.32_0.04_295)] text-[oklch(0.82_0.08_295)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-xs font-medium text-[oklch(0.82_0.08_295)]">
                        {p.label}
                      </p>
                      <h3 className="mt-1 text-lg font-bold">{p.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-[oklch(0.72_0.02_290)]">
                        {p.description}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-semibold text-[oklch(0.82_0.08_295)]">
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
