import Link from "next/link";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Bot · BeaverBots FTC",
  description:
    "Meet WoodChucker, the BeaverBots 2025–26 FIRST Tech Challenge qualifying robot.",
};

const FEATURES = [
  {
    label: "Drivetrain",
    summary:
      "Smooth and nimble for tight turns, and stable enough to stay accurate when the match gets chaotic.",
  },
  {
    label: "Intake",
    summary:
      "Wide, fast pickup that grabs under pressure and feeds cleanly without jams.",
  },
  {
    label: "Shooter",
    summary:
      "Tuned for repeatable shots from multiple field positions. When it lines up, points follow.",
  },
  {
    label: "Software",
    summary:
      "Driver-friendly controls with sensor feedback and autonomous routines we refine at competition.",
  },
  {
    label: "Upgrades",
    summary:
      "Faster intake cycles, tighter shooter consistency, and a tougher frame for long tournament days.",
  },
] as const;

const PAST_ROBOTS = [
  {
    name: "STUBBY V2",
    season: "2024–25",
    blurb: "Last season’s qualifying tournament robot.",
    image: "/bots/stubby_v2.jpg",
  },
  {
    name: "Dam Driver V1",
    season: "2024–25",
    blurb: "Post-season build, still in progress.",
    image: "/bots/dam_driver_v1.jpg",
  },
  {
    name: "First BeaverBOT",
    season: "Archive",
    blurb: "First FTC chassis with an AprilTag webcam.",
    image: "/bots/first_bot.jpg",
  },
  {
    name: "BabyBOT",
    season: "Archive",
    blurb: "First unique design: four motors and one servo.",
    image: "/bots/baby_bot.jpg",
  },
  {
    name: "DemoBot",
    season: "Archive",
    blurb: "First mechanisms: PowerPlay cup and a linear slide.",
    image: "/bots/demo_bot.jpg",
  },
] as const;

export default function BotPage() {
  return (
    <>
      <section className="flex min-h-[100svh] flex-col bg-background pt-24 lg:pt-28">
        <div className="container-px mx-auto flex w-full max-w-7xl flex-1 flex-col pb-8 lg:pb-10">
          <Breadcrumb className="mb-6 shrink-0">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium text-primary">
                  Bot
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid min-h-0 flex-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="flex max-w-xl flex-col justify-center">
              <p className="mb-4 text-sm font-medium text-primary">
                2025–26 qualifying robot
              </p>
              <h1 className="text-balance text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                Meet <span className="text-primary">WoodChucker</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-foreground/85 lg:text-xl">
                Built by the BeaverBots. It doesn’t just chuck wood. It chucks
                Artifacts.
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                Already{" "}
                <span className="font-semibold text-primary">
                  2 qualifier tournament wins
                </span>{" "}
                this season.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="#features"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  See what it does
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/sponsor#donate"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" })
                  )}
                >
                  Support the robot
                </Link>
              </div>
            </div>

            <figure className="relative min-h-[42vh] overflow-hidden rounded-xl border border-border bg-muted lg:h-full lg:max-h-[calc(100svh-8rem)] lg:min-h-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/bots/woodchucker.jpeg"
                alt="WoodChucker, the BeaverBots 2025–26 competition robot"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </figure>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="scroll-mt-24 border-t border-border bg-background py-14 lg:py-16"
      >
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Systems"
            title="What WoodChucker brings to the field"
            description="Five systems built for scoring when it counts."
            className="mb-8"
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <li
                key={feature.label}
                className="rounded-xl border border-border bg-background p-5 sm:p-6"
              >
                <p className="text-base font-bold tracking-tight text-foreground">
                  {feature.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground lg:text-base">
                  {feature.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-background py-14 lg:py-16">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Lineage"
            title="Robots before WoodChucker"
            description="Earlier builds that got us here."
            className="mb-8"
          />
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
            {PAST_ROBOTS.map((robot) => (
              <article
                key={robot.name}
                className="flex flex-col rounded-xl border border-border bg-background p-3"
              >
                <div className="relative mb-3 aspect-square overflow-hidden rounded-lg border border-border bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={robot.image}
                    alt={robot.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <p className="text-xs font-medium text-primary">
                  {robot.season}
                </p>
                <h3 className="mt-0.5 text-sm font-bold tracking-tight sm:text-base">
                  {robot.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {robot.blurb}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
