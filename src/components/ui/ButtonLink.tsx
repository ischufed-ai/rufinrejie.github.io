import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant =
  | "light"
  | "outline-light"
  | "navy"
  | "outline-dark"
  | "aqua";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  download?: boolean;
  external?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
};

const variants: Record<ButtonVariant, string> = {
  light:
    "bg-mist text-navy shadow-[0_14px_34px_-18px_rgba(0,0,0,0.85)] hover:bg-white hover:shadow-[0_20px_46px_-18px_rgba(93,214,208,0.55)]",
  "outline-light":
    "border border-white/20 bg-white/[0.04] text-white hover:border-aqua/50 hover:bg-white/[0.08]",
  navy: "bg-navy text-white shadow-[0_14px_34px_-18px_rgba(7,26,43,0.7)] hover:bg-ocean",
  "outline-dark":
    "border border-ink/15 bg-white/60 text-ink hover:border-teal/40 hover:bg-white",
  aqua: "bg-aqua text-navy shadow-[0_14px_34px_-18px_rgba(17,167,161,0.65)] hover:bg-white",
};

export function ButtonLink({
  href,
  children,
  variant = "light",
  icon,
  className,
  download,
  external,
  ariaLabel,
  onClick,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[13px] font-medium leading-none tracking-[0.01em] transition-all duration-300 sm:min-h-[3.25rem] sm:px-7 sm:text-sm",
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      {icon ? (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </a>
  );
}
