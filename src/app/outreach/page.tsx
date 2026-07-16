"use client";

import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { PhotoCarousel } from "@/components/photo-carousel";
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
  Calendar,
  Users2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
  description: string;
  stats?: { participants?: string; teams?: string; games?: string };
  image: string;
  registrationUrl?: string;
};

const PROGRAMS: Program[] = [
  {
    name: "Robo Kicks",
    icon: Gamepad2,
    audience: "Elementary · K–5",
    cadence: "Weekly · After school",
    reach: 540,
    description:
      "A free intro to robotics for grade-schoolers. Sensors, motors, and hands-on building.",
  },
  {
    name: "CAD Camp",
    icon: Box,
    audience: "Middle school · 6–8",
    cadence: "Summer · 3-day intensive",
    reach: 96,
    description:
      "Onshape camp where students design robot parts and take home 3D-printed projects.",
  },
  {
    name: "Robo Rumble",
    icon: Swords,
    audience: "All ages",
    cadence: "Annual · Spring",
    reach: 380,
    description:
      "Community sumo-bot competition. Families build, compete, and connect with local STEM programs.",
  },
  {
    name: "Intro to FIRST",
    icon: GraduationCap,
    audience: "Parents & students",
    cadence: "Quarterly evenings",
    reach: 220,
    description:
      "Walkthrough of FLL, FTC, and FRC so families know what they're signing up for.",
  },
  {
    name: "FTC Scrimmage",
    icon: ClipboardList,
    audience: "Local FTC teams",
    cadence: "November · Annual",
    reach: 168,
    description:
      "Off-season scrimmage at the Ashburn Library for teams across the region.",
  },
];

const EVENTS: Event[] = [
  {
    name: "Girls in Robotics 2.0",
    season: "2025-2026",
    date: "September 2025",
    description:
      "Hands-on STEM for young women through building activities and engineering challenges.",
    image: "/outreach-events/girls-in-robotics-2-0.png",
  },
  {
    name: "Treasure Takedown Scrimmage",
    season: "2025-2026",
    date: "March 2026",
    description:
      "Invitational scrimmage with Chesapeake Regional Championship–qualified teams. 120+ participants, 5 teams.",
    stats: { participants: "120+", teams: "5" },
    image: "/outreach-events/treasure-takedown-scrimmage.png",
  },
  {
    name: "Fossil Faceoff Scrimmage",
    season: "2025-2026",
    date: "February 2026",
    description:
      "150+ participants and 9 teams from Northern Virginia and Maryland. 10+ practice matches.",
    stats: { participants: "150+", teams: "9", games: "10+" },
    image: "/outreach-events/fossil-faceoff-scrimmage.png",
  },
  {
    name: "Artifact Arena Scrimmage",
    season: "2025-2026",
    date: "January 2026",
    description:
      "First scrimmage of the season with 150+ participants and 7 teams.",
    stats: { participants: "150+", teams: "7", games: "8+" },
    image: "/outreach-events/artifact-arena-scrimmage.png",
  },
  {
    name: "Robo Rumble 2.0",
    season: "2025-2026",
    date: "Spring 2026",
    description:
      "Annual sumo-bot competition. Students design and iterate robots for tournament rounds.",
    image: "/outreach-events/robo-rumble-2-0.png",
  },
  {
    name: "Onshape CAD Camp",
    season: "2025-2026",
    date: "Summer 2025",
    description:
      "CAD camp at Brambleton Library. Students built name tags, LEGO bricks, and custom designs.",
    image: "/outreach-events/onshape-cad-camp.png",
  },
  {
    name: "RoboKicks STEM Camp",
    season: "2025-2026",
    date: "Summer 2025",
    description:
      "Summer camp covering robotics, FLL basics, and introductory AI topics.",
    image: "/outreach-events/robokicks-stem-camp.png",
  },
  {
    name: "Girls in Robotics",
    season: "2024-2025",
    date: "Fall 2024",
    description:
      "First outreach event of the 2024–25 season, introducing girls to STEM programs.",
    image: "/outreach-events/girls-in-robotics.png",
  },
  {
    name: "Coral Clash",
    season: "2024-2025",
    date: "February 1, 2025",
    description: "Scrimmage for teams competing in states, at Ashburn Library.",
    registrationUrl: "https://forms.gle/dSddFRwf2ig3AkqBA",
    image: "/outreach-events/coral-clash.png",
  },
  {
    name: "Bubble Brawl",
    season: "2024-2025",
    date: "January 4, 2025",
    description:
      "Into the Deep scrimmage with 7 teams and 80+ attendees at Ashburn Library.",
    stats: { teams: "7", participants: "80+" },
    registrationUrl: "https://forms.gle/L3zvsWqHccdYYCZy6",
    image: "/outreach-events/bubble-brawl.png",
  },
  {
    name: "Submarine Showdown",
    season: "2024-2025",
    date: "November 17, 2024",
    description:
      "Partnered with AlphaGo to host a scrimmage for rookie and veteran teams.",
    registrationUrl: "https://forms.gle/7Hy3LFPQRKQ1aq1NA",
    image: "/outreach-events/submarine-showdown.png",
  },
];

