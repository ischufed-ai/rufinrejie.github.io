import { useState } from "react";
import type { PointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { FileCheck2, Globe2 } from "lucide-react";
import { site } from "../../content/site";

const barcode = [7, 13, 9, 18, 6, 15, 10, 20, 8, 16, 11, 7, 14];

function PortraitArtwork({ showMonogram = true }: { showMonogram?: boolean }) {
  return (
    <div aria-hidden className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(12,92,138,0.62), transparent 58%), linear-gradient(180deg, #0a2337 0%, #071a2b 62%, #04121e 100%)",
        }}
      />
      <div className="dot-field absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_50%_42%,black,transparent_72%)]" />

      <div className="absolute left-1/2 top-[44%] h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-aqua/10 sm:h-[21rem] sm:w-[21rem]" />
      <div className="absolute left-1/2 top-[44%] h-[13rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-aqua/15 sm:h-[15rem] sm:w-[15rem] animate-spin-slow" />
      <div className="absolute left-1/2 top-[44%] h-[9rem] w-[9rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-2xl" />

      {showMonogram ? (
        <div className="absolute inset-0 flex items-center justify-center pb-[6%]">
          <div className="flex flex-col items-center">
            <span
              className="font-display text-[6.5rem] font-medium leading-none tracking-[-0.09em] sm:text-[7.5rem]"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(243, 247, 249, 0.44)",
              }}
            >
              RR
            </span>
            <span className="mt-4 flex items-center gap-3">
              <span className="h-px w-6 bg-aqua/40" />
              <span className="font-mono text-[8px] uppercase tracking-[0.32em] text-aqua/60">
                Shipping · Customs
              </span>
              <span className="h-px w-6 bg-aqua/40" />
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function Portrait() {
  const [imageFailed, setImageFailed] = useState(false);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 20,
  });

  const showPhoto = Boolean(site.photo) && !imageFailed;

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div className="relative mx-auto w-full max-w-[21rem] sm:max-w-[25rem] lg:max-w-[26rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-14 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 55% 40%, rgba(17,167,161,0.34), rgba(12,92,138,0.16) 46%, transparent 70%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-10 hidden h-64 w-64 rounded-full border border-aqua/10 sm:block"
      >
        <div className="absolute inset-5 rounded-full border border-dashed border-aqua/10 animate-spin-slow" />
      </div>

      <div className="animate-float-soft">
        <motion.div
          className="relative [transform-style:preserve-3d]"
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <div
            className="relative rounded-[32px] p-px"
            style={{
              background:
                "linear-gradient(155deg, rgba(93,214,208,0.75), rgba(12,92,138,0.25) 42%, rgba(255,255,255,0.08) 72%, rgba(93,214,208,0.42))",
              boxShadow:
                "0 46px 110px -40px rgba(0,0,0,0.9), 0 0 70px -28px rgba(17,167,161,0.45)",
            }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[31px] bg-navy-deep">
              {showPhoto ? (
                <>
                  <PortraitArtwork showMonogram={false} />
                  <img
                    src={site.photo}
                    alt={site.photoAlt}
                    width={1000}
                    height={1250}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    onError={() => setImageFailed(true)}
                    className="absolute inset-0 h-full w-full object-cover drop-shadow-[0_20px_42px_rgba(4,18,30,0.5)]"
                  />
                </>
              ) : (
                <PortraitArtwork />
              )}

              <div className="noise-overlay" />
              <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-transparent to-navy-deep/90" />

              <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[8.5px] uppercase tracking-[0.26em] text-white/55">
                    Portfolio — 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/55">
                    <span className="h-1 w-1 rounded-full bg-aqua" />
                    Philippines
                  </span>
                </div>

                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-7 bg-aqua/60" />
                    <span className="font-mono text-[7.5px] uppercase tracking-[0.22em] text-aqua/80">
                      Import Customs Manifest
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-display text-[17px] font-medium tracking-[-0.02em] text-white">
                        {site.name}
                      </p>
                      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.26em] text-white/60">
                        {site.role}
                      </p>
                    </div>
                    <div aria-hidden className="flex items-end gap-[2px] pb-0.5">
                      {barcode.map((height, index) => (
                        <span
                          key={`${height}-${index}`}
                          className="w-[2px] rounded-full bg-white/30"
                          style={{ height: `${height}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating credentials — deliberately small and factual. */}
      <div className="absolute -left-2 top-16 z-20 hidden w-[11.5rem] animate-float-soft flex-col rounded-2xl border border-white/10 bg-navy/80 p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.85)] backdrop-blur-xl xl:-left-8 xl:flex">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-aqua/15 bg-aqua/10 text-aqua">
            <Globe2 size={14} strokeWidth={1.7} />
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/55">
            Markets supported
          </span>
        </div>
        <p className="mt-3 font-display text-[13px] font-medium text-white">
          Vietnam &amp; Cambodia
        </p>
      </div>

      <div className="absolute -right-2 bottom-20 z-20 hidden w-[11.5rem] animate-float-soft-delayed flex-col rounded-2xl border border-white/10 bg-navy/80 p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.85)] backdrop-blur-xl xl:-right-7 xl:flex">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-aqua/15 bg-aqua/10 text-aqua">
            <FileCheck2 size={14} strokeWidth={1.7} />
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/55">
            Current focus
          </span>
        </div>
        <p className="mt-3 font-display text-[13px] font-medium text-white">
          Import customs manifest
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2 xl:hidden">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/55">
          Vietnam &amp; Cambodia
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/55">
          Import customs manifest
        </span>
      </div>
    </div>
  );
}
