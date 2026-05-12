import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Check,
  ArrowRight,
  HandCoins,
  Sparkles,
  Heart,
  Mail,
  TrendingUp,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DonationImpact } from "@/components/donation-impact";
import { Counter } from "@/components/counter";

export const metadata: Metadata = {
  title: "Sponsor · BeaverBots FTC",
  description:
    "Sponsor or donate to the BeaverBots. Help send our team to the 2026 FIRST Worlds Championship.",
};

const TIERS = [
  {
    name: "Sapling",
    amount: "$100",
    perks: ["Thank-you on social media", "Team newsletter updates"],
  },
  {
    name: "Branch",
    amount: "$500",
    perks: [
      "Everything in Sapling",
      "Logo on team t-shirts",
      "Recognition at scrimmage events",
    ],
  },
  {
    name: "Dam Builder",
    amount: "$1,500",
    perks: [
      "Everything in Branch",
      "Logo on the robot",
      "Logo on competition banner",
      "Studio tour invitation",
    ],
    featured: true,
  },
  {
    name: "River Champion",
    amount: "$5,000+",
    perks: [
      "Everything in Dam Builder",
      "Naming rights to a subsystem",
      "Custom robot demo at your office",
      "Year-round STEM partnership",
    ],
  },
];

const CURRENT_SPONSORS = [
  {
    name: "Lockheed Martin",
    tier: "River Champion",
    note: "Defense & aerospace · supports CAD tooling & travel",
  },
  {
    name: "Northrop Grumman",
    tier: "Dam Builder",
    note: "Mentorship plus sponsorship since rookie season",
  },
  { name: "MITRE", tier: "Dam Builder", note: "Engineering mentor pipeline" },
  { name: "REV Robotics", tier: "Branch", note: "Hardware partner" },
  { name: "GoBilda", tier: "Branch", note: "Drivetrain components" },
  { name: "Onshape", tier: "Sapling", note: "Education licensing" },
];

const BUDGET_ROWS = [
  { label: "Worlds registration", amount: "$6,000", percent: 30 },
  { label: "Travel · 12 students + 3 coaches", amount: "$5,400", percent: 27 },
  { label: "Hotel · 5 nights, Houston", amount: "$4,200", percent: 21 },
  { label: "Parts, electronics, spares", amount: "$2,800", percent: 14 },
  { label: "Pit display & branding", amount: "$1,000", percent: 5 },
  { label: "Food & ground transport", amount: "$600", percent: 3 },
];

