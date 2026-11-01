import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { site } from "../../content/site";
import { EASE } from "../../lib/utils";
import { ButtonLink } from "../ui/ButtonLink";
import { HeroBackdrop } from "../ui/HeroBackdrop";
import { Portrait } from "../ui/Portrait";
import { Reveal } from "../ui/Reveal";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-navy pt-20 text-white"
    >
      <HeroBackdrop />

      <div className="shell relative z-10 grid flex-1 items-center gap-14 pb-16 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:pb-20 lg:pt-12">
        <div className="max-w-[44rem]">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-aqua" />
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.26em] text-white/65 sm:text-[10px]">
                {site.hero.label}
              </span>
            </div>
          </Reveal>

          <h1 className="mt-7 font-display text-[clamp(4rem,11.2vw,8.5rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em]">
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block text-white"
                initial={reduceMotion ? false : { y: "112%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.1, ease: EASE }}
              >
                Rejie
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block text-gradient-aqua"
                initial={reduceMotion ? false : { y: "112%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.22, ease: EASE }}
              >
                Rufin
              </motion.span>
            </span>
          </h1>

          <Reveal delay={0.34}>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-aqua sm:text-[11px]">
                ICM Specialist
              </span>
              <span className="h-px w-14 bg-gradient-to-r from-aqua/60 to-transparent" />
              <span className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-white/55">
                Philippines
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <ul className="mt-7 grid max-w-[34rem] grid-cols-1 sm:grid-cols-2">
              {site.hero.specializations.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 border-t border-white/10 py-2.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/60 sm:text-[10.5px]"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-aqua/80" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.46}>
            <h2 className="mt-8 max-w-[41rem] font-display text-[clamp(1.5rem,2.4vw,2.15rem)] font-medium leading-[1.22] tracking-[-0.035em] text-white">
              Documentation precision that{" "}
              <span className="text-gradient-aqua">keeps cargo moving.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.52}>
            <p className="mt-5 max-w-[40rem] text-[13.5px] leading-[1.78] text-white/55 sm:text-[15px]">
              {site.hero.support}
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink
                href="#experience"
                icon={<ArrowRight size={16} />}
                className="w-full sm:w-auto"
              >
                Explore My Experience
              </ButtonLink>
              <ButtonLink
                href={site.resumeUrl}
                variant="outline-light"
                download
                icon={<Download size={15} />}
                className="w-full sm:w-auto"
              >
                Download Resume
              </ButtonLink>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-1 py-3 text-[12px] font-medium text-white/60 transition-colors hover:text-white"
              >
                Contact me
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} y={30} className="relative">
          <Portrait />
        </Reveal>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="shell flex items-center justify-between gap-6">
          <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-4 py-6 sm:grid-cols-4">
            {site.hero.values.map((value, index) => (
              <div key={value} className="flex items-baseline gap-3">
                <span className="font-mono text-[9px] text-aqua/60">
                  0{index + 1}
                </span>
                <span className="text-[9.5px] font-medium uppercase tracking-[0.21em] text-white/60 sm:text-[10px]">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#about"
            aria-label="Scroll to the professional profile"
            className="group hidden shrink-0 items-center gap-3 text-white/55 transition hover:text-aqua xl:flex"
          >
            <span className="font-mono text-[8px] uppercase tracking-[0.28em]">
              Scroll
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition group-hover:border-aqua/40">
              <ArrowDown size={14} className="animate-scroll-cue" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
