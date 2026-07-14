"use client";

import * as React from "react";

export function Hero() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      if (media.matches) {
        video.pause();
        video.removeAttribute("autoplay");
      } else {
        void video.play().catch(() => {
          /* autoplay can fail; poster still covers */
        });
      }
    };

    syncMotion();
    media.addEventListener("change", syncMotion);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  return (
    <section
      id="home"
      aria-label="BeaverBots team introduction"
      className="relative mt-20 flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden bg-[oklch(0.18_0.02_290)]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/IMG_4172.jpg"
        aria-hidden
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Darken busy footage so the brand title stays legible */}
      <div
        className="absolute inset-0 bg-[oklch(0.12_0.02_290/0.55)]"
        aria-hidden
      />

      {/* Diagonal scanline hatch — Simbotics-style atmosphere */}
      <div className="hero-scanlines absolute inset-0" aria-hidden />

      <div className="hero-copy relative z-10 mx-auto max-w-6xl px-4 py-24 text-center sm:px-8">
        <h1 className="hero-copy-title whitespace-nowrap text-[clamp(1.15rem,5.2vw+0.25rem,4.75rem)] font-extrabold italic uppercase leading-[0.95] tracking-tight text-[oklch(0.98_0.01_290)]">
          Team 26073 - BeaverBots
        </h1>
        <p className="hero-copy-subtitle mt-5 text-balance font-serif text-[clamp(1.05rem,2vw+0.35rem,1.65rem)] italic leading-snug text-[oklch(0.96_0.01_290)]">
          A 2026 FIRST
          <sup className="ml-0.5 text-[0.55em] font-normal not-italic leading-none">
            ®
          </sup>{" "}
          Worlds Championship Qualifier
        </p>
      </div>
    </section>
  );
}
