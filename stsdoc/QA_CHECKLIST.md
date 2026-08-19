# QA_CHECKLIST.md — Definition of done
### Run this at the end of Phase 6/7, and spot-check the relevant items after every earlier phase too — don't wait until the very end to discover a broken route or a fabricated stat.

## Correctness & content integrity
- [ ] Every fact on the site traces back to `CONTENT_GUIDE.md` — no invented stats, testimonials, project counts, or client names
- [ ] Stat tiles use only the truthful values in `CONTENT_GUIDE.md` Section 6 (no fabricated "years in business" counters)
- [ ] Testimonials section shows the "Client testimonials coming soon" placeholder, not fabricated quotes
- [ ] TMT logo is not reproduced unless a licensed asset has been provided; partnership shown as text credit by default

## Code quality
- [ ] Zero TypeScript errors, strict mode
- [ ] All copy sourced from `content/*.ts` files, not hardcoded in components
- [ ] Folder structure matches `MASTER_RULES.md` Section 3 exactly

## Performance
- [ ] Lighthouse ≥ 95 (all 4 categories) on Home + 1 interior page, animations active
- [ ] Animations use only `transform`/`opacity` (no layout-triggering properties animated directly)
- [ ] GSAP/Lenis/Swiper dynamically imported (`ssr: false`)

## Accessibility (WCAG AA)
- [ ] Every animation gated behind `prefers-reduced-motion`
- [ ] Full keyboard nav: menu, mega-menu, carousel, modals, form
- [ ] Visible `:focus-visible` states styled in cyan
- [ ] Cyan-on-white and cyan-on-navy contrast verified

## Responsive
- [ ] 375px checked
- [ ] 768px checked
- [ ] 1024px checked
- [ ] 1440px checked

## Forms
- [ ] Contact form validates (client + server)
- [ ] Honeypot rejects spam
- [ ] Success/error toasts work
- [ ] Rate limiting active on `/api/contact`

## SEO
- [ ] `generateMetadata` present per page
- [ ] OpenGraph tags present
- [ ] Canonical URLs set
- [ ] JSON-LD present: Organization, LocalBusiness, Service (per service page), BreadcrumbList
- [ ] `sitemap.ts` / `robots.ts` reflect the full route list

## Pages present
- [ ] Home
- [ ] About
- [ ] Services index + all 6 service slugs
- [ ] Equipment
- [ ] Leadership
- [ ] HSEQ
- [ ] Careers
- [ ] Contact
- [ ] Privacy
- [ ] Terms
- [ ] 404
