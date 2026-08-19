import { useEffect } from "react";
import { loadGsap, prefersReducedMotion } from "@/lib/motion";

/**
 * Single global Lenis instance, synchronised with GSAP ScrollTrigger.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    let lenis;
    let raf;
    let cancelled = false;

    Promise.all([import("lenis"), loadGsap()]).then(
      ([{ default: Lenis }, { gsap, ScrollTrigger }]) => {
        if (cancelled) return;

        lenis = new Lenis({
          duration: 1.1,
          smoothWheel: true,
          touchMultiplier: 1.4,
        });
        window.__lenis = lenis;

        lenis.on("scroll", ScrollTrigger.update);

        raf = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);
      },
    );

    return () => {
      cancelled = true;
      loadGsap().then(({ gsap }) => {
        if (raf) gsap.ticker.remove(raf);
      });
      lenis?.destroy();
      if (window.__lenis === lenis) delete window.__lenis;
    };
  }, []);

  return null;
}

/** Lenis-aware anchor scrolling. */
export function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(target, { offset: -72 });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
