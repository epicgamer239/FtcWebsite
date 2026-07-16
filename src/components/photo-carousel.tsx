"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type CarouselSlide = {
  src: string;
  alt: string;
};

export function PhotoCarousel({
  slides,
  className,
  aspectClassName = "aspect-[16/10]",
}: {
  slides: readonly CarouselSlide[];
  className?: string;
  aspectClassName?: string;
}) {
  const [index, setIndex] = React.useState(0);
  const count = slides.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  React.useEffect(() => {
    if (count <= 1) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 3000);
    return () => window.clearInterval(id);
  }, [count]);

  if (count === 0) return null;

  const slide = slides[index];

  return (
    <div className={cn("relative", className)}>
      <figure
        className={cn(
          "relative w-full overflow-hidden rounded-xl border border-border bg-muted",
          aspectClassName
        )}
      >
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 64rem"
          className="object-cover"
          priority={index === 0}
        />

        {count > 1 ? (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-border/80 bg-background/70 text-foreground/70 transition-colors hover:border-primary/40 hover:bg-background hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-border/80 bg-background/70 text-foreground/70 transition-colors hover:border-primary/40 hover:bg-background hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </>
        ) : null}
      </figure>

      {count > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-colors",
                i === index
                  ? "bg-primary"
                  : "bg-border hover:bg-muted-foreground/40"
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
