import { useEffect, useRef } from "react";
import logo from "@/assets/bmb-logo.png.asset.json";
import { EVENT } from "@/lib/content";
import { loadGsap, prefersReducedMotion } from "@/lib/motion";
import { scrollToSection } from "./SmoothScroll";

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let ctx;
    let cancelled = false;

    loadGsap().then(({ gsap }) => {
      if (cancelled || !root.current) return;
      ctx = gsap.context(() => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from("[data-hero-eyebrow]", { opacity: 0, x: -40, duration: 0.8 })
          .from(
            "[data-hero-line]",
            { opacity: 0, x: -70, duration: 1, stagger: 0.14 },
            "-=0.5",
          )
          .from("[data-hero-tagline]", { opacity: 0, x: -50, duration: 0.9 }, "-=0.7")
          .from("[data-hero-meta]", { opacity: 0, x: -40, duration: 0.8 }, "-=0.6")
          .from("[data-hero-cta]", { opacity: 0, y: 24, duration: 0.7 }, "-=0.5")
          .from(
            "[data-hero-logo]",
            { opacity: 0, scale: 0.94, duration: 1.2, ease: "power2.out" },
            0.2,
          );
      }, root);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={root}
      className="relative flex min-h-[92svh] items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <div className="absolute inset-0 grid-motif opacity-60" aria-hidden="true" />
      <div
        className="absolute -left-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-red/25 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-16 bottom-0 h-[24rem] w-[24rem] rounded-full bg-gold/15 blur-[150px]"
        aria-hidden="true"
      />

      <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
        <div>
          <div data-hero-eyebrow className="flex items-center gap-4">
            <span className="rule-gold" />
            <span className="eyebrow">An Initiative by ET Edge</span>
          </div>

          <h1 className="mt-7 font-display text-[2.5rem] leading-[1.03] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
            <span data-hero-line className="block">
              ET Edge
            </span>
            <span data-hero-line className="block text-gold-gradient">
              Best Manufacturing
            </span>
            <span data-hero-line className="block">
              Brands <span className="text-red">2026</span>
            </span>
          </h1>

          <p
            data-hero-tagline
            className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl"
          >
            {EVENT.tagline}
          </p>

          <div
            data-hero-meta
            className="mt-8 inline-flex items-center gap-3 border-y border-border py-3"
          >
            <span className="h-2 w-2 bg-red" aria-hidden="true" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/90 sm:text-base">
              {EVENT.date}
            </span>
          </div>

          <div data-hero-cta className="mt-10">
            <button
              onClick={() => scrollToSection("enquire")}
              className="group relative inline-flex items-center gap-3 bg-red px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-red-deep"
            >
              {EVENT.cta}
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </button>
          </div>
        </div>

        <div data-hero-logo className="relative mx-auto w-full max-w-[18rem] lg:max-w-none">
          <div className="absolute inset-0 -m-4 border border-gold/25" aria-hidden="true" />
          <img
            src={logo.url}
            alt="ET Edge Best Manufacturing Brands 2026 official logo"
            className="relative w-full"
            width={905}
            height={1471}
          />
        </div>
      </div>
    </section>
  );
}
