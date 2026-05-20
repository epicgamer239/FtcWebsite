import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_WIDTH = 180;
const LOGO_HEIGHT = 155;

export function BeaverLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/beaverbotslogo.png"
      alt="BeaverBots FTC Team 26073"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className={cn("h-10 w-auto object-contain shrink-0", className)}
      priority
    />
  );
}
