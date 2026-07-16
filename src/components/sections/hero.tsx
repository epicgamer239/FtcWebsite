import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="BeaverBots team introduction"
      className="relative mt-20 flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden bg-muted"
    >
      <Image
        src="/IMG_4172.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />

      {/* Soft gradient scrim for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-foreground/25 to-foreground/15"
        aria-hidden
      />

      <div className="hero-copy relative z-10 mx-auto max-w-6xl px-4 py-24 text-center sm:px-8">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-8 sm:py-10">
          <h1
            className="hero-copy-title whitespace-nowrap text-[clamp(1.15rem,5.2vw+0.25rem,4.75rem)] font-extrabold italic uppercase leading-[0.95] tracking-tight text-white"
            style={{ textShadow: "0 2px 24px rgb(0 0 0 / 0.45)" }}
          >
            Team 26073 - BeaverBots
          </h1>
          <p
            className="hero-copy-subtitle mt-5 text-balance font-serif text-[clamp(1.05rem,2vw+0.35rem,1.65rem)] italic leading-snug text-white/95"
            style={{ textShadow: "0 1px 16px rgb(0 0 0 / 0.5)" }}
          >
            A 2026 FIRST
            <sup className="ml-0.5 text-[0.55em] font-normal not-italic leading-none">
              ®
            </sup>{" "}
            Worlds Championship Qualifier
          </p>
        </div>
      </div>
    </section>
  );
}
