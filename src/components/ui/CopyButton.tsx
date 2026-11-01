import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "../../lib/utils";

type CopyButtonProps = {
  value: string;
  label: string;
  className?: string;
};

type CopyStatus = "idle" | "copied" | "error";

export function CopyButton({ value, label, className }: CopyButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  async function handleCopy() {
    if (timerRef.current) window.clearTimeout(timerRef.current);

    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    timerRef.current = window.setTimeout(() => setStatus("idle"), 2200);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${label}`}
        className={cn(
          "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink-soft transition-all duration-300 hover:border-teal/40 hover:text-teal-deep",
          status === "copied" && "border-teal/40 text-teal-deep",
          status === "error" && "border-red-300 text-red-600",
          className,
        )}
      >
        {status === "copied" ? (
          <Check size={15} strokeWidth={2} />
        ) : (
          <Copy size={14} strokeWidth={1.8} />
        )}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {status === "copied"
          ? `${label} copied to clipboard`
          : status === "error"
            ? "Copy failed. Please select the text manually."
            : ""}
      </span>
    </>
  );
}
