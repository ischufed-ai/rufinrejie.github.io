import type { LucideIcon } from "lucide-react";
import {
  ClipboardCheck,
  Network,
  PlaneTakeoff,
  Ship,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { site } from "../../content/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const expertiseIcons: Record<string, LucideIcon> = {
  manifest: ClipboardCheck,
  freight: Ship,
  compliance: ShieldCheck,
  coordination: Network,
  air: PlaneTakeoff,
  process: Workflow,
};

export function Expertise() {
  return (
    <section
      id="expertise"
      className="relative section-pad overflow-hidden bg-white"
    >
      <div className="shell relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <SectionHeading
            index="02"
            eyebrow="Core Expertise"
            title={
              <>
                Where I Create{" "}
                <span className="text-ocean">Operational Value</span>
              </>
            }
          />
          <Reveal delay={0.12}>
            <p className="max-w-sm text-[13.5px] leading-7 text-ink-soft lg:ml-auto lg:pb-2">
              Six areas where documentation discipline becomes operational
              reliability — from first receipt to final filing.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.expertise.map((item, index) => {
            const Icon = expertiseIcons[item.icon] ?? Workflow;

            return (
              <Reveal
                key={item.title}
                delay={index * 0.055}
                className="h-full"
              >
                <article className="card-lift group relative flex h-full min-h-[17.5rem] flex-col overflow-hidden rounded-[22px] border border-line bg-mist/60 p-6 hover:border-teal/30 hover:bg-white hover:shadow-[0_28px_60px_-32px_rgba(7,26,43,0.28)]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between">
                    <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[14px] border border-ink/10 bg-white text-ocean shadow-[0_10px_24px_-18px_rgba(7,26,43,0.35)]">
                      <span className="absolute inset-0 bg-gradient-to-br from-ocean to-teal opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <Icon
                        size={20}
                        strokeWidth={1.7}
                        className="relative z-10 transition-colors duration-500 group-hover:text-white"
                      />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.16em] text-ink/25">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="relative mt-7 font-mono text-[8.5px] uppercase tracking-[0.22em] text-teal-deep">
                    {item.kicker}
                  </p>
                  <h3 className="relative mt-2 font-display text-[18px] font-medium leading-snug tracking-[-0.025em] text-ink sm:text-[19px]">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 pb-6 text-[13px] leading-6 text-ink-soft">
                    {item.description}
                  </p>

                  <div className="relative mt-auto flex items-center gap-2 pt-2">
                    <span className="h-px flex-1 bg-gradient-to-r from-ink/10 to-transparent transition-colors duration-500 group-hover:from-teal/30" />
                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-ink/25 transition-colors duration-500 group-hover:text-teal-deep">
                      0{index + 1} / 06
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
