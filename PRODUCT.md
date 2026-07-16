# Product

## Register

brand

## Users

Three audiences arrive on the same six pages. The site has to serve all three in one pass.

- **Sponsors and donors** — local businesses, parents of alumni, regional engineering firms (Lockheed, Northrop, MITRE, etc.). They land on Home or Sponsor with one question: "is this team real, and would a check actually go somewhere useful?" Decision context: end of a workday, glancing at a phone, deciding whether to forward the email to their company's giving committee.
- **Parents and prospective students** — families in Loudoun County evaluating whether to join an FTC team. They land on About, Outreach, or First. Context: a parent on a tablet at home in the evening, a middle-schooler watching over their shoulder.
- **FTC judges and award reviewers** — looking for an Inspire / Connect / Motivate Award case. They scan Outreach, Bot, and About in 60 seconds during a competition. Context: phone in a noisy pit area.

The job to be done, common to all three: **decide in under 30 seconds that this team is credible, organized, and worth their attention** — money, time, or vote.

## Product Purpose

A public marketing site that makes a second-year FTC team look like an established, well-run program — credible enough that a $5K sponsor takes us seriously, organized enough that a parent enrolls their kid, and concrete enough that an FTC judge can fill out an award rubric from a single visit.

Success looks like: the Donate CTA gets clicked, the email link gets used, and outreach signups grow. Failure looks like: the site reads as "a school project about a school project."

## Brand Personality

Polished, confident, established. Voice is calm and concrete — real partners, real photos, and short copy. A few real numbers may appear in prose when they earn their place; they are not a visual theme. We never use exclamation marks as a substitute for substance, never describe ourselves with adjectives we haven't earned ("incredible team," "amazing program"), and never lean on the beaver mascot as a personality crutch. The mascot lives in the logo; the writing carries the brand.

Emotional goal on Home: "this is real." Emotional goal on Sponsor: "I trust where my money goes." Emotional goal on Outreach and Bot: "these kids built that."

## Anti-references

- **Generic SaaS landing.** "AI-powered platform for [vertical]" with a hero, three feature cards, and a pricing grid. We are not a SaaS product.
- **Kid-themed STEM site.** Comic Sans, primary-color gradients, cartoon robots, "robotics is FUN!" copy. We are 7th–12th graders building real machines, not a daycare.
- **School-PowerPoint template.** Random clipart, three different fonts, gratuitous gradients, drop shadows on everything. Anything that looks like a teacher's slide deck is disqualifying.
- **Dark-mode neon gamer aesthetic.** Black background, magenta/cyan gradients, glow effects, "cyberpunk robotics." A donor reads this as a hobbyist Discord, not a 501(c)(3).
- **Corporate stock photography.** Suited men shaking hands, smiling diverse-cast laptops, motion-blur cityscapes. Real team photos only.
- **"By the numbers" / diagram-led pages.** Stat dashboards, budget diagrams, flowchart-style layouts, mono caption clutter, and receipt-table aesthetics. Prefer photography and clean typography over charts and diagram blocks.

## Design Principles

1. **Earn the check.** Every page answers an implicit question: would a stranger write this team a $5K check after reading it? If a section doesn't move that needle, cut it.
2. **Photos over diagrams.** Real team photos and clean layout carry credibility. Do not default to stats grids, budget tables, or diagram panels as the primary visual idea.
3. **Quiet over loud.** Light surfaces, restrained color, single accent. Premium, clean, and minimal. Decoration (gradients, glows, glassmorphism) is forbidden by default.
4. **The mascot has restraint.** The beaver lives in the logo and small accents. Copy never talks like a beaver, headlines never lean on dam puns, and the mascot never becomes the visual brand.
5. **Donor + parent + judge in one pass.** Where the three audiences disagree, default to the donor — the donor decision has the largest dollar consequence and the other two read the same signals favorably.
6. **Live brief beats stale teach answers.** If a session brief conflicts with older PRODUCT.md / DESIGN.md preferences (especially "by the numbers" or diagram-heavy ideas), follow the live brief.

## Accessibility & Inclusion

- **Target:** WCAG 2.2 AA. Body text ≥ 4.5:1 contrast against background. Interactive targets ≥ 44×44 px. All images have meaningful `alt` text (decorative SVGs marked `aria-hidden`).
- **Keyboard:** Every interactive element reachable and operable by keyboard. Focus rings visible (no `outline: none` without a replacement).
- **Reduced motion:** Respect `prefers-reduced-motion: reduce`. No autoplay carousels, no parallax. Hover-only affordances must have a non-hover equivalent.
- **Color blindness:** Never encode information by color alone. Sponsor tier "MOST POPULAR" uses a badge and label, not just a color border. Progress bars include a numeric label, not just a fill.
- **Older readers:** Donors and mentors skew older — body type stays ≥ 16px, line-length capped 65–75ch, generous line-height.
