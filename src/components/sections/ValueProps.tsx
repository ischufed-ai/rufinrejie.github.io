import type { LucideIcon } from "lucide-react";
import {
  Clock3,
  Crosshair,
  MessagesSquare,
  Route,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { site } from "../../content/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const valueIcons: Record<string, LucideIcon> = {
  precision: Crosshair,
  reliability: Clock3,
  compliance: ShieldCheck,
  coordination: MessagesSquare,
  adaptability: Route,
  improvement: TrendingUp,
};

export function ValueProps() {
  return (
    <section
      id="value"
      className="relative section-pad overflow-hidden bg-navy text-white"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 10% 18%, rgba(12,92,138,0.38), transparent 68%), radial-gradient(ellipse 45% 40% at 88% 82%, rgba(17,167,161,0.13), transparent 72%)",
          }}
        />
        <div className="grid-field absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
        <div className="dot-field absolute right-0 top-0 h-2/3 w-1/2 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        <div className="noise-overlay" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="shell relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            onDark
            index="05"
            eyebrow="Professional Value"
            title="What I Bring to the Operation"
          />

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md text-[13.5px] leading-7 text-white/55">
              Operational reliability is built from more than completed
              paperwork. It comes from ownership, clear coordination, and the
              discipline to hold the process together under pressure.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-aqua/40" />
              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/55">
                Built for time-sensitive work
              </span>
            </div>
          </Reveal>
        </div>

        <div className="lg:pt-2">
          {site.valueProps.map((item, index) => {
            const Icon = valueIcons[item.icon] ?? Crosshair;

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article
                  className={`group relative border-t border-white/10 ${
                    index === site.valueProps.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex items-start gap-4 py-6 sm:gap-6 sm:py-7">
                    <span className="mt-1 font-mono text-[9px] text-white/25">
                      0{index + 1}
                    </span>

                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-aqua/15 bg-aqua/[0.06] text-aqua transition-all duration-500 group-hover:border-aqua/40 group-hover:bg-aqua/10">
                      <Icon size={17} strokeWidth={1.7} />
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-[14px] font-medium uppercase tracking-[0.03em] text-white/90 transition-colors duration-300 group-hover:text-aqua sm:text-[15px]">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-[12.5px] leading-6 text-white/55 sm:text-[13px]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-aqua via-teal to-transparent transition-all duration-700 group-hover:w-full" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
