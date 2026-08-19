import { useRef } from "react";
import { FINAL_CTA } from "@/lib/content";
import { useReveal } from "@/lib/motion";

export default function CTA() {
  const root = useRef(null);
  useReveal(root, { stagger: 0.12 });

  return (
    <section id="enquire" ref={root} className="relative overflow-hidden bg-ink section-pad">
      <div className="absolute inset-0 grid-motif opacity-50" aria-hidden="true" />
      <div
        className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-red/25 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="shell relative max-w-4xl text-center">
        <span data-reveal className="mx-auto block h-px w-24 bg-[image:var(--gradient-gold)]" />
        <h2
          data-reveal
          className="mt-8 font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl"
        >
          {FINAL_CTA.heading}
        </h2>
        <p
          data-reveal
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg"
        >
          {FINAL_CTA.body}
        </p>
        <p
          data-reveal
          className="mt-9 inline-block border-y border-border py-3 text-sm font-semibold uppercase tracking-[0.2em] sm:text-base"
        >
          {FINAL_CTA.date}
        </p>
        <div data-reveal className="mt-10">
          <a
            href="mailto:"
            className="group inline-flex items-center gap-3 bg-red px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-red-deep"
          >
            {FINAL_CTA.cta}
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
