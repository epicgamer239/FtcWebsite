import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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

export const metadata: Metadata = {
  title: "About · BeaverBots FTC",
  description:
    "Meet the BeaverBots: a second-year FIRST Tech Challenge team from Ashburn, VA.",
};

const FACTS = [
  { icon: MapPin, label: "Location", value: "Ashburn, VA" },
  { icon: Calendar, label: "Founded", value: "2024 · 2nd season" },
  { icon: Users2, label: "Team size", value: "12 students" },
  { icon: Hammer, label: "Program", value: "FIRST Tech Challenge" },
];

const VALUES = [
  {
    icon: Hammer,
    title: "Engineering excellence",
    body: "We CAD, machine, print, and iterate until the robot earns its place on the field.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "Custom mechanisms, autonomous routines, and vision pipelines built by students.",
  },
  {
    icon: HeartHandshake,
    title: "Gracious professionalism",
    body: "We compete hard, support other teams, and represent our school and sponsors well.",
  },
  {
    icon: Compass,
    title: "Student-led",
    body: "Students design the robot, write the code, and run outreach. Mentors guide; students lead.",
  },
];

const MEMBERS = [
  { name: "Maya R.", role: "Captain · Mechanical lead", grade: "Senior" },
  { name: "Devon P.", role: "Programming lead", grade: "Junior" },
  { name: "Aisha K.", role: "Electrical & controls", grade: "Senior" },
  { name: "Lucas T.", role: "CAD & manufacturing", grade: "Junior" },
  { name: "Priya S.", role: "Outreach director", grade: "Senior" },
  { name: "Jordan R.", role: "Driver · strategy", grade: "Senior" },
];

const SEASONS = [
  {
    when: "2024",
    title: "Rookie year",
    detail:
      "Six students and a borrowed 3D printer. We built our first robot, TIMBER, and learned how an FTC team runs.",
    badge: "Founded",
  },
  {
    when: "2024–25",
    title: "Centerstage",
    detail:
      "First full competition season. Inspire Award nomination at a Loudoun qualifier.",
    badge: "Season 1",
  },
  {
    when: "2025–26",
    title: "Into the Deep",
    detail:
      "Twelve students, in-house CNC, and DAM-1 — mecanum drive, cascading slides, and 78% autonomous accuracy.",
    badge: "Worlds qualifier",
    current: true,
  },
  {
    when: "Apr 2026",
    title: "Houston, TX",
    detail:
      "First Worlds Championship. Competing against the best FTC teams in the world.",
    badge: "Goal",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        crumb="About"
        title={
          <>
            A serious FTC team from{" "}
            <span className="text-primary">Ashburn, Virginia</span>
          </>
        }
        description="Twelve students in grades 8–12 who design, build, and program competition robots — and run outreach programs that reach over 1,400 kids a year."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/bot" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
            Meet our robot
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/outreach"
            className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          >
            See our outreach
          </Link>
        </div>
      </PageHeader>

      <section className="border-b border-border py-10">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">
          {FACTS.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{f.label}</p>
                  <p className="font-bold">{f.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we stand for"
            title="More than a robotics team"
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <Card key={v.title} className="border-border">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-accent text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {v.body}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-16 lg:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our story"
            title="Two seasons, steady growth"
            className="mb-10"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SEASONS.map((s) => (
              <Card
                key={s.when}
                className={cn(
                  "border-border bg-background",
                  s.current && "border-primary"
                )}
              >
                <CardContent className="p-5">
                  <p className="text-sm font-medium text-primary">{s.when}</p>
                  <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                  <Badge variant="outline" className="mt-2">
                    {s.badge}
                  </Badge>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Team"
            title="12 students. One robot."
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MEMBERS.map((m) => (
              <Card key={m.name} className="border-border">
                <CardContent className="flex items-center gap-4 p-5">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-accent font-bold text-primary">
                      {m.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold">{m.name}</p>
                    <p className="text-xs text-muted-foreground">{m.role}</p>
                  </div>
                  <Badge variant="secondary">{m.grade}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-10" />

          <p className="mb-4 text-sm font-semibold">Mentors & coaches</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { n: "Ms. Lopez", r: "Head coach · Physics" },
              { n: "Dr. Singh", r: "Mentor · Boeing" },
              { n: "Mr. Chen", r: "Mentor · Microsoft" },
            ].map((m) => (
              <div
                key={m.n}
                className="flex items-center gap-4 rounded-lg border border-border p-4"
              >
                <Avatar className="h-11 w-11">
                  <AvatarFallback className="bg-accent font-bold text-primary">
                    {m.n
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">{m.n}</p>
                  <p className="text-xs text-muted-foreground">{m.r}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 lg:py-20">
        <div className="container-px mx-auto max-w-3xl text-center">
          <Rocket className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h2 className="text-2xl font-bold lg:text-3xl">
            Empowering STEM in our community
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Our mission is to give students real engineering experience and bring
            robotics programs to families across Loudoun County.
          </p>
          <Link
            href="/sponsor#donate"
            className={cn(buttonVariants({ size: "lg" }), "mt-7 gap-2")}
          >
            Help us get to Worlds
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
