# ANIMATION_GUIDE.md — SeaCraft Technology Solutions Ltd
### Motion specification only. Not consulted until the animation pass (Phase 5 of BUILD_PHASES.md) — layout and content should be built and functioning *without* animation first.

---

## 1. Motion principles (apply everywhere)
- Consistent easing token: `ease: [0.22, 1, 0.36, 1]` (a confident "ease-out-expo" feel) for reveals; `ease: "power3.out"` for GSAP.
- Duration bands: micro-interactions 150–250ms, section reveals 500–800ms, hero sequence 1.2–2s total.
- Everything respects `prefers-reduced-motion` — wrap all animation hooks in a check that falls back to instant/no-motion states. This is not optional.
- Stagger children (0.06–0.12s per item) for any grid or list reveal — never animate a whole section as one block.

## 2. Global scroll behavior
- Integrate Lenis for smooth, weighted scrolling site-wide; sync Lenis's RAF loop with GSAP's ticker so ScrollTrigger stays accurate.
- Thin scroll-progress bar fixed at the top of the viewport (navy track, cyan fill) reflecting page scroll position.

## 3. Navigation
- Navbar background/text color interpolate (not snap) from transparent+white to solid navy+white as the user scrolls past the hero — drive with `useScroll`/`useTransform` from Framer Motion, not a boolean class toggle.
- Mega-menu: services panel expands with a clipped-height + fade (`clipPath` or `height` animate), items stagger in.
- Mobile drawer: slide-in from the right with a slight scale/opacity on the underlying page (depth effect), spring physics (`type: "spring", stiffness: 300, damping: 30`).

## 4. Hero (GSAP-led)
Sequenced timeline — don't let it all fire at once:
1. Background media fades/scales in (subtle Ken Burns zoom, 20–30s slow loop, `will-change: transform`)
2. Headline "Powering Subsea Success" — split into words/chars, each animates up + fades in with a small stagger
3. Subheadline fades up shortly after
4. CTA buttons fade/slide in, then get a magnetic-hover effect (button follows cursor slightly within a bounded radius — see §7)
5. Scroll-cue indicator (small animated chevron or line) fades in last, pulses gently on loop
6. As the user scrolls past hero, apply a parallax: background moves slower than foreground content (`ScrollTrigger` `scrub`)

## 5. Section reveals (Framer Motion, applied via a shared `RevealOnScroll` wrapper)
- Default: `opacity 0→1`, `y: 24→0`, triggered at `whileInView` with `viewport={{ once: true, margin: "-10% 0px" }}`
- Grids (services, equipment, values): children stagger via `staggerChildren` in a parent `variants` object
- Stat tiles: CountUp triggers on `whileInView`, counting from 0 to the real value over ~1.2s with an ease-out curve
- Timeline (client process / leadership career history): draw-on effect — an SVG or border-left line animates its `stroke-dashoffset`/height in sync with scroll progress through the section

## 6. Equipment showcase
- Swiper carousel with a custom cyan progress bar synced to slide index
- Each card: image has a subtle scale-up on hover (`scale: 1.04`, spring), code/name overlay slides up from the bottom on hover
- Clicking a card opens a shadcn `Dialog` with a scale+fade entrance (`scale: 0.95→1`, `opacity: 0→1`)

## 7. Micro-interactions
- **Magnetic buttons**: primary CTAs subtly translate toward the cursor within ~12px when hovered, spring back on leave (a `MagneticButton` wrapper component using `onMouseMove` + Framer `useMotionValue`/`useSpring`)
- **Card hover lift**: `translateY(-4px)` + soft shadow increase, 200ms
- **Underline draw**: nav links get an underline that draws left-to-right on hover (`scaleX` transform, `transform-origin: left`)
- **Cursor accent (desktop only)**: a small circular cursor-follower that scales up subtly when hovering over links/buttons — disable entirely on touch devices

## 8. Page transitions
- Route changes use a shared `PageTransition` layout wrapper: outgoing page fades/slides out (150ms), incoming fades/slides in (300ms) — keep this fast; premium sites don't make users wait on navigation chrome.

## 9. Partner/logo marquee
- If/when logo assets are available (client logos, certification badges), use an infinite CSS/GSAP marquee, pausing on hover, duplicated content for seamless looping — do not fabricate placeholder client logos; use certification names (ISO 9001:2015, NCDMB, NOGIC JQS, NCEC) as text badges until real logo assets exist.

## 10. Loading states
- Route-level skeleton loaders (shimmer effect, not spinners) for any data-dependent section, matching the final layout's shape to avoid layout shift.
