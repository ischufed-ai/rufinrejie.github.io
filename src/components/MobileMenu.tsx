import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { site } from "../content/site";
import { EASE, cn } from "../lib/utils";
import { ButtonLink } from "./ui/ButtonLink";
import { Monogram } from "./ui/Monogram";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  activeSection: string;
};

export function MobileMenu({ open, onClose, activeSection }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const previouslyFocused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 100);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      ).filter((element) => element.offsetParent !== null);

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement;

      if (
        event.shiftKey &&
        (activeElement === first || !panelRef.current.contains(activeElement))
      ) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-navy-deep lg:hidden"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 55% at 80% 0%, rgba(12,92,138,0.35), transparent 65%), radial-gradient(ellipse 70% 50% at 10% 100%, rgba(17,167,161,0.16), transparent 70%)",
              }}
            />
            <div className="dot-field absolute inset-0 opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
            <span className="absolute -bottom-10 -right-4 font-display text-[15rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.025]">
              RR
            </span>
          </div>

          <div className="shell relative flex h-20 shrink-0 items-center justify-between">
            <a
              href="#home"
              onClick={onClose}
              className="flex items-center gap-3"
              aria-label="Rejie Rufin — home"
            >
              <Monogram />
              <span className="flex flex-col">
                <span className="font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
                  Rejie Rufin
                </span>
                <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.24em] text-white/55">
                  ICM Specialist
                </span>
              </span>
            </a>

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:border-aqua/40 hover:text-aqua"
            >
              <X size={18} />
            </button>
          </div>

          <div className="shell relative flex flex-1 flex-col pb-8 pt-3">
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col border-t border-white/10"
            >
              {site.nav.map((item, index) => {
                const isActive = activeSection === item.href.replace("#", "");

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive ? "location" : undefined}
                    initial={
                      reduceMotion ? false : { opacity: 0, y: 14 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.06 + index * 0.045,
                      ease: EASE,
                    }}
                    className={cn(
                      "group flex items-center justify-between border-b border-white/10 py-4 transition-colors",
                      isActive
                        ? "text-white"
                        : "text-white/65 hover:text-white",
                    )}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-aqua/50">
                        0{index + 1}
                      </span>
                      <span className="font-display text-[1.55rem] font-medium tracking-[-0.03em]">
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={17}
                      className={cn(
                        "transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-aqua",
                        isActive ? "text-aqua" : "text-white/25",
                      )}
                    />
                  </motion.a>
                );
              })}
            </nav>

            <div className="mt-auto pt-8">
              <ButtonLink
                href="#contact"
                onClick={onClose}
                variant="aqua"
                className="w-full"
                icon={<ArrowUpRight size={16} />}
              >
                Let&apos;s Connect
              </ButtonLink>

              <div className="mt-6 flex flex-col gap-1.5 font-mono text-[10px] tracking-[0.05em] text-white/65">
                <a
                  href={`mailto:${site.email}`}
                  className="w-fit transition hover:text-aqua"
                >
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="w-fit transition hover:text-aqua"
                >
                  {site.phoneDisplay}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/50">
                <span>Accuracy</span>
                <span className="h-0.5 w-0.5 rounded-full bg-aqua/50" />
                <span>Compliance</span>
                <span className="h-0.5 w-0.5 rounded-full bg-aqua/50" />
                <span>Ownership</span>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
