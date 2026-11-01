import type { LucideIcon } from "lucide-react";
import {
  Archive,
  Inbox,
  RefreshCw,
  ScanSearch,
  Send,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "../../content/site";
import { EASE } from "../../lib/utils";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const processIcons: Record<string, LucideIcon> = {
  receive: Inbox,
  validate: ScanSearch,
  resolve: RefreshCw,
  submit: Send,
  improve: Archive,
};

export function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      className="relative section-pad overflow-hidden bg-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-teal/[0.045] blur-[100px]"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

      <div className="shell relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.64fr] lg:items-end">
          <SectionHeading
            index="04"
            eyebrow="How I Work"
            title={
              <>
                A disciplined approach to{" "}
                <span className="text-ocean">manifest quality.</span>
              </>
            }
          />
          <Reveal delay={0.12}>
            <p className="max-w-sm text-[13.5px] leading-7 text-ink-soft lg:ml-auto lg:pb-2">
              A repeatable five-step method for keeping shipment information
              accurate, compliant, and moving on schedule.
            </p>
          </Reveal>
        </div>

        {/* Desktop: horizontal process with a drawn connector. */}
        <div className="relative mt-16 hidden lg:block">
          <motion.div
            aria-hidden
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
            className="absolute left-[10%] right-[10%] top-8 h-px origin-left bg-gradient-to-r from-teal/70 via-ocean/45 to-teal/20"
          />

          <ol className="relative grid grid-cols-5 gap-6">
            {site.process.map((item, index) => {
              const Icon = processIcons[item.icon] ?? Inbox;

              return (
                <li key={item.step} className="group">
                  <Reveal
                    delay={0.12 + index * 0.09}
                    className="flex h-full w-full flex-col items-center text-center"
                  >
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-line bg-white text-ocean shadow-[0_14px_35px_-24px_rgba(7,26,43,0.4)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-teal/40 group-hover:bg-gradient-to-br group-hover:from-ocean group-hover:to-teal group-hover:text-white">
                      <Icon size={22} strokeWidth={1.6} />
                      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border border-white bg-aqua" />
                    </div>

                    <span className="mt-7 font-mono text-[8.5px] uppercase tracking-[0.22em] text-teal-deep">
                      Step {item.step}
                    </span>
                    <h3 className="mt-2.5 font-display text-[16.5px] font-medium leading-snug tracking-[-0.02em] text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 max-w-[13.5rem] text-[12.5px] leading-5 text-ink-soft">
                      {item.description}
                    </p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile / tablet: vertical process timeline. */}
        <div className="relative mt-12 lg:hidden">
          <div
            aria-hidden
            className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-teal/60 via-ocean/25 to-transparent"
          />
          <ol className="space-y-8">
            {site.process.map((item, index) => {
              const Icon = processIcons[item.icon] ?? Inbox;

              return (
                <li key={item.step} className="relative">
                  <Reveal delay={index * 0.05} className="flex gap-5">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-white text-ocean shadow-[0_10px_24px_-20px_rgba(7,26,43,0.4)]">
                      <Icon size={18} strokeWidth={1.7} />
                    </div>
                    <div className="pt-0.5">
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-teal-deep">
                        Step {item.step}
                      </span>
                      <h3 className="mt-1.5 font-display text-[16px] font-medium leading-snug tracking-[-0.02em] text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-md text-[12.5px] leading-5 text-ink-soft">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
