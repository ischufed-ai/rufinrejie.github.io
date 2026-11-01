import type { LucideIcon } from "lucide-react";
import {
  Database,
  FileText,
  Mail,
  Table2,
  Users,
  Workflow,
} from "lucide-react";
import { site } from "../../content/site";
import { cn } from "../../lib/utils";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const toolIcons: Record<string, LucideIcon> = {
  excel: Table2,
  word: FileText,
  outlook: Mail,
  teams: Users,
  etrade: Database,
  flow: Workflow,
};

export function Toolkit() {
  return (
    <section
      id="skills"
      className="relative section-pad overflow-hidden bg-mist"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -left-6 bottom-10 select-none font-display text-[13rem] font-semibold leading-none tracking-[-0.08em] text-ink/[0.022]"
      >
        06
      </span>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

      <div className="shell relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.64fr] lg:items-end">
          <SectionHeading
            index="06"
            eyebrow="Professional Toolkit"
            title="Tools That Support the Workflow"
          />
          <Reveal delay={0.12}>
            <p className="max-w-sm text-[13.5px] leading-7 text-ink-soft lg:ml-auto lg:pb-2">
              The systems I work in, and the professional habits that keep
              documentation accurate, timely, and easy to hand over.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {site.tools.map((tool, index) => {
            const Icon = toolIcons[tool.icon] ?? Workflow;

            return (
              <Reveal
                key={tool.name}
                delay={index * 0.045}
                className="h-full"
              >
                <article className="card-lift group flex h-full flex-col rounded-2xl border border-line bg-white p-4 shadow-[0_10px_30px_-26px_rgba(7,26,43,0.35)] hover:border-teal/30 hover:shadow-[0_22px_48px_-28px_rgba(7,26,43,0.28)] sm:p-5">
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink/10 bg-mist text-ocean transition-all duration-500 group-hover:border-navy group-hover:bg-navy group-hover:text-aqua">
                      <Icon size={17} strokeWidth={1.7} />
                    </span>
                    <span className="font-mono text-[8px] text-ink/20">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-[13px] font-medium leading-snug tracking-[-0.015em] text-ink">
                    {tool.name}
                  </h3>
                  <p className="mt-1.5 font-mono text-[7.5px] uppercase tracking-[0.14em] text-ink-soft">
                    {tool.category}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-5 overflow-hidden rounded-[26px] border border-line bg-white shadow-[0_24px_70px_-50px_rgba(7,26,43,0.35)]">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative overflow-hidden bg-navy p-7 text-white sm:p-9">
                <div
                  aria-hidden
                  className="dot-field pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_20%_20%,black,transparent_72%)]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full border border-aqua/10"
                />
                <p className="eyebrow relative text-aqua/80">
                  Core Professional Strengths
                </p>
                <h3 className="relative mt-4 max-w-[16ch] font-display text-[clamp(1.5rem,2.6vw,2rem)] font-medium leading-[1.1] tracking-[-0.035em] text-white">
                  The habits behind the work.
                </h3>
                <p className="relative mt-3 max-w-xs text-[12.5px] leading-6 text-white/55">
                  Qualities that keep documentation accurate and handoffs
                  reliable when the pace is high.
                </p>
                <div className="relative mt-8 flex items-center gap-3">
                  <span className="h-px w-8 bg-aqua/40" />
                  <span className="font-mono text-[7.5px] uppercase tracking-[0.2em] text-white/50">
                    06 professional strengths
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2">
                {site.strengths.map((strength, index) => (
                  <div
                    key={strength}
                    className={cn(
                      "group flex items-center gap-3 p-5 transition-colors duration-300 hover:bg-mist/60 sm:p-6",
                      index > 0 && "border-t border-line",
                      index < 2 && "sm:border-t-0",
                      index % 2 === 1 && "sm:border-l sm:border-line",
                    )}
                  >
                    <span className="font-mono text-[8.5px] text-teal-deep/50">
                      0{index + 1}
                    </span>
                    <span className="h-1 w-1 shrink-0 rounded-full bg-teal/50 transition-colors duration-300 group-hover:bg-teal" />
                    <p className="text-[12.5px] font-medium leading-snug text-ink">
                      {strength}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
