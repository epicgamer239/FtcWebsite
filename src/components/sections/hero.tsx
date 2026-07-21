import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="BeaverBots team introduction"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <Image
        src="/gallery/team.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />

      <div className="absolute inset-0 bg-foreground/20" aria-hidden />

      <div className="hero-copy relative z-10 mx-auto max-w-6xl px-4 py-24 text-center sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
            <p className="text-center text-lg font-bold uppercase tracking-widest text-white opacity-90 drop-shadow-md sm:text-xl md:text-2xl lg:text-3xl">
              TEAM 26073
            </p>
            <h1 className="text-center text-5xl font-extrabold italic uppercase leading-none tracking-tighter text-primary drop-shadow-md sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              BEAVERBOTS
            </h1>
          </div>
          <p className="hero-copy-subtitle mx-auto mt-6 max-w-2xl px-4 text-center font-serif text-lg italic text-white opacity-90 drop-shadow-sm sm:text-xl md:text-2xl">
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
