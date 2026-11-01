import { GraduationCap } from "lucide-react";
import { site } from "../../content/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Education() {
  return (
    <section
      id="education"
      className="relative section-pad-sm overflow-hidden bg-white"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

      <div className="shell relative grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center lg:gap-16">
        <SectionHeading
          index="07"
          eyebrow="Education"
          title="A foundation in shipping management."
        />

        <Reveal delay={0.12}>
          <div className="relative overflow-hidden rounded-[26px] bg-navy p-6 text-white shadow-[0_30px_80px_-50px_rgba(7,26,43,0.55)] sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 70% at 88% 10%, rgba(12,92,138,0.42), transparent 65%), radial-gradient(ellipse 55% 60% at 10% 100%, rgba(17,167,161,0.12), transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="dot-field pointer-events-none absolute right-0 top-0 h-2/3 w-2/3 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-7 right-2 select-none font-display text-[7.5rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.035]"
            >
              PIT
            </span>

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-aqua/20 bg-aqua/[0.08] text-aqua">
                  <GraduationCap size={24} strokeWidth={1.6} />
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/50">
                  Education
                </span>
              </div>

              <h3 className="mt-7 max-w-md font-display text-[clamp(1.25rem,2.3vw,1.7rem)] font-medium leading-tight tracking-[-0.03em] text-white">
                {site.education.school}
              </h3>
              <p className="mt-2 text-[13px] text-white/60">
                {site.education.degree}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                <span className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-aqua/80">
                  {site.education.period}
                </span>
                <span className="ml-auto flex items-center gap-2 font-mono text-[7.5px] uppercase tracking-[0.16em] text-white/50">
                  <span className="h-1 w-1 rounded-full bg-aqua/60" />
                  Shipping Management
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
