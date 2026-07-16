import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function PageHeader({
  title,
  description,
  children,
  crumb,
}: {
  /** @deprecated Kept for call-site compatibility; no longer rendered. */
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-background pb-12 pt-32 lg:pb-16 lg:pt-40">
      <div className="relative container-px mx-auto max-w-7xl">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium text-primary">
                {crumb}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-balance text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-5 max-w-3xl text-balance text-lg leading-relaxed text-foreground/85 lg:text-xl">
            {description}
          </p>
        ) : null}

        {children ? <div className="mt-8">{children}</div> : null}

        <div className="mt-10 h-px w-full bg-border" aria-hidden />
      </div>
    </section>
  );
}
