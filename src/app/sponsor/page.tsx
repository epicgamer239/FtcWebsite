import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
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
  Heart,
  Mail,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DonationImpact } from "@/components/donation-impact";

export const metadata: Metadata = {
  title: "Sponsor · BeaverBots FTC",
  description:
    "Sponsor or donate to the BeaverBots. Help send our team to the 2026 FIRST World Championship.",
};

const TIERS = [
  {
    name: "Bronze",
    amount: "$500",
    perks: ["Thank-you on social media", "Team newsletter updates"],
  },
  {
    name: "Gold",
    amount: "$1,500",
    perks: [
      "Everything in Bronze",
      "Logo on team t-shirts",
      "Recognition at scrimmage events",
    ],
  },
  {
    name: "BeaverDam",
    amount: "$2,000",
    perks: [
      "Everything in Gold",
      "Logo on the robot",
      "Logo on competition banner",
      "Studio tour invitation",
    ],
    featured: true,
  },
];

const CURRENT_SPONSORS = [
  { name: "Reinvent", tier: "BeaverDam", logo: "/sponsor-logos/reinvent.png" },
  {
    name: "22nd Century Technologies",
    tier: "BeaverDam",
    logo: "/sponsor-logos/22nd-century-technologies.png",
  },
  { name: "Maruthi.AI", tier: "BeaverDam", logo: "/sponsor-logos/maruthiai.png" },
  { name: "ICF", tier: "BeaverDam", logo: "/sponsor-logos/icf.png" },
  { name: "CVS", tier: "BeaverDam", logo: "/sponsor-logos/cvs.png" },
  { name: "Apple", tier: "BeaverDam", logo: "/sponsor-logos/apple.png" },
  { name: "Thai Ashburn", tier: "Gold", logo: "/sponsor-logos/thai-ashburn.png" },
  { name: "Ohane Poke", tier: "Gold", logo: "/sponsor-logos/ohane-poke.png" },
  {
    name: "Element Solutions",
    tier: "Bronze",
    logo: "/sponsor-logos/element-solutions.png",
  },
  {
    name: "Golden Rule Builders",
    tier: "Bronze",
    logo: "/sponsor-logos/golden-rule-builders.png",
  },
  { name: "Groundswell", tier: "Bronze", logo: "/sponsor-logos/groundswell.png" },
  { name: "Rapidflare", tier: "Bronze", logo: "/sponsor-logos/rapidflare.png" },
  { name: "Unison", tier: "Bronze", logo: "/sponsor-logos/unison.png" },
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
        eyebrow="Sponsor"
        crumb="Sponsor"
        title={
          <>
            Help us get to <span className="text-primary">Worlds</span>
          </>
        }
        description="Sending 12 students from Virginia to Houston takes real money. Every sponsor helps us compete at the highest level and keep our outreach programs running."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            id="donate"
            href="https://www.gofundme.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            <Heart className="h-4 w-4" />
            Donate now
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:beaverbotsftc@gmail.com?subject=Sponsorship%20Inquiry"
            className={cn(buttonVariants({ size: "lg", variant: "outline" }), "gap-2")}
          >
            <Mail className="h-4 w-4" />
            Email us
          </Link>
        </div>
      </PageHeader>

      <section className="pb-12">
        <div className="container-px mx-auto max-w-4xl">
          <Card className="border-primary/30">
            <CardContent className="p-8">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-accent text-primary">
                  <HandCoins className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary">
                    2026 Worlds travel fund
                  </p>
                  <p className="text-2xl font-bold tabular-nums lg:text-3xl">
                    $13,650 of $20,000
                  </p>
                </div>
              </div>
              <Progress value={68} aria-label="Worlds travel fund">
                <ProgressLabel className="text-sm">Funded</ProgressLabel>
                <ProgressValue className="text-xs" />
              </Progress>
              <p className="mt-2 text-sm text-muted-foreground">
                $6,350 to go · 68% raised
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-px mx-auto max-w-4xl">
          <DonationImpact />
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-16">
        <div className="container-px mx-auto max-w-5xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <SectionHeading
              eyebrow="Budget"
              title="Where every dollar goes"
            />
            <Badge variant="outline" className="gap-1.5">
              <Shield className="h-3 w-3" />
              501(c)(3) · Tax deductible
            </Badge>
          </div>
          <Card className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Line item</TableHead>
                  <TableHead className="hidden w-28 sm:table-cell">Share</TableHead>
                  <TableHead className="w-28 text-right">Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {BUDGET_ROWS.map((b) => (
                  <TableRow key={b.label}>
                    <TableCell className="font-medium">{b.label}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 max-w-24 flex-1 overflow-hidden rounded-full bg-secondary">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${b.percent}%` }}
                            aria-hidden
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {b.percent}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium tabular-nums">
                      {b.amount}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="border-t-2 border-primary/30">
                  <TableCell className="font-bold">Total</TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">
                    FY 2025–26
                  </TableCell>
                  <TableCell className="text-right font-bold text-primary tabular-nums">
                    $20,000
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Partners"
            title="Thank you to our sponsors"
            align="center"
            className="mb-10"
          />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {CURRENT_SPONSORS.map((s) => (
              <Card key={s.name} className="border-border">
                <div className="relative flex aspect-[2/1] items-center justify-center bg-muted p-4">
                  <Image
                    src={s.logo}
                    alt={s.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-semibold">{s.name}</p>
                  <Badge variant="secondary" className="mt-2">
                    {s.tier}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Sponsorship tiers"
            title="Choose a level that works for you"
            description="Every tier is a tax-deductible donation to our 501(c)(3)."
            align="center"
            className="mx-auto mb-12"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TIERS.map((t) => (
              <Card
                key={t.name}
                className={cn(
                  "relative flex flex-col",
                  t.featured ? "border-primary" : "border-border"
                )}
              >
                {t.featured ? (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most popular
                  </Badge>
                ) : null}
                <CardContent className="flex h-full flex-col p-6">
                  <p className="text-lg font-bold">{t.name}</p>
                  <p className="mt-2 text-3xl font-bold">{t.amount}</p>
                  <p className="text-xs text-muted-foreground">per season</p>
                  <ul className="mt-5 flex-1 space-y-2 text-sm">
                    {t.perks.map((p) => (
                      <li key={p} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
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
                      "mt-6 gap-2"
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

      <section className="py-16">
        <div className="container-px mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold lg:text-3xl">
            From rookie team to Worlds in two years
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            With your support, we keep competing at the highest level and
            running free STEM programs for kids across Loudoun County.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="https://www.gofundme.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              <Heart className="h-4 w-4" />
              Donate today
            </Link>
            <Link
              href="mailto:beaverbotsftc@gmail.com"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "gap-2")}
            >
              <Mail className="h-4 w-4" />
              beaverbotsftc@gmail.com
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
