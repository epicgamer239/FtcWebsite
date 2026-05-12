import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  crumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  crumb: string;
}) {
  return (
    <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden bg-background">
      <div className="relative container-px mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary font-medium">
                {crumb}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Badge
          variant="outline"
          className="label-mono border-primary/30 bg-accent text-primary mb-5 py-1"
        >
          {eyebrow}
        </Badge>

        <h1 className="text-balance text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.04]">
          {title}
        </h1>

        {description ? (
          <p className="mt-5 text-lg lg:text-xl text-foreground/85 max-w-3xl text-balance leading-relaxed">
            {description}
          </p>
        ) : null}

        {children ? <div className="mt-8">{children}</div> : null}

        <div className="mt-10 flex items-center gap-3">
          <span aria-hidden className="h-px flex-1 bg-border" />
          <span className="label-mono text-[10px] text-muted-foreground">
            FILE · {crumb.toUpperCase()}
          </span>
          <span aria-hidden className="h-px w-12 bg-primary" />
        </div>
      </div>
    </section>
  );
}