export default function SponsorPage() {
  return (
    <>
      <PageHeader
        eyebrow="PARTNER WITH US"
        crumb="Sponsor"
        title={
          <>
            Help us get to <span className="text-primary">Worlds.</span>
          </>
        }
        description="Robots aren't cheap, and neither is sending 12 students from Virginia to Texas. Every sponsor is a mentor, a champion, and the reason this program exists."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            id="donate"
            href="https://www.gofundme.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "px-6 py-5 text-base group bg-primary hover:bg-primary/90"
            )}
          >
            <Heart className="h-4 w-4" />
            Donate Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="mailto:beaverbotsftc@gmail.com?subject=Sponsorship%20Inquiry"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "px-6 py-5 text-base"
            )}
          >
            <Mail className="h-4 w-4" />
            Email Sponsorship
          </Link>
        </div>
      </PageHeader>

      {/* Worlds fund progress */}
      <section className="pb-12">
        <div className="container-px mx-auto max-w-4xl">
          <Card className="border-primary/30 shadow-paper">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="h-12 w-12 rounded-xl bg-accent border border-border flex items-center justify-center text-primary shrink-0">
                  <HandCoins className="h-5 w-5" />
                </div>
                <div>
                  <div className="label-mono text-[10px] text-primary">
                    2026 Worlds Travel Fund
                  </div>
                  <div className="text-2xl lg:text-3xl font-extrabold tracking-tight tabular-nums">
                    $<Counter value={13650} /> of $20,000
                  </div>
                </div>
              </div>

              <Progress value={68} aria-label="Worlds Travel Fund">
                <ProgressLabel className="label-mono text-[10px]">
                  Funded
                </ProgressLabel>
                <ProgressValue className="font-mono text-xs" />
              </Progress>

              <div className="label-mono mt-3 flex justify-between text-[10px] text-muted-foreground">
                <span>68% raised</span>
                <span>$6,350 to go</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Donation Impact Calculator */}
      <section className="pb-16 lg:pb-24">
        <div className="container-px mx-auto max-w-4xl">
          <DonationImpact />
        </div>
      </section>

      {/* Budget breakdown */}
      <section className="py-16 lg:py-20 border-y border-border bg-secondary/40">
        <div className="container-px mx-auto max-w-5xl">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
            <div>
              <div className="label-mono text-[11px] text-primary mb-2">
                Where every dollar goes
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
                Transparent budget.
              </h2>
            </div>
            <Badge variant="outline" className="label-mono text-[10px]">
              <Shield className="h-3 w-3 mr-1.5" />
              501(c)(3) · Tax deductible
            </Badge>
          </div>

          <Card className="overflow-hidden bg-background">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="label-mono text-[10px] w-16">
                    No.
                  </TableHead>
                  <TableHead className="label-mono text-[10px]">
                    Line Item
                  </TableHead>
                  <TableHead className="label-mono text-[10px] w-32 hidden sm:table-cell">
                    Allocation
                  </TableHead>
                  <TableHead className="label-mono text-right text-[10px] w-32">
                    Cost
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {BUDGET_ROWS.map((b, i) => (
                  <TableRow key={b.label}>
                    <TableCell className="label-mono text-[10px] text-muted-foreground tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </TableCell>
                    <TableCell className="font-medium">{b.label}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 flex-1 rounded-full bg-secondary overflow-hidden max-w-24">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${b.percent}%` }}
                            aria-hidden
                          />
                        </div>
                        <span className="label-mono text-[10px] text-muted-foreground tabular-nums w-8 text-right">
                          {b.percent}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right tabular-nums font-mono">
                      {b.amount}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="border-t-2 border-primary/40">
                  <TableCell className="label-mono text-[10px] text-primary">
                    Σ
                  </TableCell>
                  <TableCell className="font-bold">Total</TableCell>
                  <TableCell className="hidden sm:table-cell label-mono text-[10px] text-muted-foreground">
                    FY 2025-26
                  </TableCell>
                  <TableCell className="text-right tabular-nums font-mono font-bold text-primary">
                    $20,000
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* Current sponsors */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container-px mx-auto max-w-6xl">
          <div className="label-mono text-[11px] text-primary mb-3 text-center">
            Current partners
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-center mb-10">
            Thank you to our sponsors.
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {CURRENT_SPONSORS.map((s) => (
              <HoverCard key={s.name}>
                <HoverCardTrigger
                  render={
                    <button
                      type="button"
                      className="h-20 rounded-xl border border-border bg-background flex flex-col items-center justify-center px-3 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors cursor-help"
                    />
                  }
                >
                  <span className="truncate w-full text-center">{s.name}</span>
                  <span className="label-mono text-[9px] text-primary mt-1">
                    {s.tier}
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="w-72">
                  <div className="font-bold mb-1">{s.name}</div>
                  <Badge
                    variant="secondary"
                    className="label-mono text-[10px] mb-2"
                  >
                    {s.tier} sponsor
                  </Badge>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {s.note}
                  </p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-16 lg:py-24 border-t border-border bg-secondary/40">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="label-mono text-[11px] text-primary mb-3">
              Sponsorship Tiers
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Choose your tier.
            </h2>
            <p className="mt-4 text-base lg:text-lg text-muted-foreground">
              Every tier is a tax-deductible donation to our 501(c)(3).
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIERS.map((t, i) => (
              <Card
                key={t.name}
                className={cn(
                  "relative flex flex-col transition-all bg-background",
                  t.featured
                    ? "border-primary/60 shadow-paper lg:-translate-y-2"
                    : "border-border hover:border-primary/40 hover:-translate-y-0.5"
                )}
              >
                {t.featured && (
                  <Badge className="label-mono absolute -top-3 left-1/2 -translate-x-1/2">
                    <Sparkles className="h-3 w-3 mr-1" />
                    MOST POPULAR
                  </Badge>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="label-mono text-[10px] text-muted-foreground mb-3">
                    TIER {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-bold text-lg">{t.name}</div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold tracking-tight">
                      {t.amount}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      / season
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2.5 text-sm flex-1">
                    {t.perks.map((p) => (
                      <li key={p} className="flex gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="mailto:beaverbotsftc@gmail.com?subject=Sponsorship%20Inquiry"
                    className={cn(
                      buttonVariants({
                        variant: t.featured ? "default" : "outline",
                      }),
                      "mt-6"
                    )}
                  >
                    Become a sponsor
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-px mx-auto max-w-4xl">
          <Card className="border-primary/30 overflow-hidden shadow-paper">
            <CardContent className="p-8 lg:p-12 text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-3">
                Help write the next chapter.
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The BeaverBots went from rookie team to Worlds qualifiers in
                two years. With your support, we can keep that trajectory and
                inspire the next class of Ashburn engineers.
              </p>
              <div className="mt-6 flex justify-center gap-3 flex-wrap">
                <Link
                  href="https://www.gofundme.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "lg" }), "group")}
                >
                  <Heart className="h-4 w-4" />
                  Donate today
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="mailto:beaverbotsftc@gmail.com"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" })
                  )}
                >
                  <Mail className="h-4 w-4" />
                  beaverbotsftc@gmail.com
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
