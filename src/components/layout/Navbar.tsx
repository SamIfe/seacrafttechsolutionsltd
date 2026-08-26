"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";

import { isSectionLive, mainNav } from "@/lib/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { brandCtaClassName, cn } from "@/lib/utils";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Logo } from "@/components/layout/Logo";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavLinkAnimated } from "@/components/layout/NavLinkAnimated";
import { Button } from "@/components/ui/button";

const servicesNavItem = mainNav.find((item) => item.label === "Services");

const navLinkClassName =
  "rounded-md px-3 py-2 text-sm font-medium text-[#172168] transition-colors hover:text-[#F5BF23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7FAFC]";

export function Navbar() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 72],
    ["rgba(247,250,252,0.92)", "#F7FAFC"],
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 72],
    ["0 0 0 rgba(23,33,104,0)", "0 8px 24px rgba(23,33,104,0.08)"],
  );
  const borderBottomColor = useTransform(
    scrollY,
    [0, 72],
    ["rgba(23,33,104,0.06)", "rgba(23,33,104,0.12)"],
  );

  const openMegaMenu = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMegaOpen(true);
  }, []);

  const scheduleCloseMegaMenu = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 150);
  }, []);

  const closeMegaMenu = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMegaOpen(false);
  }, []);

  useEffect(() => {
    if (!megaOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMegaMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeMegaMenu, megaOpen]);

  useEffect(() => {
    closeMegaMenu();
  }, [pathname, closeMegaMenu]);

  return (
    <motion.header
      ref={headerRef}
      className={cn(
        "relative sticky top-0 z-50 border-b text-[#172168] backdrop-blur-md",
        reducedMotion &&
          "border-[#172168]/10 bg-[#F7FAFC] shadow-[0_8px_24px_rgba(23,33,104,0.08)]",
      )}
      style={
        reducedMotion
          ? undefined
          : { backgroundColor, boxShadow, borderBottomColor }
      }
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7FAFC]"
        >
          <Logo src="/logo/header-logo.svg" height={32} />
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center lg:flex"
          aria-label="Main navigation"
          onBlur={(event) => {
            if (!headerRef.current?.contains(event.relatedTarget as Node)) {
              closeMegaMenu();
            }
          }}
        >
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const live = isSectionLive(item.href);
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const hasChildren = live && Boolean(item.children?.length);

              if (!live) {
                return (
                  <li key={item.href}>
                    <span
                      className="cursor-not-allowed rounded-md px-3 py-2 text-sm font-medium text-[#172168]/35"
                      aria-disabled="true"
                    >
                      {item.label}
                    </span>
                  </li>
                );
              }

              if (hasChildren) {
                return (
                  <li
                    key={item.href}
                    onMouseEnter={openMegaMenu}
                    onMouseLeave={scheduleCloseMegaMenu}
                    onFocus={openMegaMenu}
                  >
                    <NavLinkAnimated
                      href={item.href}
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      aria-controls="services-mega-menu"
                      className={cn(
                        "flex items-center gap-1",
                        navLinkClassName,
                      )}
                      isActive={isActive || megaOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 opacity-70 transition-transform duration-200",
                          megaOpen && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </NavLinkAnimated>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <NavLinkAnimated
                    href={item.href}
                    className={navLinkClassName}
                    isActive={isActive}
                  >
                    {item.label}
                  </NavLinkAnimated>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {isSectionLive("/contact") ? (
            <MagneticButton className="hidden lg:inline-flex">
              <Button asChild className={brandCtaClassName}>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </MagneticButton>
          ) : (
            <Button
              type="button"
              disabled
              className={`${brandCtaClassName} hidden cursor-not-allowed lg:inline-flex`}
            >
              Contact Us
            </Button>
          )}

          <button
            type="button"
            className="rounded-md p-2 text-[#172168] hover:bg-[#172168]/5 hover:text-[#F5BF23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7FAFC] lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>

      {isSectionLive("/services") && servicesNavItem?.children ? (
        <MegaMenu
          id="services-mega-menu"
          items={servicesNavItem.children}
          servicesHref={servicesNavItem.href}
          isOpen={megaOpen}
          onClose={closeMegaMenu}
          onPointerEnter={openMegaMenu}
          onPointerLeave={scheduleCloseMegaMenu}
        />
      ) : null}

      <MobileNav
        items={mainNav}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </motion.header>
  );
}
