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
    caption: "This season",
    numeric: { value: 13650, prefix: "$" },
  },
  {
    label: "2026",
    caption: "FIRST Worlds",
    text: "Qualifier",
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
        className="border-b border-border bg-background py-16 lg:py-20"
      >
        <div className="container-px mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="By the numbers"
              title="A few numbers"
            />
            <Link
              href="/sponsor"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Become a sponsor
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <dl
            id="stats-heading"
            className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-5"
          >
            {STATS.map((s) => (
              <div key={s.label} className="bg-background p-5 lg:p-6">
                <dt className="text-sm text-muted-foreground">{s.label}</dt>
                <dd className="mt-1 text-2xl font-bold text-primary sm:text-3xl">
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
                <p className="mt-1 text-xs text-muted-foreground">{s.caption}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