const PROGRAM_TAGS = [
  "ROBO KICKS",
  "CAD CAMP",
  "ROBO RUMBLE",
  "INTRO TO FIRST",
  "FTC SCRIMMAGE",
  "FAMILY STEM NIGHT",
  "MENTORING FLL",
  "OPEN-SOURCE WORKSHOP",
];

const HELP_PHOTOS = [
  {
    src: "/help/help1.jpg",
    alt: "BeaverBots helping kids at an outreach event",
  },
  {
    src: "/help/help2.jpg",
    alt: "Students learning robotics with BeaverBots mentors",
  },
  {
    src: "/help/help3.jpg",
    alt: "Hands-on STEM activity led by BeaverBots",
  },
  {
    src: "/help/help4.jpg",
    alt: "BeaverBots outreach in the community",
  },
] as const;

function EventGrid({ season }: { season: Event["season"] }) {
  const events = EVENTS.filter((e) => e.season === season);

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {events.map((event) => (
        <Card key={event.name} className="overflow-hidden border-border">
          <div className="relative h-40 bg-muted sm:h-44">
            <Image
              src={event.image}
              alt={event.name}
              fill
              className="object-contain p-1.5"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <CardContent className="p-3 sm:p-4">
            <h3 className="text-sm font-bold leading-snug sm:text-base">
              {event.name}
            </h3>
            <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {event.description}
            </p>
            {event.stats ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {event.stats.participants ? (
                  <Badge variant="secondary" className="text-[10px]">
                    <Users2 className="mr-1 h-3 w-3" />
                    {event.stats.participants}
                  </Badge>
                ) : null}
                {event.stats.teams ? (
                  <Badge variant="secondary" className="text-[10px]">
                    {event.stats.teams} teams
                  </Badge>
                ) : null}
                {event.stats.games ? (
                  <Badge variant="secondary" className="text-[10px]">
                    {event.stats.games} games
                  </Badge>
                ) : null}
              </div>
            ) : null}
            {event.registrationUrl ? (
              <Link
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline sm:text-sm"
              >
                Registration
                <ExternalLink className="h-3 w-3" />
              </Link>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function OutreachPage() {
  return (
    <>
      <PageHeader
        crumb="Outreach"
        title={
          <>
            <span className="text-primary">1,400+ kids</span> reached every year
          </>
        }
        description="We run free STEM programs across Loudoun County: camps, scrimmages, and school visits that get kids into robotics."
      />

      <div className="border-y border-border bg-background py-4">
        <div className="container-px mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2">
          {PROGRAM_TAGS.map((m) => (
            <span
              key={m}
              className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      <section className="py-14 lg:py-16">
        <div className="container-px mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="In the community"
            title="Real kids. Real programs."
            description="Photos from camps, scrimmages, and school visits across Loudoun County."
            className="mb-8"
          />
          <PhotoCarousel slides={HELP_PHOTOS} />
        </div>
      </section>

      <section className="border-t border-border py-14 lg:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Programs"
            title="Five programs we run"
            className="mb-10"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p) => {
              const Icon = p.icon;
              return (
                <Card
                  key={p.name}
                  className={cn(
                    "border-border",
                    p.name === "Robo Kicks" && "sm:col-span-2 lg:col-span-1"
                  )}
                >
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-accent text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <Badge variant="secondary">
                        <Users2 className="mr-1 h-3 w-3" />
                        {p.audience}
                      </Badge>
                      <Badge variant="outline">
                        <Calendar className="mr-1 h-3 w-3" />
                        {p.cadence}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <p className="mt-4 border-t border-border pt-4 text-sm">
                      <span className="text-muted-foreground">Kids reached: </span>
                      <span className="font-bold text-primary">
                        {p.reach.toLocaleString()}
                      </span>
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-14 lg:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Events"
            title="Past events"
            className="mb-8"
          />
          <Tabs defaultValue="2025-2026">
            <TabsList>
              <TabsTrigger value="2025-2026">2025–26 season</TabsTrigger>
              <TabsTrigger value="2024-2025">2024–25 season</TabsTrigger>
            </TabsList>
            <TabsContent value="2025-2026" className="mt-8">
              <EventGrid season="2025-2026" />
            </TabsContent>
            <TabsContent value="2024-2025" className="mt-8">
              <EventGrid season="2024-2025" />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-px mx-auto max-w-4xl">
          <Card className="border-primary/30">
            <CardContent className="flex flex-col items-start justify-between gap-6 p-8 lg:flex-row lg:items-center">
              <div>
                <h3 className="text-2xl font-bold">
                  Bring the BeaverBots to your school
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Free demos, workshops, and Q&amp;A sessions across Loudoun
                  County.
                </p>
              </div>
              <Link
                href="mailto:beaverbotsftc@gmail.com"
                className={cn(buttonVariants({ size: "lg" }), "gap-2 shrink-0")}
              >
                Email us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
