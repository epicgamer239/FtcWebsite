import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Hero } from "@/components/sections/hero";
import { NavPanels } from "@/components/sections/nav-panels";
import { SponsorStrip } from "@/components/sections/sponsor-strip";
import { Counter } from "@/components/counter";

const STATS = [
  {
    label: "Students",
    caption: "Grades 8–12",
    numeric: { value: 12 },
  },
  {
    label: "Kids reached",
    caption: "Through outreach",
    numeric: { value: 1400, suffix: "+" },
  },
  {
    label: "Raised",
    caption: "Worlds travel fund",
    numeric: { value: 13650, prefix: "$" },
  },
  {
    label: "2026 qualifier",
    caption: "Houston, TX",
    text: "Worlds",
  },
  {
    label: "Season",
    caption: "Founded 2024",
    numeric: { value: 2, suffix: "nd" },
  },
] as const;

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
                  A few numbers
                </span>
              }
            />
            <Link
              href="/sponsor"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.82_0.08_295)] hover:underline"
            >
              Become a sponsor
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
                  {"numeric" in s ? (
                    <Counter
                      value={s.numeric.value}
                      prefix={"prefix" in s.numeric ? s.numeric.prefix : ""}
                      suffix={"suffix" in s.numeric ? s.numeric.suffix : ""}
                    />
                  ) : (
                    s.text
                  )}
                </dd>
                <p className="mt-1 text-xs text-[oklch(0.62_0.02_290)]">
                  {s.caption}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
