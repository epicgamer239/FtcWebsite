import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  ArrowRight,
  Heart,
  MapPin,
  Calendar,
  Trophy,
  Bot as BotIcon,
  HeartHandshake,
  School,
  Sparkles,
  Cog,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";

const PAGE_CARDS = [
  {
    href: "/about",
    label: "About",
    title: "Building like Beavers",
    description: "A second-year FTC team from Ashburn, VA. Meet the pack.",
    icon: HeartHandshake,
    meta: "12 STUDENTS · GRADES 8-12",
  },
  {
    href: "/outreach",
    label: "Outreach",
    title: "Empowering STEM",
    description:
      "Robo Kicks, CAD Camp, Robo Rumble. Over 1,400 kids reached every year.",
    icon: School,
    meta: "5 PROGRAMS · LOUDOUN COUNTY",
  },
  {
    href: "/bot",
    label: "Bot",
    title: "Meet DAM-1",
    description:
      "Our 2025-26 competition robot. CNC chassis, 6 motors, 11 sensors.",
    icon: BotIcon,
    meta: "REV.3 · BUILD READY",
  },
  {
    href: "/first",
    label: "First",
    title: "FLL · FTC · FRC",
    description: "The K-12 FIRST pipeline that grows kids into engineers.",
    icon: Cog,
    meta: "3 PROGRAMS · K THROUGH 12",
  },
];

type Receipt = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  caption: string;
};

const RECEIPTS: Receipt[] = [
  { value: 12, label: "Students", caption: "Grades 8 to 12" },
  { value: 1400, suffix: "+", label: "Kids Reached", caption: "Outreach to date" },
  { value: 13650, prefix: "$", label: "Raised", caption: "Worlds travel fund" },
  { value: 280, suffix: "+", label: "Build Hours", caption: "On DAM-1 alone" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40"
      >
        <div className="container-px mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.82fr)] xl:gap-12">
          <div>
            <Badge
              variant="outline"
              className="label-mono mb-6 border-primary/30 bg-accent px-3 py-1 text-primary"
            >
              <Trophy className="mr-1.5 h-3.5 w-3.5" />
              2026 FIRST® WORLDS CHAMPIONSHIP QUALIFIER
            </Badge>

            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              The BeaverBots are heading to the{" "}
              <span className="text-primary">
                2026 FIRST Worlds Championship.
              </span>
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-base text-foreground/80 lg:text-lg">
              <HoverCard>
                <HoverCardTrigger className="inline-flex cursor-default items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  April 29 to May 3
                </HoverCardTrigger>
                <HoverCardContent className="text-left">
                  <div className="mb-1 font-semibold text-foreground">
                    Worlds 2026
                  </div>
                  <p className="text-xs text-muted-foreground">
                    5 days of competition · 600+ teams from 70+ countries ·
                    George R. Brown Convention Center, Houston.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <span className="hidden text-border sm:inline">·</span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Houston, Texas
              </span>
            </div>

            <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Support the BeaverBots by donating. Every dollar helps send 12
              student engineers from Ashburn, VA to the world stage.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/sponsor#donate"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group px-7 py-5 text-base font-bold tracking-wide uppercase"
                )}
              >
                <Heart className="h-5 w-5" />
                Click Here to Donate
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "px-6 py-5 text-base"
                )}
              >
                About The Team
              </Link>
            </div>

            <Card className="mt-10 max-w-xl border-border shadow-paper">
              <CardContent className="p-5">
                <Progress
                  value={68}
                  className="gap-2"
                  aria-label="Worlds Travel Fund"
                >
                  <ProgressLabel className="label-mono text-xs text-primary">
                    Worlds Travel Fund
                  </ProgressLabel>
                  <ProgressValue className="font-mono text-xs" />
                </Progress>
                <div className="mt-3 flex justify-between text-xs text-muted-foreground tabular-nums">
                  <span>
                    <span className="font-bold text-foreground">$13,650</span>{" "}
                    raised
                  </span>
                  <span>Goal: $20,000</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-muted shadow-paper">
              <Image
                src="/IMG_4172.jpg"
                alt="The BeaverBots team with their robot at a FIRST Chesapeake event"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="label-mono mt-3 flex items-center justify-between gap-1.5 text-[10px] text-muted-foreground">
              <span>PLATE 01 · TEAM PHOTOGRAPH</span>
              <span className="inline-flex items-center gap-1.5 text-primary">
                <Trophy className="h-3 w-3" />
                FIRST CHESAPEAKE · 2025
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* BY THE NUMBERS — yearbook receipts strip */}
      <section
        aria-labelledby="receipts-heading"
        className="border-y border-border bg-background"
      >
        <div className="container-px mx-auto max-w-7xl py-12 lg:py-16">
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-8">
            <div>
              <div className="label-mono text-[11px] text-muted-foreground mb-2">
                By the Numbers · 2024-26
              </div>
              <h2
                id="receipts-heading"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight"
              >
                The receipts.
              </h2>
            </div>
            <Link
              href="/sponsor"
              className="label-mono inline-flex items-center gap-1.5 text-[11px] text-primary hover:underline underline-offset-4"
            >
              View full budget
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <dl className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border border border-border rounded-2xl overflow-hidden bg-background">
            {RECEIPTS.map((r, i) => (
              <div key={r.label} className="p-6 lg:p-8 relative">
                <div className="label-mono absolute top-3 left-4 text-[10px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / {String(RECEIPTS.length).padStart(2, "0")}
                </div>
                <dt className="label-mono mt-4 text-[10px] text-muted-foreground">
                  {r.label}
                </dt>
                <dd className="mt-1 text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-none">
                  <Counter value={r.value} prefix={r.prefix} suffix={r.suffix} />
                </dd>
                <div className="mt-3 text-xs text-muted-foreground">
                  {r.caption}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* QUICK PAGE NAV */}
      <section className="relative py-20 lg:py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="label-mono text-[11px] text-primary mb-3">
                Explore the team
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Where to go next.
              </h2>
            </div>
            <Link
              href="/sponsor"
              className="text-sm font-semibold text-primary hover:text-primary/80 inline-flex items-center gap-1.5 group"
            >
              <Sparkles className="h-4 w-4" />
              Want to sponsor us?
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PAGE_CARDS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.href} index={i} className="h-full">
                  <Link href={p.href} className="group block h-full">
                    <Card className="h-full border-border transition-colors hover:border-primary/60 relative overflow-hidden">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="label-mono absolute top-5 right-5 text-[10px] text-muted-foreground">
                          {String(i + 1).padStart(2, "0")} / {String(PAGE_CARDS.length).padStart(2, "0")}
                        </div>
                        <div className="h-11 w-11 rounded-xl bg-accent border border-border flex items-center justify-center text-primary mb-5">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="label-mono text-[10px] text-muted-foreground mb-2">
                          {p.label}
                        </div>
                        <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                          {p.description}
                        </p>
                        <div className="label-mono mt-5 pt-4 border-t border-border text-[10px] text-muted-foreground">
                          {p.meta}
                        </div>
                        <div className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                          Read more
                          <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
