"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import type { NavLink } from "@/lib/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motionEase, motionTokens } from "@/lib/motion";
import { cn } from "@/lib/utils";

type MegaMenuProps = {
  id?: string;
  items: NavLink[];
  servicesHref: string;
  isOpen: boolean;
  onClose: () => void;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * motionTokens.stagger.list,
      duration: motionTokens.duration.micro,
      ease: motionEase,
    },
  }),
};

export function MegaMenu({
  id,
  items,
  servicesHref,
  isOpen,
  onClose,
  onPointerEnter,
  onPointerLeave,
}: MegaMenuProps) {
  const reducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          id={id}
          initial={
            reducedMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
          }
          animate={
            reducedMotion
              ? { opacity: 1 }
              : { opacity: 1, clipPath: "inset(0 0 0% 0)" }
          }
          exit={
            reducedMotion
              ? { opacity: 0 }
              : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
          }
          transition={{ duration: motionTokens.duration.micro, ease: motionEase }}
          className="absolute left-0 right-0 top-full z-50 border-t border-white/10 bg-[#172168] shadow-xl"
          onMouseEnter={onPointerEnter}
          onMouseLeave={onPointerLeave}
          role="region"
          aria-label="Services menu"
        >
          <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#F5BF23]">
              Our Services
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => (
                <motion.div
                  key={item.href}
                  custom={index}
                  initial={reducedMotion ? false : "hidden"}
                  animate="visible"
                  variants={itemVariants}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "group block h-full rounded-lg border border-white/10 bg-white/5 px-4 py-3",
                      "transition-colors hover:border-[#F5BF23]/40 hover:bg-white/10",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23]",
                    )}
                    onClick={onClose}
                  >
                    <span className="block font-heading text-sm font-semibold leading-snug text-white group-hover:text-[#F5BF23]">
                      {item.label}
                    </span>
                    {item.description ? (
                      <span className="mt-1.5 block line-clamp-2 text-xs leading-relaxed text-white/60">
                        {item.description}
                      </span>
                    ) : null}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 border-t border-white/10 pt-4">
              <Link
                href={servicesHref}
                className="text-sm font-medium text-[#F5BF23] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23]"
                onClick={onClose}
              >
                View all services →
              </Link>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
