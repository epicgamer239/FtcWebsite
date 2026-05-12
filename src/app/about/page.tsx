import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import {
  Hammer,
  Users2,
  Rocket,
  MapPin,
  Calendar,
  ArrowRight,
  Lightbulb,
  HeartHandshake,
  Compass,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About · BeaverBots FTC",
  description:
    "Meet the BeaverBots: a second-year FIRST Tech Challenge team from Ashburn, VA.",
};

type Fact =
  | {
      icon: typeof MapPin;
      label: string;
      kind: "text";
      value: string;
    }
  | {
      icon: typeof MapPin;
      label: string;
      kind: "count";
      value: number;
      suffix?: string;
    };

const FACTS: Fact[] = [
  { icon: MapPin, label: "Location", kind: "text", value: "Ashburn, VA" },
  {
    icon: Calendar,
    label: "Founded",
    kind: "count",
    value: 2024,
    suffix: " · 2nd Year",
  },
  {
    icon: Users2,
    label: "Team Size",
    kind: "count",
    value: 12,
    suffix: " Students",
  },
  {
    icon: Hammer,
    label: "Program",
    kind: "text",
    value: "FIRST® Tech Challenge",
  },
];

const VALUES = [
  {
    icon: Hammer,
    title: "Engineering Excellence",
    body: "We CAD, machine, print, and iterate until the robot earns its place on the field.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "Custom mechanisms, autonomous routines, and computer-vision pipelines built from scratch.",
  },
  {
    icon: HeartHandshake,
    title: "Gracious Professionalism",
    body: "We win with humility, lose with class, and lift up every team on the field with us.",
  },
  {
    icon: Compass,
    title: "Student-Led",
    body: "Every line of code, every CAD model, every weld: designed and executed by students.",
  },
];

const MEMBERS = [
  { name: "Maya R.", role: "Captain · Mechanical Lead", grade: "Senior" },
  { name: "Devon P.", role: "Programming Lead", grade: "Junior" },
  { name: "Aisha K.", role: "Electrical & Controls", grade: "Senior" },
  { name: "Lucas T.", role: "CAD & Manufacturing", grade: "Junior" },
  { name: "Priya S.", role: "Outreach Director", grade: "Senior" },
  { name: "Jordan R.", role: "Driver · Strategy", grade: "Senior" },
];

