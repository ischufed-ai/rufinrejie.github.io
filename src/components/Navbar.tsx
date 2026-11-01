import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { site } from "../content/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { cn } from "../lib/utils";
import { MobileMenu } from "./MobileMenu";
import { Monogram } from "./ui/Monogram";

const navIds = site.nav.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(navIds);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || menuOpen
            ? "glass-dark"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="shell flex h-20 items-center justify-between gap-5">
          <a
            href="#home"
            aria-label="Rejie Rufin — home"
            className="group flex shrink-0 items-center gap-3"
          >
            <Monogram className="transition-transform duration-500 group-hover:-translate-y-0.5" />
            <span className="hidden flex-col sm:flex">
              <span className="font-display text-[12.5px] font-semibold uppercase tracking-[0.14em] text-white">
                Rejie Rufin
              </span>
              <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.25em] text-white/55">
                ICM Specialist
              </span>
            </span>
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-0.5 lg:flex"
          >
            {site.nav.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "group relative px-3 py-2 text-[12.5px] font-medium transition-colors duration-300",
                    isActive
                      ? "text-white"
                      : "text-white/55 hover:text-white",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-gradient-to-r from-aqua to-aqua/20 transition-transform duration-300",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full bg-mist px-5 py-2.5 text-[12px] font-medium text-navy shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] transition-all duration-300 hover:bg-aqua lg:inline-flex"
            >
              Let&apos;s Connect
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition hover:border-aqua/40 hover:text-aqua lg:hidden"
            >
              <Menu size={19} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        activeSection={activeSection}
      />
    </>
  );
}
