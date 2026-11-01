import { MapPin } from "lucide-react";
import { site } from "../../content/site";
import { cn } from "../../lib/utils";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative section-pad overflow-hidden bg-mist"
    >
      <div className="shell relative grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            index="03"
            eyebrow="Career Journey"
            title="A career built across shipping, customs, operations, and public service."
            titleClassName="max-w-[17ch]"
          />

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md text-[13.5px] leading-7 text-ink-soft">
              From frontline documentation to process ownership, each role added
              a layer: regulatory handling, operational coordination, exception
              resolution, and accountability for deadlines.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 hidden border-t border-ink/10 pt-5 lg:block">
              <p className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-ink-soft">
                Experience across
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {[
                  "Shipping & logistics",
                  "Customs documentation",
                  "Public service",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-[11.5px] text-ink-soft"
                  >
                    <span className="h-1 w-1 rounded-full bg-teal" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <ol className="relative">
          <span
            aria-hidden
            className="absolute bottom-6 left-[21px] top-6 w-[2px] bg-gradient-to-b from-teal via-teal/40 to-transparent"
          />
          <span
            aria-hidden
            className="absolute bottom-6 left-[21px] top-6 w-[2px] bg-teal/30 blur-[3px]"
          />

          {site.experience.map((item, index) => (
            <li key={item.company} className="relative pb-8 pl-12 last:pb-0 sm:pl-14">
              <span
                aria-hidden
                className={cn(
                  "absolute left-[14px] top-5 z-10 flex h-[17px] w-[17px] items-center justify-center rounded-full border-[3px] border-mist",
                  item.current
                    ? "bg-teal shadow-[0_0_0_5px_rgba(17,167,161,0.12)]"
                    : "bg-white ring-1 ring-teal/30",
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    item.current ? "bg-white" : "bg-teal/70",
                  )}
                />
              </span>

              <Reveal delay={index * 0.06}>
                <article
                  className={cn(
                    "card-lift group relative rounded-[22px] border p-5 backdrop-blur-sm hover:border-teal/30 hover:bg-white hover:shadow-[0_26px_60px_-36px_rgba(7,26,43,0.3)] sm:p-7",
                    item.current
                      ? "border-teal/25 bg-white shadow-[0_20px_50px_-38px_rgba(17,167,161,0.5)]"
                      : "border-line bg-white/75",
                  )}
                >
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center rounded-full border border-ink/10 bg-mist px-3 py-1 font-mono text-[8.5px] uppercase tracking-[0.16em] text-ocean">
                      {item.period}
                    </span>

                    {item.current ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-teal-deep">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
                        Current
                      </span>
                    ) : null}

                    <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-ink-soft sm:ml-auto">
                      <MapPin size={11} strokeWidth={1.8} />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-[17px] font-medium leading-snug tracking-[-0.025em] text-ink sm:text-[20px]">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-[12px] font-medium text-teal-deep sm:text-[13px]">
                    {item.role}
                  </p>
                  <p className="mt-3 text-[13px] leading-6 text-ink-soft">
                    {item.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2.5 text-[12.5px] leading-5 text-ink-soft"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal/60" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-mist px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-ink-soft ring-1 ring-ink/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
