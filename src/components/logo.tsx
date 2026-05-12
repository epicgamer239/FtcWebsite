import { cn } from "@/lib/utils";

export function BeaverLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="beaverFur" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.7 0.18 295)" />
          <stop offset="100%" stopColor="oklch(0.42 0.2 295)" />
        </linearGradient>
        <linearGradient id="beaverHi" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.1 295)" />
          <stop offset="100%" stopColor="oklch(0.6 0.18 295)" />
        </linearGradient>
      </defs>

      {/* Head silhouette */}
      <path
        d="M48 14
           C66 14, 80 28, 80 46
           C80 60, 72 72, 60 78
           L56 84
           L52 80
           L44 80
           L40 84
           L36 78
           C24 72, 16 60, 16 46
           C16 28, 30 14, 48 14 Z"
        fill="url(#beaverFur)"
        stroke="oklch(0.25 0.06 295)"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Ears */}
      <ellipse cx="22" cy="32" rx="6" ry="8" fill="oklch(0.36 0.18 295)" />
      <ellipse cx="74" cy="32" rx="6" ry="8" fill="oklch(0.36 0.18 295)" />

      {/* Face highlight */}
      <path
        d="M30 42 Q48 30 66 42 L66 60 Q48 70 30 60 Z"
        fill="url(#beaverHi)"
        opacity="0.55"
      />

      {/* Eyebrows / fierce brows */}
      <path
        d="M28 40 L40 38 L42 44 L30 44 Z"
        fill="oklch(0.18 0.05 295)"
      />
      <path
        d="M68 40 L56 38 L54 44 L66 44 Z"
        fill="oklch(0.18 0.05 295)"
      />

      {/* Eyes (white sclera + pupils) */}
      <ellipse cx="36" cy="49" rx="4.5" ry="3.8" fill="white" />
      <ellipse cx="60" cy="49" rx="4.5" ry="3.8" fill="white" />
      <circle cx="36.5" cy="49.5" r="2.4" fill="oklch(0.18 0.06 295)" />
      <circle cx="60.5" cy="49.5" r="2.4" fill="oklch(0.18 0.06 295)" />
      <circle cx="37.2" cy="48.6" r="0.9" fill="white" />
      <circle cx="61.2" cy="48.6" r="0.9" fill="white" />

      {/* Nose */}
      <path
        d="M44 56 Q48 53 52 56 Q52 60 48 61 Q44 60 44 56 Z"
        fill="oklch(0.22 0.06 295)"
      />

      {/* Mouth / snarl */}
      <path
        d="M40 64 Q48 70 56 64"
        stroke="oklch(0.2 0.05 295)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Iconic beaver buck teeth */}
      <rect
        x="44.5"
        y="66"
        width="3.4"
        height="8"
        rx="0.6"
        fill="white"
        stroke="oklch(0.25 0.05 295)"
        strokeWidth="0.6"
      />
      <rect
        x="48.1"
        y="66"
        width="3.4"
        height="8"
        rx="0.6"
        fill="white"
        stroke="oklch(0.25 0.05 295)"
        strokeWidth="0.6"
      />
    </svg>
  );
}
