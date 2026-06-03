"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Gamepad2,
  Box,
  Swords,
  GraduationCap,
  ClipboardList,
  ArrowUpRight,
  Calendar,
  Users2,
  MapPin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";

type Program = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  audience: string;
  description: string;
  cadence: string;
  reach: number;
};

type Event = {
  name: string;
  season: "2024-2025" | "2025-2026";
  date: string;
  location: string;
  description: string;
  stats?: {
    participants?: string;
    teams?: string;
    games?: string;
  };
  image: string;
  registrationUrl?: string;
};

const PROGRAMS: Program[] = [
  {
    name: "ROBO KICKS",
    icon: Gamepad2,
    audience: "Elementary · K-5",
    cadence: "Weekly · After School",
    reach: 540,
    description:
      "A free, hands-on intro to robotics that teaches grade-schoolers the joy of building. Sensors, motors, and a whole lot of high-fives.",
  },
  {
    name: "CAD CAMP",
    icon: Box,
    audience: "Middle School · 6-8",
    cadence: "Summer · 3-Day Intensive",
    reach: 96,
    description:
      "Three-day Onshape intensive where students design their own robot parts from scratch. Every camper goes home with 3D-printed proof.",
  },
  {
    name: "ROBO RUMBLE",
    icon: Swords,
    audience: "All Ages · Family Friendly",
    cadence: "Annual · Spring",
    reach: 380,
    description:
      "Our annual community sumo-bot showdown. Bring your robot, win a trophy, eat too much pizza.",
  },
  {
    name: "INTRO TO FIRST",
    icon: GraduationCap,
    audience: "Parents & Students",
    cadence: "Quarterly · Evenings",
    reach: 220,
    description:
      "An evening walkthrough of the FIRST® ecosystem (FLL, FTC, and FRC) so families know exactly what their kid is signing up for.",
  },
  {
    name: "FTC SCRIMMAGE",
    icon: ClipboardList,
    audience: "Local FTC Teams",
    cadence: "November · Annual",
    reach: 168,
    description:
      "We host an off-season scrimmage at the Ashburn Library every November so teams across the region can test, learn, and connect.",
  },
];

const EVENTS: Event[] = [
  {
    name: "Girls in Robotics 2.0",
    season: "2025-2026",
    date: "September 2025",
    location: "Brambleton Library",
    description:
      "Our second Girls in Robotics event of the season, empowering young women in STEM through hands-on building activities and structural stability challenges.",
    image: "/outreach-events/girls-in-robotics-2-0.png",
  },
  {
    name: "Treasure Takedown Scrimmage",
    season: "2025-2026",
    date: "March 2026",
    location: "Local Library",
    description:
      "Our first invitational scrimmage featuring Chesapeake Regional Championship-qualified teams. Over 120 participants and 5 teams from across the DMV networked and practiced before the championship.",
    stats: {
      participants: "120+",
      teams: "5",
    },
    image: "/outreach-events/treasure-takedown-scrimmage.png",
  },
  {
    name: "Fossil Faceoff Scrimmage",
    season: "2025-2026",
    date: "February 2026",
    location: "Local Library",
    description:
      "Our second scrimmage with 150+ participants and 9 teams from Northern Virginia and Maryland. Featured 10+ games and was recorded for the full 2-hour duration.",
    stats: {
      participants: "150+",
      teams: "9",
      games: "10+",
    },
    image: "/outreach-events/fossil-faceoff-scrimmage.png",
  },
  {
    name: "Artifact Arena Scrimmage",
    season: "2025-2026",
    date: "January 2026",
    location: "Local Library",
    description:
      "Our first scrimmage of the season with 150+ participants and 7 teams. Hosted a simulated DECODE qualifier with 8+ games for teams to practice and network.",
    stats: {
      participants: "150+",
      teams: "7",
      games: "8+",
    },
    image: "/outreach-events/artifact-arena-scrimmage.png",
  },
  {
    name: "Robo Rumble 2.0",
    season: "2025-2026",
    date: "Spring 2026",
    location: "Master Lee's Martial Arts",
    description:
      "Our annual SuGo Bots competition returned! Students learned to build, design, and iterate robots for sumo-style competition rounds.",
    image: "/outreach-events/robo-rumble-2-0.png",
  },
  {
    name: "Onshape CAD Camp",
    season: "2025-2026",
    date: "Summer 2025",
    location: "Brambleton Library",
    description:
      "In-person CAD Camp building on last year's skills. Students created name tags, LEGO bricks, and personalized designs using advanced Onshape techniques.",
    image: "/outreach-events/onshape-cad-camp.png",
  },
  {
    name: "ROBOKICKS STEM Camp",
    season: "2025-2026",
    date: "Summer 2025",
    location: "Master Lee's Martial Arts",
    description:
      "Our second annual summer camp teaching robotics and STEM topics ranging from FIRST Lego League to AI development.",
    image: "/outreach-events/robokicks-stem-camp.png",
  },
  {
    name: "GIRLS IN ROBOTICS",
    season: "2024-2025",
    date: "Fall 2024",
    location: "Brambleton Library",
    description:
      "The first outreach event of the 2024-2025 season, introducing young girls to STEM enrichment programs.",
    image: "/outreach-events/girls-in-robotics.png",
  },
  {
    name: "Coral Clash",
    season: "2024-2025",
    date: "February 1, 2025",
    location: "Ashburn Library",
    description:
      "A scrimmage for robotics teams competing in states, held at Ashburn Library.",
    registrationUrl: "https://forms.gle/dSddFRwf2ig3AkqBA",
    image: "/outreach-events/coral-clash.png",
  },
  {
    name: "Bubble Brawl",
    season: "2024-2025",
    date: "January 4, 2025",
    location: "Ashburn Library",
    description:
      "Our solo-hosted second Into the Deep FTC scrimmage with 7 teams and 80+ attendees. Featured new audio and speaker system.",
    stats: {
      teams: "7",
      participants: "80+",
    },
    registrationUrl: "https://forms.gle/L3zvsWqHccdYYCZy6",
    image: "/outreach-events/bubble-brawl.png",
  },
  {
    name: "Submarine Showdown",
    season: "2024-2025",
    date: "November 17, 2024",
    location: "Ashburn Library",
    description:
      "Partnered with AlphaGo to host a scrimmage between rookie and veteran robotics teams.",
    registrationUrl: "https://forms.gle/7Hy3LFPQRKQ1aq1NA",
    image: "/outreach-events/submarine-showdown.png",
  },
];

