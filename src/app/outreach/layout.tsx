import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outreach · BeaverBots FTC",
  description:
    "Free STEM programs from the BeaverBots across Loudoun County: camps, scrimmages, and school visits.",
};

export default function OutreachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
