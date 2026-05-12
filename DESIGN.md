---
name: BeaverBots FTC
description: An engineering yearbook for a second-year FIRST Tech Challenge team headed to the 2026 World Championship.
colors:
  background: "oklch(1 0 0)"
  foreground: "oklch(0.22 0.03 290)"
  beaverbots-royal: "oklch(0.52 0.21 295)"
  beaverbots-royal-soft: "oklch(0.94 0.04 295)"
  beaverbots-royal-cream: "oklch(0.96 0.02 295)"
  ink-muted: "oklch(0.48 0.03 290)"
  paper-muted: "oklch(0.96 0.01 290)"
  rule: "oklch(0.9 0.01 290)"
  caution: "oklch(0.65 0.24 27)"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw + 1rem, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 2.5vw + 1rem, 3rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.16em"
rounded:
  sm: "0.45rem"
  md: "0.6rem"
  lg: "0.75rem"
  xl: "1.05rem"
  pill: "9999px"
spacing:
  page-x-mobile: "1.5rem"
  page-x-tablet: "2rem"
  page-x-desktop: "3rem"
  section-y: "5rem"
  section-y-lg: "7rem"
  card-padding: "1.25rem"
  card-padding-lg: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.beaverbots-royal}"
    textColor: "{colors.background}"
    rounded: "{rounded.lg}"
    padding: "0.625rem 1.5rem"
    typography: "{typography.title}"
  button-primary-hover:
    backgroundColor: "oklch(0.46 0.21 295)"
    textColor: "{colors.background}"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "0.625rem 1.25rem"
  button-outline-hover:
    backgroundColor: "{colors.paper-muted}"
    textColor: "{colors.foreground}"
  badge-eyebrow:
    backgroundColor: "oklch(0.52 0.21 295 / 0.05)"
    textColor: "{colors.beaverbots-royal}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.75rem"
    typography: "{typography.label}"
  badge-secondary:
    backgroundColor: "{colors.beaverbots-royal-cream}"
    textColor: "{colors.beaverbots-royal}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.625rem"
    typography: "{typography.label}"
  card:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.xl}"
    padding: "{spacing.card-padding-lg}"
  card-feature:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.xl}"
    padding: "{spacing.card-padding-lg}"
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "0.5rem 0.625rem"
    height: "2rem"
  nav-link:
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.beaverbots-royal}"
    typography: "{typography.label}"
---

# Design System: BeaverBots FTC

## 1. Overview

**Creative North Star: "The Engineering Yearbook"**

This site is the yearbook of a second-year FTC team — a documentary record, not a marketing campaign. Real photographs of real students, real budget tables, real sponsor names, real outreach numbers. Decoration is suspect. Every surface is white paper, every line is a thin printed rule, every label is set in monospace like a caption underneath an archive photo. The team appears alongside its receipts.

The system reads as quietly authoritative: confident enough that a $5,000 sponsor takes the team seriously, restrained enough that a parent or judge can scan it in 30 seconds and trust what they see. The single accent — **BeaverBots Royal** — appears on actions, status, and emphasis only. It is never decoration. The mascot stays in the logo; the writing carries the brand.

This system explicitly rejects: generic SaaS landings (hero / three feature cards / pricing), kid-themed STEM aesthetics (Comic Sans, cartoon robots, "fun!"), school-PowerPoint clutter (drop shadows, three fonts, random clip art), dark-mode neon (gamer Discord vibe, magenta-cyan glow), and corporate stock photography (suits, handshakes).

**Key Characteristics:**
- White paper foreground with one purple accent used as ink, never as wallpaper.
- Inter for everything readable, JetBrains Mono for labels, captions, and metadata.
- Borders and spacing carry hierarchy; shadows almost never do.
- Real photos with real captions. Decorative imagery is forbidden.
- Generous line-height and capped line-length; older donors and mentors must read it comfortably.

## 2. Colors

A near-monochrome paper system with one royal-purple accent that earns every appearance.

