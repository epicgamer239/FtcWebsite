"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Impact = {
  amount: number;
  label: string;
  unlocks: string;
  detail: string;
};

const IMPACTS: Impact[] = [
  {
    amount: 25,
    label: "$25",
    unlocks: "1 motor encoder cable",
    detail:
      "Encoder cables get replaced often at competitions. This keeps DAM-1 driving straight in autonomous.",
  },
  {
    amount: 100,
    label: "$100",
    unlocks: "1 student's competition kit",
    detail:
      "Pit badge, team polo, safety glasses, and a notebook. Everything a student needs on competition day.",
  },
  {
    amount: 500,
    label: "$500",
    unlocks: "1 day of CAD Camp",
    detail:
      "Three-day Onshape camp for middle-schoolers. Your gift covers one full day, including 3D-printed parts to take home.",
  },
  {
    amount: 1500,
    label: "$1,500",
    unlocks: "1 Worlds registration share",
    detail:
      "FIRST Worlds registration is $6,000 total. Four sponsors at this level help get the full team to Houston.",
  },
];

export function DonationImpact() {
  const [picked, setPicked] = React.useState(1);
  const current = IMPACTS[picked];

  return (
    <Card className="border-border overflow-hidden">
      <CardContent className="p-6 lg:p-8">
        <h3 className="text-xl font-bold lg:text-2xl">
          What your donation supports
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Real costs from our 2025–26 season budget.
        </p>

        <div
          role="radiogroup"
          aria-label="Donation amount"
          className="mb-6 mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4"
        >
          {IMPACTS.map((i, idx) => {
            const active = picked === idx;
            return (
              <button
                key={i.amount}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setPicked(idx)}
                className={cn(
                  "rounded-lg border px-4 py-4 text-left transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  active
                    ? "border-primary bg-accent text-primary"
                    : "border-border bg-background hover:border-primary/40"
                )}
              >
                <div className="text-xl font-bold tabular-nums lg:text-2xl">
                  {i.label}
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid items-start gap-5 sm:grid-cols-[auto_1fr]">
          <div className="shrink-0 rounded-lg bg-muted p-5 sm:w-56">
            <p className="text-xs font-medium text-muted-foreground">Covers</p>
            <p className="mt-1 text-lg font-bold leading-snug text-primary">
              {current.unlocks}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
            {current.detail}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
