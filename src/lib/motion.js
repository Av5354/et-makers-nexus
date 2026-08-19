import { useEffect } from "react";

let gsapPromise;

/** Lazily load GSAP + ScrollTrigger in the browser only. */
export function loadGsap() {
  if (!gsapPromise) {
    gsapPromise = Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        return { gsap, ScrollTrigger };
      },
    );
  }
  return gsapPromise;
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Reveals every [data-reveal] descendant of `ref` with a fade + slide-in
 * from the left, staggered and triggered on scroll.
 */
export function useReveal(ref, options = {}) {
  const { stagger = 0.12, x = -56, y = 0, start = "top 82%" } = options;

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    let ctx;
    let cancelled = false;

    if (prefersReducedMotion()) return;

    loadGsap().then(({ gsap }) => {
      if (cancelled || !ref.current) return;
      ctx = gsap.context(() => {
        const groups = new Map();
        ref.current.querySelectorAll("[data-reveal]").forEach((el) => {
          const key = el.dataset.revealGroup || "default";
          if (!groups.has(key)) groups.set(key, []);
          groups.get(key).push(el);
        });

        groups.forEach((els) => {
          gsap.from(els, {
            opacity: 0,
            x,
            y,
            duration: 0.9,
            ease: "power3.out",
            stagger,
            scrollTrigger: { trigger: els[0], start },
          });
        });
      }, ref);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [ref, stagger, x, y, start]);
}
