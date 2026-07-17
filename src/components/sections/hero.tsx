import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="BeaverBots team introduction"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/IMG_4172.JPG"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />

      {/* Dark overlay for text contrast */}
      <div
        className="absolute inset-0 bg-black/20"
        aria-hidden
      />

      <div className="hero-copy relative z-10 mx-auto max-w-6xl px-4 py-24 text-center sm:px-8">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
            <p className="text-white font-bold uppercase tracking-widest text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-90 text-center" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 0 16px rgba(0, 0, 0, 0.25)' }}>
              TEAM 26073
            </p>
            <h1 className="text-primary font-extrabold italic uppercase tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center leading-none" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 0 16px rgba(0, 0, 0, 0.25)' }}>
              BEAVERBOTS
            </h1>
          </div>
          <p className="hero-copy-subtitle mt-6 font-serif italic text-white text-lg sm:text-xl md:text-2xl text-center opacity-90 max-w-2xl px-4" style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)' }}>
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
