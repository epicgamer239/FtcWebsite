import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Check, ArrowRight, Heart, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { DONATE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sponsor · BeaverBots FTC",
  description:
    "Sponsor or donate to the BeaverBots. Support our robots, competitions, and free STEM outreach across Loudoun County.",
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
  { name: "CVS", tier: "Gold", logo: "/sponsor-logos/cvs.png" },
  { name: "Apple", tier: "Gold", logo: "/sponsor-logos/apple.png" },
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
] as const;

const SPONSOR_TIERS = [
  {
    key: "BeaverDam",
    label: "BeaverDam",
    eyebrow: "Top tier",
    grid: "grid-cols-2 sm:grid-cols-3",
  },
  {
    key: "Gold",
    label: "Gold",
    eyebrow: "Middle tier",
    grid: "grid-cols-2 sm:grid-cols-3",
  },
  {
    key: "Bronze",
    label: "Bronze",
    eyebrow: "Supporting tier",
    grid: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
  },
] as const;

export default function SponsorPage() {
  return (
    <>
      <PageHeader
        crumb="Sponsor"
        title={
          <>
            Invest in the next <span className="text-primary">season</span>
          </>
        }
        description="Sponsors keep 12 students building, competing, and running free STEM programs across Loudoun County. Your support funds parts, travel, and outreach."
      >
        <div id="donate" className="flex flex-wrap gap-3">
          <Link
            href={DONATE_URL}
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
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "gap-2"
            )}
          >
            <Mail className="h-4 w-4" />
            Email us
          </Link>
        </div>
      </PageHeader>

      <section className="bg-background py-20 lg:py-28">
        <div className="container-px mx-auto max-w-6xl">
          <SectionHeading
            title="Thank you to our sponsors"
            align="center"
            className="mb-16"
          />
          <div className="space-y-20">
            {SPONSOR_TIERS.map((tier, tierIndex) => {
              const sponsors = CURRENT_SPONSORS.filter(
                (s) => s.tier === tier.key
              );
              if (sponsors.length === 0) return null;
              return (
                <div
                  key={tier.key}
                  className={cn(tierIndex > 0 && "border-t border-border pt-20")}
                >
                  <div className="mb-10 text-center">
                    <p className="text-sm text-muted-foreground">
                      {tier.eyebrow}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                      {tier.label}
                    </h3>
                  </div>
                  <ul className={cn("mx-auto grid gap-8", tier.grid)}>
                    {sponsors.map((s) => (
                      <li
                        key={s.name}
                        className="flex flex-col items-center text-center"
                      >
                        <div className="relative flex aspect-[2/1] w-full items-center justify-center bg-muted/40 p-6">
                          <Image
                            src={s.logo}
                            alt={s.name}
                            fill
                            className="object-contain p-5"
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                        </div>
                        <p className="mt-3 text-sm font-medium text-foreground">
                          {s.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-20 lg:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            title="Choose a level that works for you"
            description="Every tier is a tax-deductible donation to our 501(c)(3)."
            align="center"
            className="mx-auto mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TIERS.map((t) => (
              <Card
                key={t.name}
                className={cn(
                  "relative flex flex-col",
                  t.featured && "ring-2 ring-primary"
                )}
              >
                <CardContent className="flex h-full flex-col p-6">
                  {t.featured ? (
                    <Badge className="mb-4 w-fit self-center">
                      Most popular
                    </Badge>
                  ) : null}
                  <p className="text-lg font-semibold">{t.name}</p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight">
                    {t.amount}
                  </p>
                  <p className="text-xs text-muted-foreground">per season</p>
                  <ul className="mt-5 flex-1 space-y-2.5 text-sm">
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

      <section className="border-t border-border bg-background py-20 lg:py-24">
        <div className="container-px mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight lg:text-3xl">
            Help us keep building
          </h2>
          <p className="mx-auto mt-4 max-w-read leading-relaxed text-muted-foreground">
            Your support funds the next robot, the next competition, and the
            free STEM programs we run for kids across Loudoun County.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              <Heart className="h-4 w-4" />
              Donate today
            </Link>
            <Link
              href="mailto:beaverbotsftc@gmail.com"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "gap-2"
              )}
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
