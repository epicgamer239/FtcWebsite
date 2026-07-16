import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PhotoCarousel } from "@/components/photo-carousel";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About · BeaverBots FTC",
  description:
    "Meet the BeaverBots: a second-year FIRST Tech Challenge team from Ashburn, VA.",
};

const MEMBERS = [
  {
    name: "Velan",
    role: "Captain",
    year: "Junior",
    image: "/members/velan.jpg",
  },
  {
    name: "Aryan",
    role: "Vice-Captain",
    year: "Sophomore",
    image: "/members/aryan.jpg",
  },
  {
    name: "Savni",
    role: "Outreach",
    year: "Junior",
    image: "/members/sanvi.jpg",
  },
  {
    name: "Ishani",
    role: "Outreach",
    year: "Sophomore",
    image: "/members/ishani.jpg",
  },
  {
    name: "Smit",
    role: "CAD",
    year: "Junior",
    image: "/members/smit.jpg",
  },
  {
    name: "Ishanth",
    role: "CAD",
    year: "Junior",
    image: "/members/ishanth.jpg",
  },
  {
    name: "Graisen",
    role: "Programming",
    year: "Junior",
    image: "/members/graisen.jpg",
  },
  {
    name: "Eshan",
    role: "Building",
    year: "Junior",
    image: "/members/eshan.jpg",
  },
  {
    name: "Pranav",
    role: "Building",
    year: "Sophomore",
    image: "/members/pranav.jpg",
  },
] as const;

const COACHES = [
  {
    name: "Susee Natarajan",
    role: "Coach",
    image: "/coaches/susee-natarajan.png",
  },
  {
    name: "Adhvith",
    role: "Mentor",
    image: "/coaches/adhvith.png",
  },
  {
    name: "Raghav",
    role: "Mentor",
    image: "/coaches/raghav.png",
  },
  {
    name: "Tom Nobal",
    role: "Mentor",
    image: "/coaches/tom-nobal.png",
  },
  {
    name: "Jens Charl",
    role: "Mentor",
    image: "/coaches/jens-charl.png",
  },
  {
    name: "Mohan",
    role: "Mentor",
    image: "/coaches/mohan.png",
  },
  {
    name: "Pranav",
    role: "Mentor",
    image: "/coaches/pranav.png",
  },
  {
    name: "Saravana",
    role: "Mentor",
    image: "/coaches/saravana.png",
  },
] as const;

const TEAM_PHOTOS = [
  {
    src: "/team/team1.jpg",
    alt: "BeaverBots team together",
  },
  {
    src: "/team/team2.jpeg",
    alt: "BeaverBots at a competition event",
  },
  {
    src: "/team/team3.jpg",
    alt: "BeaverBots students with their robot",
  },
  {
    src: "/team/team4.jpg",
    alt: "BeaverBots team on the field",
  },
  {
    src: "/team/team5.jpg",
    alt: "BeaverBots team photo",
  },
  {
    src: "/team/team6.jpg",
    alt: "BeaverBots at an outreach or competition day",
  },
  {
    src: "/team/team7.jpg",
    alt: "BeaverBots students working together",
  },
  {
    src: "/team/team8.jpg",
    alt: "BeaverBots team group photo",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About"
        title={
          <>
            A serious FTC team from{" "}
            <span className="text-primary">Ashburn, Virginia</span>
          </>
        }
        description="Twelve students in grades 8–12 who design, build, and program competition robots. We also run outreach that reaches over 1,400 kids a year."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/bot"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
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

      <section className="border-t border-border bg-background py-16 lg:py-20">
        <div className="container-px mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            About the <span className="text-primary">Beavers</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            The BeaverBots are a FIRST Tech Challenge team in Ashburn, VA. We
            are a second-year team of high school students, from rising
            sophomores to rising juniors. We want more kids in our community to
            try robotics and get interested in STEM.
          </p>
        </div>

        <div className="container-px mx-auto mt-12 max-w-5xl">
          <PhotoCarousel slides={TEAM_PHOTOS} />
        </div>
      </section>

      <section className="border-t border-border bg-background py-16 lg:py-20">
        <div className="container-px mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Members
          </h2>

          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {MEMBERS.map((m) => (
              <li
                key={m.name}
                className="flex flex-col items-center rounded-xl border border-border bg-background p-5 text-center shadow-paper"
              >
                <div className="relative aspect-[3/4] w-full max-w-[200px] overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={m.image}
                    alt={`${m.name}, ${m.role}`}
                    fill
                    sizes="200px"
                    className="object-cover object-top"
                  />
                </div>
                <p className="mt-4 text-lg font-bold tracking-tight text-foreground">
                  {m.name}
                </p>
                <p className="mt-1 text-sm font-medium text-primary">{m.role}</p>
                <p className="text-sm text-muted-foreground">{m.year}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-background py-16 lg:py-20">
        <div className="container-px mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Coaches &amp; Mentors
          </h2>

          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {COACHES.map((c) => (
              <li
                key={c.name}
                className="flex flex-col rounded-xl border border-border bg-background p-4 shadow-paper"
              >
                <div className="relative aspect-[3/1] w-full overflow-hidden rounded-lg border border-border bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={`${c.name}, ${c.role}`}
                    className="absolute inset-0 h-full w-full"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
                <p className="mt-4 text-lg font-bold tracking-tight text-foreground">
                  {c.name}
                </p>
                <p className="text-sm text-muted-foreground">{c.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
