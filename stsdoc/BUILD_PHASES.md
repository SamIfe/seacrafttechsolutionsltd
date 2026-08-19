# BUILD_PHASES.md — Execution sequence for Cursor
### Run these phases in order. Verify each one against QA_CHECKLIST.md before moving to the next. Do not skip ahead — each phase assumes the previous one is working and error-free.

General rule for every phase: paste the phase prompt below into Cursor **as its own message**, in a fresh Cursor Composer/Chat session if possible, with `MASTER_RULES.md` attached/referenced plus whichever other file that phase calls for. Don't paste all five docs at once — extra context that isn't relevant to the current phase increases the odds Cursor mixes concerns (e.g. writing animation code during scaffolding).

---

## Phase 1 — Scaffold
**Attach:** `MASTER_RULES.md`

> Using MASTER_RULES.md as the spec, scaffold a new Next.js 15 App Router project with TypeScript strict mode, Tailwind CSS 3.4+, and the exact folder structure in Section 3. Install and configure: Framer Motion, GSAP, Lenis, lucide-react, Swiper.js, react-countup, react-hook-form, zod, shadcn/ui. Set up `next/font` for Manrope and Inter. Add the CSS custom properties from Section 2 to `globals.css`. Do not write any page content, sections, or animation code yet — this phase is scaffolding only. Confirm the dev server runs clean before finishing.

---

## Phase 2 — Layout shell
**Attach:** `MASTER_RULES.md`

> Build the layout shell only: Navbar, MegaMenu, Footer, MobileNav, and all page routes listed in MASTER_RULES.md Section 3, using placeholder headings for each route (e.g. `<h1>About</h1>`) so routing can be verified. No animation, no real content yet — those come in later phases. Navbar should be static (no scroll-based color interpolation yet). Confirm every route in the folder structure resolves with no 404s.

---

## Phase 3 — Home page content
**Attach:** `MASTER_RULES.md`, `CONTENT_GUIDE.md`

> Build out the Home page section by section, following the section order in CONTENT_GUIDE.md Section 8. Create the `content/*.ts` data files exactly as specified in CONTENT_GUIDE.md Sections 1–7 and import from them — do not hardcode copy directly into components. No animation yet: static layout, real content, responsive at 375/768/1024/1440px. Use the design system tokens from MASTER_RULES.md Section 2.

---

## Phase 4 — Interior pages
**Attach:** `MASTER_RULES.md`, `CONTENT_GUIDE.md`

> Build the interior pages: About, Services index + the 6 dynamic `[slug]` service pages, Equipment, Leadership, HSEQ, Careers, Contact. For each service page, expand the `shortDescription` into Overview/Benefits/Process/Industries Served sections per the instruction in CONTENT_GUIDE.md Section 2 — generic industry language only, no invented client names or numbers. Equipment page lists all 26 tools per Section 3 with one factual sentence each. Still no animation layer. Confirm all data-driven pages render correctly for every item (all 6 service slugs, all 26 equipment items, both leadership profiles).

---

## Phase 5 — Animation pass
**Attach:** `MASTER_RULES.md`, `ANIMATION_GUIDE.md`

> Apply the full motion specification in ANIMATION_GUIDE.md across all existing pages and components — do not add or change any content or layout structure in this phase, motion only. Build the shared primitives first (`RevealOnScroll`, `MagneticButton`, `PageTransition`, `SplitHeading`, `CursorFollower`, `Marquee`) in `components/motion/`, then wire them into: navbar scroll interpolation, hero sequence, section reveals, equipment showcase, micro-interactions, page transitions, and loading states — in that order, matching ANIMATION_GUIDE.md's section numbering. Confirm `prefers-reduced-motion` is respected everywhere before finishing.

---

## Phase 6 — Forms, SEO, accessibility, performance
**Attach:** `MASTER_RULES.md`, `CONTENT_GUIDE.md`, `QA_CHECKLIST.md`

> Implement the contact form per CONTENT_GUIDE.md Section 9 (react-hook-form + zod, honeypot, rate limiting, pluggable email lib, toast feedback). Add per-page `generateMetadata`, OpenGraph tags, canonical URLs, and JSON-LD (Organization, LocalBusiness, Service per service page, BreadcrumbList) per MASTER_RULES.md Section 4. Generate `sitemap.ts` and `robots.ts`. Run a full accessibility pass: keyboard nav for menu/carousel/modals/form, visible `:focus-visible` states in cyan, contrast check on cyan-on-white and cyan-on-navy. Then run a performance pass per MASTER_RULES.md Section 4 (transform/opacity-only animation, dynamic imports for GSAP/Lenis/Swiper, sparing `will-change`) until Lighthouse hits ≥95 on all four categories for Home and one interior page.

---

## Phase 7 — Legal pages, 404, final QA
**Attach:** `MASTER_RULES.md`, `CONTENT_GUIDE.md`, `QA_CHECKLIST.md`

> Build the Privacy and Terms pages (generic, standard legal boilerplate appropriate for a Nigerian offshore services company — do not invent specific legal claims) and a branded 404 page. Then work through every item in QA_CHECKLIST.md and report status on each — fix anything unchecked before declaring the project complete.
