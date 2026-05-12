import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
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
      <Badge
        variant="outline"
        className="border-primary/40 bg-primary/10 text-primary font-mono tracking-widest mb-4"
      >
        {eyebrow}
      </Badge>
      <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base lg:text-lg text-muted-foreground text-balance leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