### Primary
- **BeaverBots Royal** (`oklch(0.52 0.21 295)` / `#7028b8`): The single brand voice. Used on the primary CTA, active navigation underline, focused form rings, the progress fill of the Worlds Travel Fund, and key statistic numbers. Treated as ink, not as decoration. Never used as a section background, never as a gradient stop.
- **Royal Soft** (`oklch(0.94 0.04 295)`): The 5–10% tint that hosts eyebrow badges, secondary chips, and the rare emphasis fill (e.g., the avatar fallback behind a teammate's initials). Always paired with Royal text.
- **Royal Cream** (`oklch(0.96 0.02 295)`): The quietest possible purple. Used for `--secondary` surfaces (zebra-stripe table rows, alternating section bands). Faint enough that the eye reads it as paper, not color.

### Neutral
- **Page White** (`oklch(1 0 0)`): The background. The entire site sits on it. Cards sit on it. There are no off-white card surfaces — depth comes from borders, not from a different white.
- **Ink** (`oklch(0.22 0.03 290)`): The body and heading text. Slightly purple-tinted (chroma 0.03) so it never reads as pure-black neon next to Royal Purple.
- **Ink Muted** (`oklch(0.48 0.03 290)`): Body copy that supports the lede, captions, table cells, secondary metadata.
- **Paper Muted** (`oklch(0.96 0.01 290)`): A barely-there grey for muted section bands, table headers, and the page-header band. Use sparingly; it must feel like paper, not a tinted block.
- **Rule** (`oklch(0.9 0.01 290)`): Every hairline border in the system. Section dividers, card borders, table row separators. 1px exactly; never thicker as a colored stripe.

### Caution
- **Caution Red** (`oklch(0.65 0.24 27)`): Reserved exclusively for destructive states (e.g., form errors). Never decorative. If it appears in the UI, something is wrong.

### Named Rules

**The One Ink Rule.** BeaverBots Royal acts as ink, not as wallpaper. It can fill text, an icon, a 1px focus ring, a small badge, or a primary CTA. It can never fill a section background, sit behind a hero, or act as a gradient stop. If the purple covers more than ~10% of any viewport, the design is wrong.

**The No-Cream Rule.** There is no off-white card surface. Cards are page-white with a 1px Rule border. The instant you see two adjacent whites trying to layer with shadow, the design has drifted.

**The Receipts Rule.** A color in the system must serve information, not mood. If a stat is decorative, it leaves. If a stat is real (12 students, 1,400 kids, $13,650), the number gets Royal Purple and the unit stays Ink Muted.

## 3. Typography

**Display Font:** Inter (with `ui-sans-serif, system-ui, sans-serif` fallback)
**Body Font:** Inter (same)
**Label / Mono Font:** JetBrains Mono (with `ui-monospace, monospace` fallback)

**Character:** Inter at extra-bold (800) with a tight tracking carries every headline; Inter at regular (400) carries body copy at 16px and up. JetBrains Mono sets every label, eyebrow, caption, and table header — anything that should read as a caption beneath a yearbook photo.

### Hierarchy
- **Display** (800, `clamp(2.25rem, 5vw + 1rem, 4.5rem)`, line-height 1.05): Page-hero headline, one per page. The "**The BeaverBots are heading to the 2026 FIRST Worlds Championship!**" type slot.
- **Headline** (800, `clamp(1.875rem, 2.5vw + 1rem, 3rem)`, line-height 1.1): Section headings. "**Five programs. One mission.**" "**Transparent budget.**"
- **Title** (700, `1.125rem`, line-height 1.3): Card titles, member names, subsystem names. Small, present.
- **Body** (400, `1rem`, line-height 1.6): Paragraph copy. Body line length capped 65–75ch; never wider. Older readers must be served.
- **Label** (500, `0.75rem`, letter-spacing `0.16em`, uppercase, mono): The signature yearbook caption voice. Eyebrows, badges, table headers, status meta, breadcrumbs, the FIRST CHESAPEAKE · 2025 photo caption.

### Named Rules

**The Caption Rule.** Anything below the running body type — eyebrows, photo credits, status pills, breadcrumbs, table column heads — is set in JetBrains Mono with `0.16em` tracking and uppercase. That single mono voice is the most distinctive thread in the system; never replace it with a smaller-sans variant.

**The Two-Tone Rule.** The headline scale uses two weights only — Body 400 and Display/Title 700/800 — with no 500 or 600 intermediates. Hierarchy comes from scale-plus-mono labels, not from a five-step weight ladder. The contrast is the point.

**The Wide-Read Rule.** Body type never falls below 16px and never exceeds 75ch line-width. The donor demographic skews older; legibility is a brand value, not an accessibility afterthought.

## 4. Elevation

Flat by default. Surfaces sit on page-white with 1px hairline Rule borders; depth comes from borders, spacing, and where things land on the page — not from shadow. Cards do not levitate. Modals and dialogs are the rare exception, and even they use the lightest possible scrim.

### Shadow Vocabulary
- **shadow-sm** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`): The only ambient shadow in the system. Applied to a small set of feature cards (Worlds Travel Fund card, tier cards) that must read as the receipt the user is meant to act on. Not applied to ordinary content cards.
- **shadow-hover** (`box-shadow: 0 10px 32px -16px oklch(0.22 0.03 290 / 0.18)`): Reserved for the hover state on a nav card or a feature card. Appears only as a response to interaction.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow is a response (hover, focus, active modal), not a property. Any card you ship with a static shadow has to earn it by being a primary call-to-action or a fund tracker.

**The No-Glow Rule.** Glows, backdrop blurs, and glassmorphism overlays are forbidden. The system uses one ambient shadow and one hover shadow. Anything else is decoration.

## 5. Components

### Buttons
- **Shape:** Rounded corners (`0.5rem` / `--radius-lg`). Never pill, never square.
- **Primary (`button-primary`):** Filled BeaverBots Royal background, Page White text, 700-weight title type, used for the single most important action on each page — Donate, Click Here to Donate, Help us upgrade DAM-1.
- **Outline (`button-outline`):** Page-white background, Rule 1px border, Ink text. Used for the *companion* CTA next to the primary (About The Team, See our outreach). Never appears alone; it always plays second to a Primary nearby.
- **Hover / Focus:** Primary shifts to a slightly deeper purple (`oklch(0.46 0.21 295)`); Outline gains a Paper-Muted fill. Focus shows a 3px Royal Purple ring at 50% opacity, never a solid outline. Active state translates 1px down.
- **No Ghost Button.** A bare text button without a background or border is a link. We have a Link variant for that.

### Badges
- **Eyebrow (`badge-eyebrow`):** Pill-shaped, Royal Soft fill at 5% tint, Royal Purple text, JetBrains Mono `0.16em` uppercase. The signature element of every page header — "**2026 FIRST® WORLDS CHAMPIONSHIP QUALIFIER**", "**ABOUT THE TEAM**".
- **Secondary (`badge-secondary`):** Royal Cream fill, Royal Purple text, used for inline meta (member grade, event audience).
- **State:** Badges never animate or hover. They are labels, not buttons.

### Cards
- **Corner Style:** `0.75rem` corner radius (Tailwind `rounded-xl`).
- **Background:** Page White.
- **Border:** 1px Rule, always.
- **Shadow Strategy:** Per the Flat-By-Default Rule, the default card has no shadow. Feature cards (Worlds Travel Fund, sponsor tiers, mission-CTA card) opt into `shadow-sm`. Hover state on a clickable card adds the hover shadow.
- **Internal Padding:** `1.25rem` standard (`card-padding`), `2rem` for hero/feature cards (`card-padding-lg`). Never less. Cards never nest inside cards.

### Inputs
- **Style:** Page-white background, 1px Rule border, Ink text at 14–16px.
- **Focus:** Border shifts to BeaverBots Royal, accompanied by a 3px Royal ring at 50% opacity. No glow, no background change.
- **Error / Disabled:** Error shows Caution Red border and ring; disabled drops opacity to 50%.

### Navigation (top bar)
- **Style:** Fixed top bar, page-white background with a 1px bottom Rule and a barely-perceptible `shadow-sm` on scroll. JetBrains Mono labels with `0.16em` tracking, uppercase.
- **Default state:** Foreground Ink, no underline.
- **Hover state:** Royal Purple text plus an underline that scales from left.
- **Active state:** Royal Purple text plus a permanent underline (the underline grows in on mount).
- **Mobile:** Below `md`, the nav collapses to a hamburger that opens a right-side drawer covering the full viewport. The drawer uses the same Page-White surface and a thin overlay (Ink at 20% opacity) on the rest of the page.

### Breadcrumb
A row of JetBrains Mono `0.16em` labels separated by chevron icons. The current page sits in Royal Purple; ancestors are Ink Muted. Appears at the top of every non-home page below the eyebrow.

### Signature Component: PageHeader
Every non-home page leads with the same band: breadcrumb → eyebrow badge → Display headline with a single Royal Purple emphasis word → optional description → optional CTA row. The consistency is the brand. The headline always emphasizes exactly one word in Royal Purple ("**Beavers.**", "**OUTREACH**", "**Worlds.**", "**DAM-1**", "**for every age.**"); never a phrase, never a gradient.

### Signature Component: Worlds Travel Fund Card
A small white card with a `shadow-sm`, an eyebrow label ("**WORLDS TRAVEL FUND**" in Royal Purple mono), a Royal Purple progress fill, and tabular-num figures (`$13,650 raised` / `Goal: $20,000`). It is the single most important conversion surface on the home and sponsor pages; the receipts rule and the one-ink rule meet inside this card.

## 6. Do's and Don'ts

### Do
- **Do** keep the entire site on a Page-White background (`oklch(1 0 0)`); cards sit on it with a 1px Rule border.
- **Do** use BeaverBots Royal (`oklch(0.52 0.21 295)`) as ink on text, icons, focus rings, the primary CTA, the active nav underline, and the progress fill — and nowhere else.
- **Do** set every eyebrow, badge, breadcrumb, photo caption, and table header in JetBrains Mono at `0.16em` tracking, uppercase.
- **Do** cite real numbers and real names ("12 students," "1,400 kids reached," "Lockheed Martin"). The Receipts Rule beats every adjective.
- **Do** keep body type ≥ 16px with line-length capped at 75ch and line-height 1.6.
- **Do** respect `prefers-reduced-motion`. Disable carousels and hover translations when it is set.
- **Do** show a focus ring at all times (3px Royal Purple, 50% opacity). No `outline: none` without a replacement.

### Don't
- **Don't** use gradient text (`background-clip: text` over a gradient). The headline emphasis is always a single solid Royal Purple word.
- **Don't** use gradient backgrounds or radial-gradient overlays anywhere. White is the surface.
- **Don't** use dark mode, neon accents, or backdrop-blur glassmorphism — the "**dark-mode neon gamer aesthetic**" anti-reference from PRODUCT.md.
- **Don't** use a side-stripe border (`border-left` > 1px as a colored accent) on cards, callouts, or list items. Ever.
- **Don't** ship a default modal. Inline progressive disclosure first; modal only when blocking is the point.
- **Don't** nest cards inside cards.
- **Don't** lean on the beaver mascot beyond the logo. No dam puns in headings, no cartoon beavers anywhere, no "Building like Beavers" as a recurring tagline beyond the About page hero.
- **Don't** drop into "**generic SaaS landing**" patterns: hero + three identical feature cards + pricing grid. The home page is a real two-column hero with a real photo; that pattern is the floor.
- **Don't** use comic-sans or kid-themed STEM clip art — the "**kid-themed STEM site**" anti-reference. Every visual must read as 7th-12th-graders building real machines, not a daycare.
- **Don't** add stock-photo corporate imagery (suits shaking hands, motion-blur cityscapes) — the "**corporate stock photography**" anti-reference. Only real team photos.
- **Don't** use em-dashes in UI copy. Comma, colon, semicolon, or period.
- **Don't** stack section padding identically — vary `5rem` / `7rem` for vertical rhythm.
