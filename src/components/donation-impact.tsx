"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      "Quietly the most-replaced part on the field. A donation at this level keeps DAM-1 driving straight in autonomous.",
  },
  {
    amount: 100,
    label: "$100",
    unlocks: "1 student's competition kit",
    detail:
      "Pit badge, team polo, safety glasses, and a notebook with the build log. Everything a student carries onto the field.",
  },
  {
    amount: 500,
    label: "$500",
    unlocks: "1 day of CAD Camp",
    detail:
      "Three-day Onshape intensive for 12 middle-schoolers. Your gift covers one full day, including 3D-printed parts to take home.",
  },
  {
    amount: 1500,
    label: "$1,500",
    unlocks: "1 worlds registration",
    detail:
      "FIRST Worlds registration is $6,000. Four sponsors at this tier put us on the plane to Houston with the team intact.",
  },
];

export function DonationImpact() {
  const [picked, setPicked] = React.useState(1);
  const current = IMPACTS[picked];

  return (
    <Card className="border-border overflow-hidden">
      <CardContent className="p-6 lg:p-8">
        <div className="flex items-baseline justify-between flex-wrap gap-3 mb-6">
          <div>
            <div className="label-mono text-[10px] text-primary mb-2">
              See How Your Support Sends Our Team to Worlds
            </div>
            <h3 className="text-xl lg:text-2xl font-extrabold tracking-tight">
              Your donation makes real things happen.
            </h3>
          </div>
          <Badge variant="outline" className="label-mono text-[10px]">
            REAL UNIT COSTS · 2025-26
          </Badge>
        </div>

        <div
          role="radiogroup"
          aria-label="Donation amount"
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6"
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
                  "rounded-xl border px-4 py-4 text-left transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  active
                    ? "border-primary bg-accent text-primary"
                    : "border-border bg-background text-foreground hover:border-primary/40"
                )}
              >
                <div className="label-mono text-[10px] text-muted-foreground mb-1">
                  TIER {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="text-xl lg:text-2xl font-extrabold tracking-tight tabular-nums">
                  {i.label}
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-[auto_1fr] gap-5 items-start">
          <div className="rounded-xl bg-secondary p-5 sm:w-56 shrink-0">
            <div className="label-mono text-[10px] text-muted-foreground mb-1">
              Unlocks
            </div>
            <div className="font-extrabold text-lg leading-snug text-primary">
              {current.unlocks}
            </div>
            <div className="label-mono mt-3 text-[10px] text-muted-foreground">
              This {current.label} gift unlocks
            </div>
          </div>
          <p className="text-sm lg:text-base leading-relaxed text-foreground/80">
            {current.detail}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
