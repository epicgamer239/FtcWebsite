import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Blocks, Cog, Cpu, ArrowUpRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FIRST · BeaverBots FTC",
  description:
    "Learn about FIRST LEGO League, FIRST Tech Challenge, and FIRST Robotics Competition.",
};

const PROGRAMS = [
  {
    id: "fll",
    short: "FLL",
    name: "FIRST LEGO League",
    age: "Ages 4-16",
    icon: Blocks,
    description:
      "Hands-on STEM for the youngest builders. Kids design, build, and program LEGO robots while solving real-world problems on a 4×8 table.",
    season: "FALL · SUBMERGED",
  },
  {
    id: "ftc",
    short: "FTC",
    name: "FIRST Tech Challenge",
    age: "Grades 7-12",
    icon: Cog,
    description:
      "Where the BeaverBots live. Students build 18-inch robots from machined metal, custom prints, and 6+ motors, competing on alliances of two.",
    season: "2025-26 · INTO THE DEEP",
    featured: true,
  },
  {
    id: "frc",
    short: "FRC",
    name: "FIRST Robotics Competition",
    age: "Grades 9-12",
    icon: Cpu,
    description:
      "The varsity sport for the mind. 120-lb industrial-grade robots competing at full court. Many of our seniors graduate into FRC programs.",
    season: "2026 · REEFSCAPE",
  },
];

const STATS = [
  { v: "1M+", l: "Students worldwide", note: "Across all FIRST programs" },
  { v: "110+", l: "Countries", note: "Where FIRST runs events" },
  { v: "60K+", l: "Mentors", note: "Volunteer engineers and coaches" },
  { v: "$80M", l: "In scholarships", note: "Awarded annually by FIRST partners" },
];

type CompareRow = {
  spec: string;
  fll: string;
  ftc: string;
  frc: string;
};

const COMPARE: CompareRow[] = [
  {
    spec: "Age range",
    fll: "Ages 4-16",
    ftc: "Grades 7-12",
    frc: "Grades 9-12",
  },
  {
    spec: "Robot footprint",
    fll: "Fits on a 4 × 8 ft table",
    ftc: "18 × 18 × 18 in cube",
    frc: "120 × 120 in full field",
  },
  {
    spec: "Weight limit",
    fll: "None (LEGO only)",
    ftc: "42 lb",
    frc: "125 lb",
  },
  {
    spec: "Build kit",
    fll: "LEGO Spike Prime",
    ftc: "REV / GoBilda metal",
    frc: "Industrial COTS + custom",
  },
  {
    spec: "Code language",
    fll: "SPIKE App / Python",
    ftc: "Kotlin / Java",
    frc: "Java / C++ / LabVIEW",
  },
  {
    spec: "Build season",
    fll: "8-10 weeks",
    ftc: "12-14 weeks",
    frc: "6 weeks",
  },
  {
    spec: "Alliance size",
    fll: "Solo",
    ftc: "2 robots",
    frc: "3 robots",
  },
];