const MARQUEE_ITEMS = [
  "ROBO KICKS",
  "CAD CAMP",
  "ROBO RUMBLE",
  "INTRO TO FIRST",
  "FTC SCRIMMAGE",
  "FAMILY STEM NIGHT",
  "MENTORING FLL",
  "OPEN-SOURCE WORKSHOP",
];

export default function OutreachPage() {
  const totalReach = PROGRAMS.reduce((acc, p) => acc + p.reach, 0);

  return (
    <>
      <PageHeader
        eyebrow="OUTREACH & IMPACT"
        crumb="Outreach"
        title={
          <>
            <span className="text-primary">OUTREACH</span>
          </>
        }
        description="A goal for the BeaverBots is to help educate our youth about the wonders of STEM. Our programs reach over 1,400 students every year across Loudoun County."
      />

      {/* Marquee program names */}
      <div
        aria-hidden
        className="border-y border-border bg-background overflow-hidden py-3"
      >
        <div className="flex w-max gap-12 animate-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((m, i) => (
            <span
              key={i}
              className="label-mono text-xs text-muted-foreground inline-flex items-center gap-12 whitespace-nowrap"
            >
              {m}
              <span aria-hidden className="h-1 w-1 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>

      {/* 1,400+ typographic moment — yearbook full-bleed page number */}
      <section className="py-16 lg:py-24 bg-background overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-8">
            <div className="lg:col-span-7">
              <div className="label-mono text-[11px] text-primary mb-3">
                Reach · 2024-26
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05]">
                Over <span className="text-primary">1,400 kids</span> reached.
                Every year.
              </h2>
            </div>
            <p className="lg:col-span-5 text-base text-muted-foreground leading-relaxed">
              The robot is the easy part. The harder part is making sure the
              next class of Ashburn engineers gets to start the same way we
              did: with a 3D-printed gear in their hands.
            </p>
          </div>

          <div className="border-t border-border pt-6 flex items-end justify-between gap-6">
            <div>
              <div className="label-mono text-[10px] text-muted-foreground mb-1">
                Kids served · all programs
              </div>
              <div className="label-mono text-[10px] text-muted-foreground">
                FY 2024-25 → FY 2025-26
              </div>
            </div>
            <div
              aria-label={`${totalReach}+ kids reached`}
              className="text-[clamp(5rem,14vw,11rem)] font-extrabold leading-[0.85] tracking-tighter text-primary"
            >
              <Counter value={totalReach} suffix="+" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 lg:py-16 border-y border-border bg-secondary/40">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="label-mono text-[11px] text-primary mb-3">
                Our Programs
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Five programs. One mission.
              </h2>
            </div>
            <Badge variant="outline" className="label-mono text-[10px] py-1">
              INDEX · 01 to 05
            </Badge>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROGRAMS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Reveal
                  key={p.name}
                  index={idx}
                  delay={70}
                  className={cn(idx === 0 && "sm:col-span-2", "h-full")}
                >
                  <Card className="group relative overflow-hidden border-border hover:border-primary/50 transition-colors h-full bg-background">
                    <div className="absolute top-5 left-6 label-mono text-[10px] text-muted-foreground">
                      {String(idx + 1).padStart(2, "0")} /{" "}
                      {String(PROGRAMS.length).padStart(2, "0")}
                    </div>
                    <CardContent className="p-6 pt-12 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-5">
                        <div className="h-14 w-14 rounded-2xl bg-accent border border-border flex items-center justify-center text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-primary/70 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge
                          variant="secondary"
                          className="label-mono text-[10px]"
                        >
                          <Users2 className="h-3 w-3 mr-1" />
                          {p.audience}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="label-mono text-[10px]"
                        >
                          <Calendar className="h-3 w-3 mr-1" />
                          {p.cadence}
                        </Badge>
                      </div>
                      <h3 className="font-extrabold text-xl tracking-tight mb-2">
                        {p.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {p.description}
                      </p>
                      <div className="mt-5 pt-4 border-t border-border flex items-baseline justify-between">
                        <span className="label-mono text-[10px] text-muted-foreground">
                          Kids reached
                        </span>
                        <span className="font-mono text-sm font-bold tabular-nums text-primary">
                          {p.reach.toLocaleString()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="label-mono text-[11px] text-primary mb-3">
            Past Events
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8">
            Our journey in action.
          </h2>

          <Tabs defaultValue="2025-2026">
            <TabsList>
              <TabsTrigger value="2025-2026">2025-2026 Season</TabsTrigger>
              <TabsTrigger value="2024-2025">2024-2025 Season</TabsTrigger>
            </TabsList>

            <TabsContent value="2025-2026" className="mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {EVENTS.filter((e) => e.season === "2025-2026").map((event, index) => (
                  <Reveal key={event.name} index={index} delay={50} className="h-full">
                    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-colors h-full bg-background">
                      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                        <Image
                          src={event.image}
                          alt={event.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <Badge
                          variant="outline"
                          className="label-mono absolute top-3 left-3 text-[10px] bg-background/90 backdrop-blur-sm"
                        >
                          {event.date}
                        </Badge>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-extrabold text-lg tracking-tight mb-2">
                          {event.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {event.description}
                        </p>
                        {event.stats && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {event.stats.participants && (
                              <Badge variant="secondary" className="label-mono text-[10px]">
                                <Users2 className="h-3 w-3 mr-1" />
                                {event.stats.participants}
                              </Badge>
                            )}
                            {event.stats.teams && (
                              <Badge variant="secondary" className="label-mono text-[10px]">
                                {event.stats.teams} Teams
                              </Badge>
                            )}
                            {event.stats.games && (
                              <Badge variant="secondary" className="label-mono text-[10px]">
                                {event.stats.games} Games
                              </Badge>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="2024-2025" className="mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {EVENTS.filter((e) => e.season === "2024-2025").map((event, index) => (
                  <Reveal key={event.name} index={index} delay={50} className="h-full">
                    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-colors h-full bg-background">
                      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                        <Image
                          src={event.image}
                          alt={event.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <Badge
                          variant="outline"
                          className="label-mono absolute top-3 left-3 text-[10px] bg-background/90 backdrop-blur-sm"
                        >
                          {event.date}
                        </Badge>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-extrabold text-lg tracking-tight mb-2">
                          {event.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {event.description}
                        </p>
                        {event.stats && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {event.stats.participants && (
                              <Badge variant="secondary" className="label-mono text-[10px]">
                                <Users2 className="h-3 w-3 mr-1" />
                                {event.stats.participants}
                              </Badge>
                            )}
                            {event.stats.teams && (
                              <Badge variant="secondary" className="label-mono text-[10px]">
                                {event.stats.teams} Teams
                              </Badge>
                            )}
                            {event.stats.games && (
                              <Badge variant="secondary" className="label-mono text-[10px]">
                                {event.stats.games} Games
                              </Badge>
                            )}
                          </div>
                        )}
                        {event.registrationUrl && (
                          <Link
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                          >
                            View Registration
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        )}
                      </CardContent>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="container-px mx-auto max-w-4xl">
          <Card className="border-primary/30 shadow-paper">
            <CardContent className="p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between">
              <div className="flex-1">
                <div className="label-mono text-[10px] text-primary mb-2">
                  Want to host us?
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
                  Bring the BeaverBots to your school.
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We do free demos, workshops, and Q&amp;A sessions across
                  Loudoun County. Just email us.
                </p>
              </div>
              <Link
                href="mailto:beaverbotsftc@gmail.com"
                className={cn(buttonVariants({ size: "lg" }), "group")}
              >
                Email us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
