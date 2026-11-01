import { ArrowUpRight, Download } from "lucide-react";
import { site } from "../../content/site";
import { ButtonLink } from "../ui/ButtonLink";
import { Reveal } from "../ui/Reveal";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-navy py-28 text-white sm:py-32 lg:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 50% 115%, rgba(17,167,161,0.28), transparent 68%), radial-gradient(ellipse 50% 60% at 12% 0%, rgba(12,92,138,0.32), transparent 70%)",
          }}
        />
        <div className="grid-field absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        <div className="dot-field absolute inset-x-0 bottom-0 h-2/3 opacity-20 [mask-image:linear-gradient(to_top,black,transparent)]" />

        <svg
          className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 opacity-60"
          viewBox="0 0 700 700"
          fill="none"
        >
          <circle
            cx="350"
            cy="350"
            r="240"
            stroke="#5DD6D0"
            strokeOpacity="0.07"
          />
          <circle
            cx="350"
            cy="350"
            r="320"
            stroke="#5DD6D0"
            strokeOpacity="0.045"
            strokeDasharray="2 14"
          />
          <path
            d="M40 480C190 400 260 540 380 440C500 340 570 220 680 250"
            stroke="#5DD6D0"
            strokeOpacity="0.12"
          />
          <circle cx="680" cy="250" r="2.5" fill="#5DD6D0" opacity="0.5" />
          <circle cx="380" cy="440" r="2" fill="#5DD6D0" opacity="0.35" />
        </svg>

        <span
          aria-hidden
          className="absolute -bottom-16 right-4 select-none font-display text-[18rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.022] lg:right-16"
        >
          RR
        </span>
        <div className="noise-overlay" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="shell relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
              <span className="font-mono text-[9px] uppercase tracking-[0.26em] text-white/60">
                {site.cta.eyebrow}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-7 font-display text-[clamp(2.5rem,6.2vw,4.9rem)] font-medium leading-[1.02] tracking-[-0.05em] text-white">
              {site.cta.headline[0]}
              <br />
              <span className="text-gradient-aqua">{site.cta.headline[1]}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-2xl text-[13.5px] leading-7 text-white/55 sm:text-[14.5px]">
              {site.cta.support}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href="#contact"
                icon={<ArrowUpRight size={16} />}
                className="w-full sm:w-auto"
              >
                Contact Me
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
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex items-center justify-center gap-3 font-mono text-[7.5px] uppercase tracking-[0.22em] text-white/50">
              <span className="h-px w-8 bg-white/15" />
              Accuracy / Compliance / Ownership
              <span className="h-px w-8 bg-white/15" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
