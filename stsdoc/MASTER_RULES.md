# MASTER_RULES.md — SeaCraft Technology Solutions Ltd (STS)
### Permanent project rules. Cursor should treat this file as ground truth for every phase.

This file never changes mid-build. If a build-phase instruction ever conflicts with this file, this file wins.

---

## 0. How this project's docs work together
- `MASTER_RULES.md` (this file) — stack, folder structure, design system, coding standards. Read once, follow always.
- `CONTENT_GUIDE.md` — every real-world fact (company data, services, equipment, leadership, HSEQ). The single source of truth for copy. Never invent data outside this file.
- `ANIMATION_GUIDE.md` — motion spec only. Not consulted until the animation pass (Phase 5).
- `BUILD_PHASES.md` — the actual sequence of prompts to run, each one scoped to a phase.
- `QA_CHECKLIST.md` — the definition of done. Run at the end of every phase, not just at the end of the project.

Rule for Cursor: only pull in the file relevant to the current phase. Don't re-read `ANIMATION_GUIDE.md` while scaffolding, and don't re-read `CONTENT_GUIDE.md` while wiring up SEO metadata boilerplate — keep context narrow per phase.

---

## 1. Tech stack (pin versions, don't substitute)
- Next.js 15 (App Router), React 19, TypeScript strict
- Tailwind CSS 3.4+
- Framer Motion — scroll reveals, hover states, page/route transitions
- GSAP + ScrollTrigger + SplitText (or a lightweight text-splitting utility) — hero sequence and marquee only, keep scope narrow so it doesn't fight Framer Motion
- Lenis (`@studio-freight/lenis`) — smooth scroll, synced to GSAP's ticker
- lucide-react, Swiper.js, react-countup, react-hook-form + zod, shadcn/ui
- `next/image` with `remotePatterns` configured

Target: Lighthouse ≥ 95 across Performance/Accessibility/Best Practices/SEO on Home + one interior page, with the animation layer active.

---

## 2. Design system

**Colors** — navy + ocean-blue carry majority of visual weight; teal/coral/gold are accent stripes only, never large fills.

```css
--navy: #081B33;        /* primary, logo, headers, dark sections */
--ocean-blue: #0D4F8B;  /* secondary, gradients */
--cyan: #00B5D8;        /* tech/digital accent — CTAs, links, icons */
--teal: #1A9E96;        /* section accent stripe (alternate) */
--coral: #FF9F7A;       /* section accent stripe (alternate) */
--gold: #F2B705;        /* section accent stripe (alternate), used near logo mark */
--success: #0E8A4A;
--surface: #F7FAFC;
--text: #1B1F23;
--white: #FFFFFF;
```

**Typography**: Manrope (headings, 600–800), Inter (body, 400–500) via `next/font`.

**Tone**: enterprise engineering (Oceaneering / Subsea7 / TechnipFMC tier) — precise, technical, restrained. No startup-SaaS gradients-and-blobs aesthetic, no stock "handshake" imagery clichés.

---

## 3. Folder structure

```
src/
  app/
    (marketing)/
      page.tsx
      about/page.tsx
      services/
        page.tsx
        [slug]/page.tsx
      equipment/page.tsx
      leadership/page.tsx
      hseq/page.tsx
      careers/page.tsx
      contact/page.tsx
    api/contact/route.ts
    sitemap.ts
    robots.ts
    not-found.tsx
    privacy/page.tsx
    terms/page.tsx
    layout.tsx
    globals.css
  components/
    layout/ (Navbar, MegaMenu, Footer, MobileNav)
    sections/ (Hero, About, ServicesGrid, WhyChooseUs, Industries,
               EquipmentShowcase, Leadership, Hseq, ProcessTimeline,
               Testimonials, CtaBanner)
    motion/ (RevealOnScroll, MagneticButton, Marquee, PageTransition,
              CursorFollower, SplitHeading)
    ui/ (shadcn primitives + Counter, Card, GlassCard, Badge, Timeline)
  content/
    company.ts, services.ts, equipment.ts, leadership.ts, hseq.ts
  lib/ (validations.ts, email.ts, motion.ts — shared easing/duration tokens)
  types/content.ts
public/
  images/, logo/
```

---

## 4. Coding standards
- TypeScript strict mode, zero `any` unless justified in a comment.
- Content lives only in `content/*.ts` — components import from there, never hardcode copy inline. This keeps `CONTENT_GUIDE.md` the single source of truth in practice, not just in theory.
- Animate only `transform`/`opacity` where possible — avoid animating `width`/`height`/`top`/`left` directly (use `clipPath` or `scale` instead).
- Lazy-load GSAP/Lenis/Swiper via dynamic import (`ssr: false`) so they don't block initial JS parse.
- `will-change` used sparingly, only on actively-animating elements.
- Per-page `generateMetadata`, OpenGraph, canonical URLs.
- JSON-LD: `Organization`, `LocalBusiness`, `Service` per service page, `BreadcrumbList`.
- `sitemap.ts` / `robots.ts` generated from the route list.

---

## 5. Non-goals (explicit — do not build these)
- No CMS integration (structure the content layer so one *could* be added later, but don't add one now)
- No i18n
- No auth
- No dark mode
- No fabricated client logos, testimonials, or project statistics — see `CONTENT_GUIDE.md` for the only data that's allowed on the site
