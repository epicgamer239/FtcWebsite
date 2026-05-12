"use client";

import * as React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
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
  Sparkles,
  Calendar,
  Users2,
  MapPin,
  ArrowRight,
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

const PHOTOS = [
  "FTC Scrimmage · Nov 2025",
  "CAD Camp · Cohort 3",
  "Robo Kicks @ Lincoln ES",
  "Robo Rumble Finals",
  "Intro to FIRST · Ashburn Library",
  "Mentoring FLL Team",
  "Open Source Code Workshop",
  "Family STEM Night",
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
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    const onSelect = () => setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

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

      {/* Photo carousel + tabs */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-px mx-auto max-w-6xl">
          <div className="label-mono text-[11px] text-primary mb-3">
            Outreach Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8">
            See us in action.
          </h2>

          <Tabs defaultValue="photos">
            <TabsList>
              <TabsTrigger value="photos">
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                Photos
              </TabsTrigger>
              <TabsTrigger value="upcoming">
                <Calendar className="h-3.5 w-3.5 mr-1.5" />
                Upcoming Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="photos" className="mt-6">
              <Carousel
                setApi={setApi}
                opts={{ align: "start", loop: true }}
                className="mx-12"
              >
                <CarouselContent>
                  {PHOTOS.map((label, i) => (
                    <CarouselItem
                      key={label}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-secondary">
                        <Badge
                          variant="outline"
                          className="label-mono absolute top-3 left-3 text-[10px] bg-background"
                        >
                          PLATE · {String(i + 1).padStart(2, "0")}
                        </Badge>
                        <div className="absolute bottom-3 left-3 right-3 text-sm font-medium">
                          {label}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="label-mono mt-4 text-center text-[10px] text-muted-foreground tabular-nums">
                Plate {String(current).padStart(2, "0")} of{" "}
                {String(count).padStart(2, "0")}
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="mt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    date: "Nov 17",
                    name: "FTC Scrimmage",
                    place: "Ashburn Library",
                    time: "3:00 to 5:00 PM",
                  },
                  {
                    date: "Dec 03",
                    name: "Robo Kicks · Lincoln ES",
                    place: "Lincoln Elementary",
                    time: "After School",
                  },
                  {
                    date: "Jan 15",
                    name: "Intro to FIRST Night",
                    place: "Stone Bridge HS",
                    time: "6:30 PM",
                  },
                  {
                    date: "Mar 22",
                    name: "Robo Rumble",
                    place: "Loudoun Tech Center",
                    time: "All Day",
                  },
                ].map((e) => (
                  <Card key={e.name} className="border-border">
                    <CardContent className="p-5 flex gap-4">
                      <div className="h-16 w-16 rounded-xl bg-accent border border-border flex flex-col items-center justify-center text-primary shrink-0">
                        <span className="label-mono text-[9px]">
                          {e.date.split(" ")[0]}
                        </span>
                        <span className="text-xl font-extrabold">
                          {e.date.split(" ")[1]}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold">{e.name}</div>
                        <div className="mt-1 text-xs text-muted-foreground flex flex-wrap gap-x-3 gap-y-1">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {e.place}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {e.time}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
