"use client";

import { useEffect } from "react";

export function HeroMotionInner() {
  useEffect(() => {
    const section = document.getElementById("hero");
    const bg = section?.querySelector<HTMLElement>("[data-hero-bg]");
    const content = section?.querySelector<HTMLElement>("[data-hero-content]");

    if (!section || !bg) return;

    let ctx: { revert: () => void } | undefined;

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([gsapModule, scrollTriggerModule]) => {
        const gsap = gsapModule.default;
        const ScrollTrigger = scrollTriggerModule.default;
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          if (content) {
            gsap.to(content, {
              y: -40,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          }

          gsap.to(bg, {
            y: 80,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }, section);
      },
    );

    return () => {
      ctx?.revert();
    };
  }, []);

  return null;
}