const SEASONS = [
  {
    when: "2024",
    title: "Rookie Year",
    detail:
      "Six students, one borrowed 3D printer, and a rented closet at Stone Bridge HS. We named the robot TIMBER.",
    badge: "INDUCTED",
  },
  {
    when: "2024-25",
    title: "Centerstage",
    detail:
      "First competition season. Built TIMBER from a $4K budget, picked up our first Inspire Award nomination at a Loudoun qualifier.",
    badge: "ROOKIE INSPIRE",
  },
  {
    when: "2025-26",
    title: "Into The Deep",
    detail:
      "Twelve students, an in-house CNC, and DAM-1: a mecanum drive with cascading slides, vision pipeline, and 78% autonomous accuracy.",
    badge: "WORLDS QUALIFIER",
    current: true,
  },
  {
    when: "Apr 2026",
    title: "Houston, TX",
    detail:
      "First Worlds Championship appearance. Goal: top-50 finish in our division and a Control Award nomination.",
    badge: "GOAL",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT THE TEAM"
        crumb="About"
        title={
          <>
            Building like{" "}
            <span className="text-primary italic">Beavers.</span>
          </>
        }
        description={
          <>
            The BeaverBots are a second-year FTC team based in{" "}
            <span className="text-primary font-semibold">Ashburn, VA</span>.
            Twelve students who dam together late nights of CAD work,
            autonomous tuning, and outreach planning to build something
            extraordinary.
          </>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/bot"
            className={cn(buttonVariants({ size: "lg" }), "px-6 py-5 group")}
          >
            Meet our robot
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/outreach"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "px-6 py-5"
            )}
          >
            See our outreach
          </Link>
        </div>
      </PageHeader>

      {/* Facts strip */}
      <section className="py-10 lg:py-14 border-y border-border bg-background">
        <div className="container-px mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {FACTS.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.label} className="flex items-center gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-accent border border-border flex items-center justify-center text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="label-mono text-[10px] text-muted-foreground">
                    {f.label}
                  </div>
                  <div className="text-lg lg:text-xl font-extrabold tracking-tight">
                    {f.kind === "text" ? (
                      f.value
                    ) : (
                      <>
                        <Counter value={f.value} />
                        {f.suffix}
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <div className="label-mono text-[11px] text-primary mb-3">
            What We Stand For
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl">
            More than a robotics team.
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} index={i}>
                  <Card className="border-border hover:border-primary/40 transition-colors h-full">
                    <CardContent className="p-6">
                      <div className="label-mono text-[10px] text-muted-foreground mb-4">
                        VALUE / {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="h-11 w-11 rounded-xl bg-accent border border-border flex items-center justify-center text-primary mb-5">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {v.body}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seasons timeline */}
      <section
        className="py-16 lg:py-24 border-y border-border bg-secondary/40"
        aria-labelledby="seasons"
      >
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="label-mono text-[11px] text-primary mb-3">
                Team Ledger
              </div>
              <h2
                id="seasons"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
              >
                Two seasons, four milestones.
              </h2>
            </div>
            <div className="label-mono hidden sm:inline-flex items-center gap-2 text-[10px] text-muted-foreground">
              <span aria-hidden className="h-px w-12 bg-border" />
              SEASON 02 ACTIVE
            </div>
          </div>

          <ol className="relative grid md:grid-cols-4 gap-0">
            <span
              aria-hidden
              className="hidden md:block absolute top-[18px] left-6 right-6 h-px bg-border"
            />
            {SEASONS.map((s, i) => (
              <Reveal key={s.when} index={i} as="li" className="relative pl-7 md:pl-0 md:pr-6 md:pt-9 pb-6">
                <span
                  aria-hidden
                  className="absolute left-0 md:left-0 top-0 md:top-3 md:relative md:block h-3 w-3 rounded-full border border-primary bg-background md:mb-0"
                />
                <span
                  aria-hidden
                  className="absolute top-3 left-1.5 md:hidden h-full w-px bg-border"
                />
                {s.current ? (
                  <span
                    aria-hidden
                    className="absolute -left-1 top-[-2px] md:top-[-2px] md:left-[-4px] h-5 w-5 rounded-full border-2 border-primary/40 animate-ping"
                  />
                ) : null}
                <div className="label-mono text-[10px] text-primary mb-2 mt-0 md:mt-2">
                  {s.when}
                </div>
                <div className="text-lg font-extrabold tracking-tight">
                  {s.title}
                </div>
                <Badge
                  variant="outline"
                  className={cn(
                    "label-mono text-[9px] mt-2",
                    s.current && "border-primary/40 bg-accent text-primary"
                  )}
                >
                  {s.badge}
                </Badge>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed pr-2">
                  {s.detail}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="label-mono text-[11px] text-primary mb-3">
            Meet the Pack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl">
            12 students. One robot.
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MEMBERS.map((m, i) => (
              <Reveal key={m.name} index={i % 3} delay={60}>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Card className="border-border hover:border-primary/40 transition-colors cursor-help w-full" />
                    }
                  >
                    <CardContent className="p-5 flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-accent text-primary font-bold">
                          {m.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 text-left">
                        <div className="font-semibold">{m.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {m.role}
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="label-mono text-[10px]"
                      >
                        {m.grade}
                      </Badge>
                    </CardContent>
                  </TooltipTrigger>
                  <TooltipContent>
                    Likes: caffeine, AprilTags, and good kerf welds.
                  </TooltipContent>
                </Tooltip>
              </Reveal>
            ))}
          </div>

          <Separator className="my-10" />

          <div className="label-mono text-[10px] text-muted-foreground mb-4">
            Mentors & Coaches
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { n: "Ms. Lopez", r: "Head Coach · Physics" },
              { n: "Dr. Singh", r: "Mentor · Boeing" },
              { n: "Mr. Chen", r: "Mentor · Microsoft" },
            ].map((m) => (
              <div
                key={m.n}
                className="flex items-center gap-4 rounded-xl border border-border bg-background p-4"
              >
                <Avatar className="h-11 w-11">
                  <AvatarFallback className="bg-accent text-primary font-bold">
                    {m.n
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-sm">{m.n}</div>
                  <div className="text-xs text-muted-foreground">{m.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission CTA */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container-px mx-auto max-w-4xl">
          <Card className="border-primary/30 overflow-hidden shadow-paper">
            <CardContent className="p-8 lg:p-12 text-center">
              <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="label-mono text-[10px] text-primary mb-3">
                Our Mission
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-4">
                Empower STEM in our community.
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                The BeaverBots is a new and promising FIRST® Tech Challenge
                team. Our mission is to empower STEM in our communities by
                providing once-in-a-lifetime STEM and Robotics opportunities to
                pursue a deeper understanding of robotics while developing
                life skills through real-world challenges.
              </p>
              <Link
                href="/sponsor#donate"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-7 group px-7 py-5"
                )}
              >
                Help us get to Worlds
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
