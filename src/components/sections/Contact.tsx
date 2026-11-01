import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Download,
  Mail,
  Phone,
} from "lucide-react";
import { site } from "../../content/site";
import { CopyButton } from "../ui/CopyButton";
import { Monogram } from "../ui/Monogram";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

function LinkedInMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

type ContactRowProps = {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  copyLabel: string;
  external?: boolean;
};

function ContactRow({
  icon,
  label,
  value,
  href,
  copyLabel,
  external,
}: ContactRowProps) {
  return (
    <div className="group flex items-center gap-3 p-4 transition-colors duration-300 hover:bg-mist/50 sm:p-5">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        className="flex min-w-0 flex-1 items-center gap-4"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink/10 bg-mist text-ocean transition-all duration-300 group-hover:border-teal/30 group-hover:bg-white group-hover:text-teal-deep">
          {icon}
        </span>

        <span className="min-w-0">
          <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-ink-soft">
            {label}
          </span>
          <span className="mt-1 block break-all text-[13px] font-medium tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-ocean sm:text-[15.5px]">
            {value}
          </span>
        </span>

        <ArrowUpRight
          size={16}
          className="ml-auto hidden shrink-0 text-ink/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-deep sm:block"
        />
      </a>

      <CopyButton value={value} label={copyLabel} />
    </div>
  );
}

export function Contact() {
  const linkedInUrl = site.linkedin.trim();

  return (
    <section
      id="contact"
      className="relative section-pad overflow-hidden bg-mist"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -left-8 top-10 select-none font-display text-[13rem] font-semibold leading-none tracking-[-0.08em] text-ink/[0.025]"
      >
        08
      </span>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

      <div className="shell relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            index="08"
            eyebrow={site.contact.eyebrow}
            title={site.contact.headline}
          />

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md text-[13.5px] leading-7 text-ink-soft">
              {site.contact.note}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex items-center gap-4">
              <Monogram tone="light" size="lg" />
              <div>
                <p className="font-display text-[18px] font-medium tracking-[-0.025em] text-ink">
                  {site.name}
                </p>
                <p className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.22em] text-ink-soft">
                  {site.role}
                </p>
                <p className="mt-1.5 text-[11.5px] text-ink-soft">
                  Customs Manifest &amp; Shipping Documentation
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-teal/20 bg-teal/[0.06] px-4 py-2.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
              <span className="font-mono text-[8.5px] uppercase tracking-[0.15em] text-teal-deep">
                Open to professional opportunities
              </span>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal delay={0.1}>
            <div className="rounded-[26px] border border-line bg-white p-2 shadow-[0_30px_80px_-52px_rgba(7,26,43,0.4)]">
              <div className="divide-y divide-line overflow-hidden rounded-[20px] border border-line/70">
                <ContactRow
                  icon={<Mail size={18} strokeWidth={1.7} />}
                  label="Email"
                  value={site.email}
                  href={`mailto:${site.email}`}
                  copyLabel="email address"
                />
                <ContactRow
                  icon={<Phone size={18} strokeWidth={1.7} />}
                  label="Mobile"
                  value={site.phoneDisplay}
                  href={`tel:${site.phoneHref}`}
                  copyLabel="mobile number"
                />
                {linkedInUrl ? (
                  <ContactRow
                    icon={<LinkedInMark />}
                    label="LinkedIn"
                    value="View professional profile"
                    href={linkedInUrl}
                    copyLabel="LinkedIn URL"
                    external
                  />
                ) : null}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <a
              href={site.resumeUrl}
              download
              className="group mt-3 flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-white/50 p-4 transition-all duration-300 hover:border-teal/30 hover:bg-white sm:p-5"
            >
              <span className="flex items-center gap-3.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink/10 bg-white text-ocean transition group-hover:border-teal/30 group-hover:text-teal-deep">
                  <Download size={16} strokeWidth={1.7} />
                </span>
                <span>
                  <span className="block text-[12.5px] font-medium text-ink">
                    Download Resume
                  </span>
                  <span className="mt-0.5 block font-mono text-[7.5px] uppercase tracking-[0.16em] text-ink-soft">
                    PDF · Professional profile
                  </span>
                </span>
              </span>

              <ArrowUpRight
                size={16}
                className="text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-deep"
              />
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 px-1 font-mono text-[7.5px] uppercase tracking-[0.16em] text-ink-soft">
              Direct contact · Email or mobile
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
