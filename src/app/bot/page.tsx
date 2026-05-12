import Link from "next/link";
import type { Metadata } from "next";
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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  Cpu,
  Gauge,
  Ruler,
  Battery,
  Weight,
  Eye,
  Hammer,
  Bot as BotIcon,
  Info,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Bot · BeaverBots FTC",
  description: "Meet DAM-1: the BeaverBots' 2025-26 FIRST Tech Challenge robot.",
};

const SPECS = [
  {
    icon: Ruler,
    label: "Footprint",
    value: "18 × 18 in",
    tip: "Per FTC rules. Robot fits inside an 18-inch starting cube.",
  },
  {
    icon: Weight,
    label: "Weight",
    value: "38.6 lbs",
    tip: "Weighed at our last scrimmage. Under the 42 lb FTC limit.",
  },
  {
    icon: Gauge,
    label: "Top Speed",
    value: "5.4 ft/s",
    tip: "Free-running speed on a Mecanum drive with 312 RPM motors.",
  },
  {
    icon: Battery,
    label: "Power",
    value: "12V LiPo",
    tip: "REV slim battery pack. About 2.5 matches per charge.",
  },
  {
    icon: Cpu,
    label: "Compute",
    value: "REV Control Hub",
    tip: "Plus a Limelight 3 co-processor for vision.",
  },
  {
    icon: Eye,
    label: "Vision",
    value: "AprilTag + YOLO",
    tip: "Custom-trained YOLO model on 3,800 samples from our practice field.",
  },
];

const HIGHLIGHTS = [
  {
    n: "01",
    title: "Custom 6061-aluminum chassis",
    detail: "CNC'd in-house on the team's Tormach 1100MX, anodized matte.",
  },
  {
    n: "02",
    title: "14 unique 3D-printed parts",
    detail: "All printed in PETG-CF on a Bambu X1C; 38 hours of total print time.",
  },
  {
    n: "03",
    title: "3,600+ lines of Kotlin",
    detail: "Driving FTC SDK, RoadRunner pathing, and the autonomous state machine.",
  },
  {
    n: "04",
    title: "78% autonomous accuracy",
    detail: "Measured across 84 practice runs against a regulation field.",
  },
];

const SUBSYSTEMS = [
  {
    name: "Mecanum Drivetrain",
    desc: "Field-centric driving with three-pod odometry and full PIDF tuning. We log at 50Hz.",
    tag: "Mobility",
  },
  {
    name: "Cascading Slides",
    desc: "Two-stage linear slides with tandem motors. 32 in. of reach in 0.8s flat.",
    tag: "Manipulation",
  },
  {
    name: "Active Intake",
    desc: "Compliant wheels with through-bore feedback for high-precision specimen grabbing.",
    tag: "Intake",
  },
  {
    name: "Vision Pipeline",
    desc: "AprilTag localization plus a YOLO classifier trained on 3,800 samples from our practice field.",
    tag: "Software",
  },
];

const REVISIONS = [
  { rev: "v3.1", date: "Oct 26", note: "Slide alignment tuning · matches budget" },
  { rev: "v3.0", date: "Oct 18", note: "Cascading slides retrofit · weight -2.1 lb" },
  { rev: "v2.4", date: "Sep 30", note: "Intake compliance wheels · grip +18%" },
  { rev: "v2.0", date: "Sep 12", note: "Field-centric driving · pose estimator live" },
  { rev: "v1.0", date: "Aug 28", note: "First powered run · DAM-1 christened" },
];

const HISTORY = [
  { name: "DAM-1", year: "2025-26", season: "Into The Deep" },
  { name: "TIMBER", year: "2024-25", season: "Centerstage" },
];

