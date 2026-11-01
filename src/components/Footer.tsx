import { ArrowUp, ArrowUpRight } from "lucide-react";
import { site } from "../content/site";
import { Monogram } from "./ui/Monogram";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="dot-field absolute inset-x-0 top-0 h-2/3 opacity-15 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <span className="absolute -bottom-16 right-0 select-none font-display text-[16rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.02]">
          RR
        </span>
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua/30 to-transparent" />

      <div className="shell relative py-14">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.55fr_0.85fr]">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="Rejie Rufin — back to home"
            >
              <Monogram size="lg" />
              <span>
                <span className="block font-display text-[13px] font-semibold uppercase tracking-[0.15em] text-white">
                  Rejie Rufin
                </span>
                <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.24em] text-white/55">
                  ICM Specialist
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-[11.5px] leading-6 text-white/60">
              {site.footer.descriptor}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[8px] uppercase tracking-[0.18em] text-white/55">
              <span>Accuracy</span>
              <span className="h-0.5 w-0.5 rounded-full bg-aqua/50" />
              <span>Compliance</span>
              <span className="h-0.5 w-0.5 rounded-full bg-aqua/50" />
              <span>Ownership</span>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/50">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
              {site.nav.slice(1).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[11.5px] text-white/65 transition-colors hover:text-aqua"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/50">
              Direct
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-1.5 break-all text-[11.5px] text-white/65 transition-colors hover:text-aqua"
                >
                  {site.email}
                  <ArrowUpRight
                    size={12}
                    className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex items-center gap-1.5 text-[11.5px] text-white/65 transition-colors hover:text-aqua"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.resumeUrl}
                  download
                  className="group inline-flex items-center gap-1.5 text-[11.5px] text-white/65 transition-colors hover:text-aqua"
                >
                  Resume
                  <ArrowUpRight
                    size={12}
                    className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/55">
            © 2026 Rejie Rufin
          </p>

          <p className="hidden font-mono text-[8px] uppercase tracking-[0.18em] text-white/50 md:block">
            Import Customs Manifest • Shipping Documentation • Process
            Excellence
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-white/60 transition-colors hover:text-aqua"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-aqua/40">
              <ArrowUp
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
