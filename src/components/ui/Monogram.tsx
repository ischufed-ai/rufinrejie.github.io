import { cn } from "../../lib/utils";

type MonogramProps = {
  className?: string;
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  label?: string;
};

const sizeClasses = {
  sm: "h-9 w-9 rounded-[11px] text-[12px]",
  md: "h-11 w-11 rounded-[13px] text-[14px]",
  lg: "h-14 w-14 rounded-[16px] text-[16px]",
};

export function Monogram({
  className,
  tone = "dark",
  size = "md",
  label,
}: MonogramProps) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden border",
        tone === "dark"
          ? "border-white/15 bg-white/[0.06] text-white"
          : "border-navy/10 bg-navy text-white",
        sizeClasses[size],
        className,
      )}
    >
      <span className="font-display font-semibold tracking-[-0.12em]">RR</span>
      <span className="absolute right-1.5 top-1.5 h-1 w-1 rounded-full bg-aqua" />
      <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-aqua/70 to-transparent" />
    </span>
  );
}
