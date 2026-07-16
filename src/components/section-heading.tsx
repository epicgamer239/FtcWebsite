import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: {
  /** @deprecated Unused; kept out of the visual system to avoid AI kickers. */
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground lg:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
