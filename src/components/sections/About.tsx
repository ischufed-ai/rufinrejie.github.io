import type { LucideIcon } from "lucide-react";
import { Crosshair, Globe2, ShieldCheck, Ship } from "lucide-react";
import { site } from "../../content/site";
import { cn } from "../../lib/utils";
import { Monogram } from "../ui/Monogram";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const factIcons: Record<string, LucideIcon> = {
  focus: Crosshair,
  globe: Globe2,
  ship: Ship,
  shield: ShieldCheck,
};

function ProfileSnapshot() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -right-5 -top-5 hidden h-24 w-24 rounded-full border border-teal/20 sm:block"
      >
        <div className="absolute inset-3 rounded-full border border-dashed border-teal/20" />
      </div>

      <div className="relative overflow-hidden rounded-[28px] border border-ink/10 bg-white p-2 shadow-[0_30px_80px_-44px_rgba(7,26,43,0.35)]">
        <div className="relative overflow-hidden rounded-[22px] border border-ink/[0.06] bg-gradient-to-b from-mist/80 to-white p-6 sm:p-8">
          <div
            aria-hidden
            className="dot-field pointer-events-none absolute -right-10 -top-10 h-44 w-44 opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
          />

          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <Monogram tone="light" size="lg" />
              <div>
                <p className="font-display text-[17px] font-medium tracking-[-0.02em] text-ink">
                  {site.name}
                </p>
                <p className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.22em] text-ink-soft">
                  {site.role}
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/[0.06] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-teal-deep">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
              Open to opportunities
            </span>
          </div>

          <div className="my-7 h-px w-full bg-gradient-to-r from-ink/10 via-ink/5 to-transparent" />

          <div className="relative grid grid-cols-1 gap-x-6 sm:grid-cols-2">
            {site.about.facts.map((fact, index) => {
              const Icon = factIcons[fact.icon] ?? ShieldCheck;

              return (
                <div
                  key={fact.label}
                  className={cn(
                    "py-5",
                    index > 0 && "border-t border-ink/10",
                    index === 1 && "sm:border-t-0",
                    index % 2 === 1 && "sm:border-l sm:pl-6",
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Icon
                      size={12}
                      strokeWidth={1.8}
                      className="text-teal-deep"
                    />
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-ink-soft">
                      {fact.label}
                    </span>
                  </div>
                  <p className="mt-2.5 font-display text-[14px] font-medium leading-snug tracking-[-0.015em] text-ink sm:text-[14.5px]">
                    {fact.value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="relative mt-3 flex items-center justify-between border-t border-ink/10 pt-5">
            <span className="flex items-center gap-2 font-mono text-[7.5px] uppercase tracking-[0.18em] text-ink-soft">
              <span className="h-1 w-1 rounded-full bg-teal" />
              Documentation control
            </span>
            <div aria-hidden className="flex items-end gap-[2px]">
              {[5, 9, 6, 12, 7, 10, 5, 8].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="w-[2px] rounded-full bg-ink/15"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative section-pad overflow-hidden bg-mist"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -left-8 top-10 select-none font-display text-[13rem] font-semibold leading-none tracking-[-0.08em] text-ink/[0.025]"
      >
        01
      </span>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

      <div className="shell relative grid gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
        <div>
          <SectionHeading
            index="01"
            eyebrow={site.about.eyebrow}
            title={site.about.headline}
          />

          <div className="mt-7 space-y-5">
            {site.about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 32)} delay={0.12 + index * 0.05}>
                <p
                  className={cn(
                    "text-[14.5px] leading-[1.8] text-ink-soft sm:text-[15px]",
                    index === 0 &&
                      "text-[15px] leading-[1.8] text-ink/75 sm:text-[16px]",
                  )}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {site.about.chips.map((chip) => (
                <li key={chip}>
                  <span className="inline-flex rounded-full border border-ink/10 bg-white/70 px-3.5 py-2 font-mono text-[8.5px] uppercase tracking-[0.15em] text-ink-soft transition-all duration-300 hover:-translate-y-px hover:border-teal/35 hover:text-teal-deep">
                    {chip}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.38}>
            <div className="mt-10 border-l-2 border-teal/45 pl-5">
              <p className="max-w-md font-display text-[16px] font-medium leading-relaxed tracking-[-0.015em] text-ink sm:text-[17px]">
                Accuracy is not a final checkpoint. It is how the process is
                built.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:pt-20">
          <ProfileSnapshot />
        </Reveal>
      </div>
    </section>
  );
}
