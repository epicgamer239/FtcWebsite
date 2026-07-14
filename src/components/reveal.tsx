"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Fade + rise on viewport entry. `float` matches simbotics.org motion-floatIn
 * (800ms, 60px rise). Respects prefers-reduced-motion via CSS.
 */
export function Reveal({
  as: As = "div",
  index = 0,
  delay = 80,
  motion = "up",
  className,
  children,
  ...rest
}: {
  as?: React.ElementType;
  index?: number;
  delay?: number;
  motion?: "up" | "float";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.12 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <As
      ref={ref as React.Ref<HTMLElement>}
      data-reveal={shown ? "true" : "false"}
      className={cn(motion === "float" ? "float-in" : "reveal", className)}
      style={{ animationDelay: shown ? `${index * delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </As>
  );
}
