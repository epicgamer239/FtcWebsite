import Link from "next/link";
import { Heart, Bot as BotIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/90 backdrop-blur-md">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex items-center justify-around h-16">
          <Link
            href="/sponsor"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "flex flex-col items-center justify-center gap-1 min-h-[48px] min-w-[48px] px-4 py-2"
            )}
          >
            <Heart className="h-5 w-5" />
            <span className="text-[10px] font-medium">Sponsor Us</span>
          </Link>
          <Link
            href="/bot"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "flex flex-col items-center justify-center gap-1 min-h-[48px] min-w-[48px] px-4 py-2"
            )}
          >
            <BotIcon className="h-5 w-5" />
            <span className="text-[10px] font-medium">Robot Specs</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