export default function FirstPage() {
  return (
    <>
      <PageHeader
        eyebrow="THE PIPELINE"
        crumb="First"
        title={
          <>
            FIRST<sup className="text-3xl">®</sup>{" "}
            <span className="text-primary">for every age.</span>
          </>
        }
        description="FIRST is more than one competition. It's a K-12 pipeline that grows kids into engineers. Here's the journey, and where the BeaverBots fit in."
      >
        <Link
          href="https://www.firstinspires.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg", variant: "outline" }),
            "group"
          )}
        >
          firstinspires.org
          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </PageHeader>

      {/* Programs */}
      <section className="py-12 lg:py-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-5">
            {PROGRAMS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <HoverCard key={p.id}>
                  <HoverCardTrigger
                    render={
                      <Card
                        className={cn(
                          "group relative overflow-hidden border-border hover:border-primary/60 transition-colors cursor-help",
                          p.featured && "md:scale-[1.02] shadow-paper border-primary/60"
                        )}
                      />
                    }
                  >
                    {p.featured && (
                      <Badge className="label-mono absolute top-4 right-4 z-10 text-[10px]">
                        OUR PROGRAM
                      </Badge>
                    )}
                    <div className="border-b border-border bg-secondary/40 px-7 py-7 relative">
                      <div className="label-mono absolute top-3 left-7 text-[10px] text-muted-foreground">
                        0{idx + 1} / 03
                      </div>
                      <div className="relative h-32 mt-3 flex items-center justify-center">
                        <span className="text-7xl lg:text-8xl font-extrabold tracking-tight text-primary/10 group-hover:text-primary/15 transition-colors">
                          {p.short}
                        </span>
                        <Icon className="absolute h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <CardContent className="pt-6 pb-7 px-7">
                      <Badge
                        variant="outline"
                        className="label-mono text-[10px] mb-3"
                      >
                        {p.season}
                      </Badge>
                      <h3 className="text-xl font-extrabold tracking-tight mb-1">
                        {p.name}
                      </h3>
                      <div className="label-mono text-[10px] text-muted-foreground mb-3">
                        {p.age}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {p.description}
                      </p>
                      <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Hover for details
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-72">
                    <div className="font-bold text-base mb-1">{p.name}</div>
                    <div className="label-mono text-[10px] text-muted-foreground mb-2">
                      {p.age} · {p.season}
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {p.id === "fll" &&
                        "FLL kicks off the journey. Robots are built on a 4×8 ft table with LEGO Spike Prime kits, perfect for younger students learning the basics of coding and engineering."}
                      {p.id === "ftc" &&
                        "FTC is where mid-and-high-schoolers level up. Robots use real motors, custom 3D-printed parts, and code in Kotlin or Java. The BeaverBots compete here."}
                      {p.id === "frc" &&
                        "FRC is the highest tier. Industrial-grade robots that can weigh more than 100 lbs, competing in arenas with thousands of fans."}
                    </p>
                  </HoverCardContent>
                </HoverCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 lg:py-24 border-y border-border bg-secondary/40">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="label-mono text-[11px] text-primary mb-3">
                Side-by-Side
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Three programs, one ladder.
              </h2>
            </div>
            <Badge variant="outline" className="label-mono text-[10px]">
              SPEC SHEET · FY 2025-26
            </Badge>
          </div>

          <Card className="overflow-hidden bg-background">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="label-mono text-[10px] w-40">
                    Specification
                  </TableHead>
                  <TableHead className="label-mono text-[10px]">FLL</TableHead>
                  <TableHead className="label-mono text-[10px] text-primary bg-accent/40">
                    FTC · OUR PROGRAM
                  </TableHead>
                  <TableHead className="label-mono text-[10px]">FRC</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {COMPARE.map((row) => (
                  <TableRow key={row.spec} className="border-border">
                    <TableCell className="label-mono text-[10px] text-muted-foreground">
                      {row.spec}
                    </TableCell>
                    <TableCell className="text-sm">{row.fll}</TableCell>
                    <TableCell className="text-sm font-semibold bg-accent/30">
                      {row.ftc}
                    </TableCell>
                    <TableCell className="text-sm">{row.frc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* Global FIRST stats */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="label-mono text-[11px] text-primary mb-3">
            FIRST · Worldwide
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-10">
            The movement, in receipts.
          </h2>

          <dl className="grid grid-cols-2 lg:grid-cols-4 border border-border rounded-2xl overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-border">
            {STATS.map((s, i) => (
              <div key={s.l} className="p-6 lg:p-8 relative">
                <div className="label-mono absolute top-3 left-4 text-[10px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / 04
                </div>
                <dt className="label-mono text-[10px] text-muted-foreground mt-4">
                  {s.l}
                </dt>
                <dd className="mt-1 text-3xl lg:text-4xl font-extrabold tracking-tight text-primary leading-none tabular-nums">
                  {s.v}
                </dd>
                <div className="mt-2 text-xs text-muted-foreground">
                  {s.note}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
