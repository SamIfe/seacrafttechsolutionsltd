"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import type { NavItem } from "@/lib/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motionTokens } from "@/lib/motion";

type MobileNavProps = {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNav({ items, isOpen, onClose }: MobileNavProps) {
  const reducedMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab" && navRef.current) {
        const focusable = navRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#172168]/60 backdrop-blur-sm lg:hidden"
            aria-hidden
            onClick={onClose}
          />
          <motion.nav
            ref={navRef}
            id="mobile-nav"
            initial={reducedMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={motionTokens.spring.drawer}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-[#172168] shadow-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <span className="font-heading text-sm font-semibold text-white">
                Menu
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                className="rounded-md p-2 text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#172168]"
                onClick={onClose}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <ul className="flex-1 overflow-y-auto px-2 py-4">
              {items.map((item) => (
                <li key={item.href} className="mb-1">
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2.5 font-medium text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#172168]"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <ul className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-[#F5BF23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#172168]"
                            onClick={onClose}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 p-4">
              <Link
                href="/contact"
                className="block rounded-md bg-[#F5BF23] px-4 py-3 text-center text-sm font-semibold text-[#172168] hover:bg-[#e8b31f] hover:text-[#172168] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#172168]"
                onClick={onClose}
              >
                Contact Us
              </Link>
            </div>
          </motion.nav>
        </>
      ) : null}
    </AnimatePresence>
  );
}
