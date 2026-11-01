import { useEffect, useState } from "react";

/**
 * Highlights the section crossing the middle of the viewport.
 * The final section is also selected when the page reaches the bottom.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-32% 0px -58% 0px", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));

    const handleScroll = () => {
      const nearlyAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;

      if (nearlyAtBottom) setActive(ids[ids.length - 1] ?? "");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ids]);

  return active;
}
