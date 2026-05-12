# Iron Wolves Robotics — FTC #14217

A premium, single-page marketing & sponsorship site for a FIRST Tech Challenge robotics team. Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**.

Designed to be sold as a $50 turnkey product to any FTC / FRC / FLL team — just swap names, photos, sponsors, and ship.

## What's inside

A single, beautiful landing page with 11 polished sections:

1. **Fixed navbar** with scroll-blur + mobile sheet drawer
2. **Hero** with animated robot HUD, gradient headline, season badge, live build-day counter
3. **Stats bar** — awards, members, students mentored, years
4. **About** — mission card + 6 team pillars
5. **The Robot** — CAD-style robot render, technical specs, build highlights, subsystems & history tabs
6. **The Pack** — student member cards with mentors strip
7. **Outreach & Impact** — programs, Inspire Award callout, event photo strip
8. **Awards Timeline** — vertical alternating timeline by season
9. **Sponsors** — partner logos, 4-tier sponsorship pricing, animated fundraising progress bar
10. **FAQ** — accordion (FTC, joining, donations, etc.)
11. **Contact** — info cards + working form layout
12. **Footer** — link columns, 501(c)(3) badge, EIN

## Run

```bash
npm install
npm run dev
# → http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

## Customize for your team

Most of the team identity lives in just a few files:

| What to change           | File                                          |
| ------------------------ | --------------------------------------------- |
| Team name & number       | `src/components/navbar.tsx`, `footer.tsx`, `layout.tsx` |
| Hero copy & badges       | `src/components/sections/hero.tsx`            |
| Stats numbers            | `src/components/sections/stats.tsx`           |
| Team members             | `src/components/sections/team.tsx`            |
| Robot specs & subsystems | `src/components/sections/robot.tsx`           |
| Outreach programs        | `src/components/sections/outreach.tsx`        |
| Awards timeline          | `src/components/sections/achievements.tsx`    |
| Sponsor logos & tiers    | `src/components/sections/sponsors.tsx`        |
| Theme colors             | `src/app/globals.css` (`:root` block — change `--primary`) |
| Logo                     | `src/components/logo.tsx`                     |

## Tech

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4 with `@theme inline`
- shadcn/ui on base-ui primitives
- lucide-react icons

Every section is a server component except the navbar (uses scroll listener). Statically pre-rendered.
