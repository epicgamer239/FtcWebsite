import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink } from "lucide-react";
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
    age: "Ages 4–16",
    description:
      "Students build and program LEGO robots while learning core STEM skills.",
  },
  {
    id: "ftc",
    short: "FTC",
    name: "FIRST Tech Challenge",
    age: "Grades 7–12",
    description:
      "Students build metal robots with custom parts and code. BeaverBots competes in FTC.",
    featured: true,
  },
  {
    id: "frc",
    short: "FRC",
    name: "FIRST Robotics Competition",
    age: "Grades 9–12",
    description:
      "Large robots and high-school FIRST competition at full field scale.",
  },
];

const COMPARE = [
  { spec: "Grades", fll: "K–8", ftc: "7–12", frc: "9–12" },
  { spec: "Robot size", fll: "Table-based", ftc: "18 in. cube", frc: "Full field" },
  { spec: "Typical weight", fll: "N/A", ftc: "Under 42 lb", frc: "Under 125 lb" },
  { spec: "Coding", fll: "Blocks / Python", ftc: "Java / Kotlin", frc: "Java / C++" },
];

export default function FirstPage() {
  return (
    <>
      <PageHeader
        crumb="FIRST"
        title={
          <>
            Robotics programs for{" "}
            <span className="text-primary">every grade level</span>
          </>
        }
        description="FIRST is a progression from elementary through high school. BeaverBots competes in FIRST Tech Challenge (FTC)."
      >
        <Link
          href="https://www.firstinspires.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
        >
          firstinspires.org
          <ExternalLink className="h-4 w-4" />
        </Link>
      </PageHeader>

      <section className="bg-background py-14 lg:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {PROGRAMS.map((p) => (
              <article
                key={p.id}
                className={cn(
                  "rounded-xl border border-border bg-background p-6",
                  p.featured && "border-primary"
                )}
              >
                {p.featured ? (
                  <p className="mb-3 text-sm font-medium text-primary">
                    Our program
                  </p>
                ) : null}
                <p className="text-sm text-muted-foreground">{p.short}</p>
                <h3 className="mt-1 text-lg font-bold">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.age}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background py-14 lg:py-20">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading title="Compare programs" className="mb-8" />
          <Card className="overflow-hidden border-border bg-background">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead />
                  <TableHead>FLL</TableHead>
                  <TableHead className="text-primary">FTC</TableHead>
                  <TableHead>FRC</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {COMPARE.map((row) => (
                  <TableRow key={row.spec}>
                    <TableCell className="font-medium">{row.spec}</TableCell>
                    <TableCell>{row.fll}</TableCell>
                    <TableCell className="bg-primary/5 font-medium text-primary">
                      {row.ftc}
                    </TableCell>
                    <TableCell>{row.frc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>
    </>
  );
}
