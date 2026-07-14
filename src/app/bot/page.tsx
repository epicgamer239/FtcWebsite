import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Cpu,
  Gauge,
  Ruler,
  Battery,
  Weight,
  Eye,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Bot · BeaverBots FTC",
  description: "Meet DAM-1, the BeaverBots 2025–26 FIRST Tech Challenge robot.",
};

const SPECS = [
  { icon: Ruler, label: "Size", value: "18 × 18 in", tip: "Fits in the FTC starting cube." },
  { icon: Weight, label: "Weight", value: "38.6 lbs", tip: "Under the 42 lb limit." },
  { icon: Gauge, label: "Top speed", value: "5.4 ft/s", tip: "Mecanum drive, 312 RPM motors." },
  { icon: Battery, label: "Battery", value: "12V LiPo", tip: "REV slim battery pack." },
  { icon: Cpu, label: "Control", value: "REV Control Hub", tip: "With Limelight 3 for vision." },
  { icon: Eye, label: "Vision", value: "AprilTags + ML", tip: "Custom-trained object detector." },
];

const HIGHLIGHTS = [
  "Custom CNC aluminum chassis, built in-house",
  "14 student-designed 3D-printed parts (PETG-CF)",
  "3,600+ lines of Kotlin for tele-op and autonomous",
  "78% autonomous scoring in practice matches",
];

const SUBSYSTEMS = [
  {
    name: "Mecanum drivetrain",
    desc: "Field-centric drive with odometry and PID tuning.",
    tag: "Mobility",
  },
  {
    name: "Cascading slides",
    desc: "Two-stage slides with 32 in. of reach in under one second.",
    tag: "Manipulation",
  },
  {
    name: "Active intake",
    desc: "Compliant wheels for reliable game-piece pickup.",
    tag: "Intake",
  },
  {
    name: "Vision stack",
    desc: "AprilTag localization plus on-field object detection.",
    tag: "Software",
  },
];

const HISTORY = [
  { name: "DAM-1", year: "2025–26", season: "Into the Deep" },
  { name: "TIMBER", year: "2024–25", season: "Centerstage" },
];

export default function BotPage() {
  return (
    <>
      <PageHeader
        eyebrow="Robot"
        crumb="Bot"
        title={
          <>
            Meet <span className="text-primary">DAM-1</span>
          </>
        }
        description="Our 2025–26 competition robot. Designed in Onshape, built in our shop, and programmed in Kotlin by students on the team."
      >
        <Link href="/sponsor#donate" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
          Support the robot
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHeader>

      <section className="py-12 lg:py-16">
        <div className="container-px mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <Card className="overflow-hidden border-border">
            <div className="flex aspect-[4/3] items-center justify-center bg-muted/50 p-8">
              <RobotIllustration className="max-h-full w-full max-w-md" />
            </div>
            <CardContent className="border-t border-border p-4 text-center text-sm text-muted-foreground">
              DAM-1 · Into the Deep · 2025–26 season
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-bold">Specifications</h3>
                <Table>
                  <TableBody>
                    {SPECS.map((s) => {
                      const Icon = s.icon;
                      return (
                        <TableRow key={s.label}>
                          <TableCell className="text-muted-foreground">
                            <span className="inline-flex items-center gap-2">
                              <Icon className="h-4 w-4 text-primary" />
                              {s.label}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Tooltip>
                              <TooltipTrigger
                                render={
                                  <span className="cursor-help font-semibold underline decoration-dotted underline-offset-4" />
                                }
                              >
                                {s.value}
                              </TooltipTrigger>
                              <TooltipContent>{s.tip}</TooltipContent>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold">Build highlights</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {HIGHLIGHTS.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-14 lg:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading title="Robot details" className="mb-8" />
          <Tabs defaultValue="subsystems">
            <TabsList>
              <TabsTrigger value="subsystems">Subsystems</TabsTrigger>
              <TabsTrigger value="history">Past robots</TabsTrigger>
            </TabsList>
            <TabsContent value="subsystems" className="mt-6 grid gap-4 sm:grid-cols-2">
              {SUBSYSTEMS.map((s) => (
                <Card key={s.name} className="border-border bg-background">
                  <CardContent className="p-5">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <h4 className="font-semibold">{s.name}</h4>
                      <Badge variant="secondary">{s.tag}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="history" className="mt-6 grid gap-4 sm:grid-cols-3">
              {HISTORY.map((r) => (
                <Card key={r.name} className="border-border bg-background">
                  <CardContent className="p-5">
                    <p className="text-sm font-medium text-primary">{r.year}</p>
                    <p className="text-lg font-bold">{r.name}</p>
                    <p className="text-sm text-muted-foreground">{r.season}</p>
                  </CardContent>
                </Card>
              ))}
              <Card className="border-dashed border-border bg-transparent">
                <CardContent className="p-5 text-sm text-muted-foreground">
                  Next robot: 2026–27 season
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}

function RobotIllustration({ className }: { className?: string }) {
  const ink = "oklch(0.35 0.08 295)";
  const royal = "oklch(0.52 0.21 295)";

  return (
    <svg viewBox="0 0 400 280" fill="none" className={className} aria-hidden>
      <rect width="400" height="280" fill="oklch(0.97 0.01 290)" rx="8" />
      <polygon
        points="120,160 200,200 280,160 200,120"
        fill="oklch(0.94 0.03 295)"
        stroke={ink}
        strokeWidth="1.5"
      />
      <polygon
        points="200,120 240,100 240,40 200,55"
        fill="white"
        stroke={ink}
        strokeWidth="1.2"
      />
      {[
        [140, 175],
        [200, 205],
        [260, 175],
      ].map(([cx, cy], i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="16"
          ry="8"
          fill="white"
          stroke={ink}
          strokeWidth="1.2"
        />
      ))}
      <text
        x="200"
        y="250"
        textAnchor="middle"
        fontSize="11"
        fill={royal}
        fontFamily="system-ui,sans-serif"
        fontWeight="600"
      >
        DAM-1
      </text>
    </svg>
  );
}
