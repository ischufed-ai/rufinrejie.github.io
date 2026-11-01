import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  onDark?: boolean;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  onDark = false,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn(centered && "text-center", className)}>
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-3.5",
            centered && "justify-center",
          )}
        >
          <span
            className={cn(
              "inline-flex h-7 min-w-7 items-center justify-center rounded-full border px-2 font-mono text-[10px] tracking-[0.06em]",
              onDark
                ? "border-white/15 text-aqua/80"
                : "border-ink/10 bg-white/60 text-teal-deep",
            )}
          >
            {index}
          </span>
          <span
            className={cn(
              "h-px w-8",
              onDark ? "bg-aqua/40" : "bg-teal-deep/30",
            )}
          />
          <span
            className={cn(
              "eyebrow",
              onDark ? "text-aqua/90" : "text-teal-deep",
            )}
          >
            {eyebrow}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.07}>
        <h2
          className={cn(
            "mt-5 max-w-[20ch] font-display text-[clamp(2.15rem,4.4vw,3.6rem)] font-medium leading-[1.03] tracking-[-0.045em]",
            onDark ? "text-white" : "text-ink",
            centered && "mx-auto max-w-[22ch]",
            titleClassName,
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-5 max-w-xl text-[15px] leading-7",
              onDark ? "text-white/60" : "text-ink-soft",
              centered && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