export default function BotPage() {
  return (
    <>
      <PageHeader
        eyebrow="THE BOT"
        crumb="Bot"
        title={
          <>
            Meet <span className="text-primary">DAM-1.</span>{" "}
            Our 2025-26 competition bot.
          </>
        }
        description="Engineered from the ground up in Onshape, validated through 6 prototypes, and tuned over 280+ hours of practice driving."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/sponsor#donate"
            className={cn(buttonVariants({ size: "lg" }), "group px-6 py-5")}
          >
            Help us upgrade DAM-1
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </PageHeader>

      <section className="py-12 lg:py-16">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-8 items-start">
          {/* CAD render */}
          <Card className="lg:col-span-7 overflow-hidden border-border bg-background">
            <div className="relative aspect-[4/3] bg-secondary/40 border-b border-border">
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center label-mono text-[10px] text-muted-foreground">
                <span className="text-primary">CAD-RENDER://DAM-1_v3.1</span>
                <Badge variant="outline" className="label-mono text-[10px]">
                  REV.3 · BUILD READY
                </Badge>
              </div>
              <div className="absolute inset-0 flex items-center justify-center px-12 py-14">
                <RobotIso className="w-full h-full" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between label-mono text-[10px] text-muted-foreground">
                <span>ORIGIN · 0,0,0</span>
                <span>SCALE · 1:8</span>
                <span>VIEW · ISO-NE</span>
              </div>
            </div>
            <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-border bg-secondary/30">
              {[
                { l: "Drawing", v: "DAM-1-A4" },
                { l: "Drafter", v: "MAYA R." },
                { l: "Date", v: "2025-10-26" },
                { l: "Sheet", v: "01 / 04" },
              ].map((b) => (
                <div key={b.l} className="text-center">
                  <div className="label-mono text-[9px] text-muted-foreground">
                    {b.l}
                  </div>
                  <div className="label-mono text-[11px] text-foreground">
                    {b.v}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Specs with Tooltip + Table */}
          <div className="lg:col-span-5 space-y-5">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BotIcon className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-lg">Technical Specs</h3>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      Hover any spec for context.
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Table>
                  <TableBody>
                    {SPECS.map((s) => {
                      const Icon = s.icon;
                      return (
                        <TableRow key={s.label} className="border-border">
                          <TableCell className="label-mono text-[10px] text-muted-foreground">
                            <span className="inline-flex items-center gap-2">
                              <Icon className="h-3.5 w-3.5 text-primary" />
                              {s.label}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Tooltip>
                              <TooltipTrigger
                                render={
                                  <span className="font-bold text-sm cursor-help underline decoration-dotted decoration-muted-foreground underline-offset-4" />
                                }
                              >
                                {s.value}
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                {s.tip}
                              </TooltipContent>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Hammer className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-lg">Build Highlights</h3>
                </div>
                <ul className="divide-y divide-border">
                  {HIGHLIGHTS.map((h) => (
                    <li key={h.n} className="py-3 first:pt-0 last:pb-0 flex gap-4">
                      <span className="label-mono text-[10px] text-primary w-6 shrink-0 mt-1 tabular-nums">
                        {h.n}
                      </span>
                      <div>
                        <div className="font-semibold text-sm">{h.title}</div>
                        <div className="text-xs text-muted-foreground leading-relaxed mt-1">
                          {h.detail}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Revision ledger */}
      <section className="py-12 lg:py-16 border-y border-border bg-secondary/40">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
            <div>
              <div className="label-mono text-[11px] text-primary mb-2">
                Revision Ledger
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
                The build log, in plain sight.
              </h2>
            </div>
            <Badge variant="outline" className="label-mono text-[10px]">
              5 ENTRIES · 9 WEEKS
            </Badge>
          </div>

          <Card className="overflow-hidden bg-background">
            <Table>
              <TableBody>
                {REVISIONS.map((r, i) => (
                  <TableRow key={r.rev} className="border-border">
                    <TableCell className="label-mono text-[10px] text-muted-foreground w-12 tabular-nums">
                      {String(REVISIONS.length - i).padStart(2, "0")}
                    </TableCell>
                    <TableCell className="font-mono text-sm font-bold text-primary w-20">
                      {r.rev}
                    </TableCell>
                    <TableCell className="label-mono text-[10px] text-muted-foreground w-24">
                      {r.date}
                    </TableCell>
                    <TableCell className="text-sm">{r.note}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* Subsystems / History Tabs */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="label-mono text-[11px] text-primary mb-3">
            Inside DAM-1
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-8">
            Subsystem deep dive.
          </h2>

          <Tabs defaultValue="subsystems">
            <TabsList>
              <TabsTrigger value="subsystems">Subsystems</TabsTrigger>
              <TabsTrigger value="history">Robot History</TabsTrigger>
            </TabsList>
            <TabsContent value="subsystems" className="mt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {SUBSYSTEMS.map((s, i) => (
                  <Card
                    key={s.name}
                    className="border-border hover:border-primary/40 transition-colors"
                  >
                    <CardContent className="p-5">
                      <div className="label-mono text-[10px] text-muted-foreground mb-3">
                        SUB / {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold">{s.name}</h4>
                        <Badge
                          variant="secondary"
                          className="label-mono text-[10px]"
                        >
                          {s.tag}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {s.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="history" className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {HISTORY.map((r) => (
                  <Card key={r.name} className="border-border">
                    <CardContent className="p-5">
                      <div className="label-mono text-[10px] text-primary mb-1">
                        {r.year}
                      </div>
                      <div className="font-bold text-lg">{r.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {r.season}
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Card className="border-dashed border-border opacity-60">
                  <CardContent className="p-5 text-center text-sm text-muted-foreground">
                    <span className="label-mono text-[10px] text-primary block mb-1">
                      COMING SOON
                    </span>
                    2026-27 season
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}

function RobotIso({ className }: { className?: string }) {
  // Engineering-drawing styled isometric. No fills with brand purple as paint —
  // the silhouette is line-art; purple is reserved for highlights and labels.
  const ink = "oklch(0.22 0.03 290)";
  const muted = "oklch(0.45 0.03 290)";
  const royal = "oklch(0.52 0.21 295)";

  return (
    <svg
      viewBox="0 0 560 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Faint isometric reference grid */}
      <g stroke="oklch(0.92 0.01 290)" strokeWidth="0.5">
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30 + 180} y2="360" />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`h${i}`} x1="560" y1={i * 30} x2="380" y2={i * 30 + 360} />
        ))}
      </g>

      {/* Chassis top */}
      <polygon
        points="140,210 240,255 340,210 240,165"
        fill="oklch(0.97 0.02 295)"
        stroke={ink}
        strokeWidth="1.4"
      />
      {/* Chassis left side */}
      <polygon
        points="140,210 240,255 240,290 140,245"
        fill="oklch(0.94 0.02 295)"
        stroke={ink}
        strokeWidth="1.4"
      />
      {/* Chassis right side */}
      <polygon
        points="340,210 240,255 240,290 340,245"
        fill="white"
        stroke={ink}
        strokeWidth="1.4"
      />

      {/* Wheels (mecanum) */}
      {[
        [155, 245],
        [225, 280],
        [325, 245],
        [255, 280],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <ellipse
            cx={cx}
            cy={cy}
            rx="18"
            ry="9"
            fill="white"
            stroke={ink}
            strokeWidth="1.4"
          />
          <ellipse
            cx={cx}
            cy={cy}
            rx="10"
            ry="5"
            fill="oklch(0.93 0.01 290)"
            stroke={ink}
            strokeWidth="0.8"
          />
        </g>
      ))}

      {/* Linear slides */}
      <polygon
        points="226,170 254,158 254,40 226,52"
        fill="oklch(0.96 0.01 290)"
        stroke={ink}
        strokeWidth="1.2"
      />
      <polygon
        points="254,158 254,40 262,38 262,156"
        fill="white"
        stroke={ink}
        strokeWidth="1.2"
      />
      {/* Slide rung markers */}
      {[60, 90, 120, 150].map((y, i) => (
        <line
          key={i}
          x1="228"
          y1={y}
          x2="252"
          y2={y - 6}
          stroke={royal}
          strokeWidth="1.6"
        />
      ))}

      {/* Intake at top */}
      <polygon
        points="208,52 268,28 290,40 230,64"
        fill="oklch(0.97 0.02 295)"
        stroke={ink}
        strokeWidth="1.2"
      />

      {/* Camera (Limelight) on top — small royal accent */}
      <rect
        x="246"
        y="42"
        width="14"
        height="8"
        fill={royal}
        stroke={ink}
        strokeWidth="0.8"
      />
      <circle cx="253" cy="46" r="1.6" fill="white" />

      {/* Center-line down the column */}
      <line
        x1="244"
        y1="38"
        x2="244"
        y2="175"
        stroke={royal}
        strokeWidth="0.6"
        strokeDasharray="3 3"
      />

      {/* Dimension: footprint width (18 in) */}
      <g>
        <line x1="140" y1="305" x2="340" y2="305" stroke={muted} strokeWidth="1" />
        <line x1="140" y1="298" x2="140" y2="312" stroke={muted} strokeWidth="1" />
        <line x1="340" y1="298" x2="340" y2="312" stroke={muted} strokeWidth="1" />
        <rect x="220" y="297" width="40" height="16" fill="white" />
        <text
          x="240"
          y="309"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          letterSpacing="0.12em"
          fill={ink}
        >
          18&quot;
        </text>
      </g>

      {/* Dimension: height (≈ 22 in) */}
      <g>
        <line x1="100" y1="40" x2="100" y2="250" stroke={muted} strokeWidth="1" />
        <line x1="93" y1="40" x2="107" y2="40" stroke={muted} strokeWidth="1" />
        <line x1="93" y1="250" x2="107" y2="250" stroke={muted} strokeWidth="1" />
        <rect x="80" y="138" width="40" height="14" fill="white" />
        <text
          x="100"
          y="148"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          letterSpacing="0.12em"
          fill={ink}
        >
          22&quot;
        </text>
      </g>

      {/* Callouts — fit within viewBox 560 with mono 8px text */}
      <g fontFamily="ui-monospace, monospace" fontSize="8" letterSpacing="0.1em">
        <line x1="262" y1="46" x2="380" y2="46" stroke={royal} strokeWidth="0.8" />
        <circle cx="262" cy="46" r="2" fill={royal} />
        <text x="384" y="44" fill={royal}>
          A · LIMELIGHT 3
        </text>
        <text x="384" y="56" fill={muted}>
          APRILTAG + YOLO
        </text>

        <line x1="252" y1="100" x2="400" y2="100" stroke={royal} strokeWidth="0.8" />
        <circle cx="252" cy="100" r="2" fill={royal} />
        <text x="404" y="98" fill={royal}>
          B · CASCADING SLIDES
        </text>
        <text x="404" y="110" fill={muted}>
          32&quot; REACH · 0.8 s
        </text>

        <line x1="240" y1="255" x2="400" y2="240" stroke={royal} strokeWidth="0.8" />
        <circle cx="240" cy="255" r="2" fill={royal} />
        <text x="404" y="238" fill={royal}>
          C · MECANUM DRIVE
        </text>
        <text x="404" y="250" fill={muted}>
          5.4 ft/s · 312 RPM
        </text>
      </g>
    </svg>
  );
}
