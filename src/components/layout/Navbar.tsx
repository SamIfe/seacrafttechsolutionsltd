"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Logo } from "@/components/layout/Logo";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavLinkAnimated } from "@/components/layout/NavLinkAnimated";
import { Button } from "@/components/ui/button";

const servicesNavItem = mainNav.find((item) => item.label === "Services");

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

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
    <header
      ref={headerRef}
      className="relative sticky top-0 z-50 border-b border-white/10 bg-[#172168] text-white shadow-lg shadow-black/20"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#172168]"
        >
          <Logo height={36} />
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
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const hasChildren = Boolean(item.children?.length);

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
                        "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-[#F5BF23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#172168]",
                        (isActive || megaOpen) && "text-[#F5BF23]",
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
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-[#F5BF23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#172168]",
                      isActive && "text-[#F5BF23]",
                    )}
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
          <MagneticButton className="hidden lg:inline-flex">
            <Button asChild className="bg-[#F5BF23] text-[#172168] hover:bg-[#e8b31f] hover:text-[#172168]">
              <Link href="/contact">Contact</Link>
            </Button>
          </MagneticButton>

          <button
            type="button"
            className="rounded-md p-2 text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#172168] lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>

      {servicesNavItem?.children ? (
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
    </header>
  );
}
