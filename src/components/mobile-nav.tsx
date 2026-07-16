import Link from "next/link";
import { Heart, Bot as BotIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DONATE_URL } from "@/lib/site";

export function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-around">
          <Link
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-1 px-4 py-2"
            )}
          >
            <Heart className="h-5 w-5" />
            <span className="text-xs font-medium">Donate</span>
          </Link>
          <Link
            href="/bot"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-1 px-4 py-2"
            )}
          >
            <BotIcon className="h-5 w-5" />
            <span className="text-xs font-medium">Robot</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
