/** Shared motion tokens — ANIMATION_GUIDE Section 1 */
export const motionEase = [0.22, 1, 0.36, 1] as const;

export const motionTokens = {
  duration: {
    micro: 0.2,
    section: 0.65,
    hero: 1.5,
    pageOut: 0.15,
    pageIn: 0.3,
  },
  stagger: {
    grid: 0.08,
    list: 0.06,
  },
  spring: {
    drawer: { type: "spring" as const, stiffness: 300, damping: 30 },
    card: { type: "spring" as const, stiffness: 400, damping: 28 },
    magnetic: { stiffness: 150, damping: 15, mass: 0.1 },
  },
  gsapEase: "power3.out",
} as const;

export const revealViewport = {
  once: true,
  margin: "-10% 0px",
} as const;
