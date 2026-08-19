import { useRef } from "react";
import logo from "@/assets/bmb-logo.png.asset.json";
import { COFFEE_TABLE_BOOK } from "@/lib/content";
import { useReveal } from "@/lib/motion";

export default function CoffeeTableBook() {
  const root = useRef(null);
  useReveal(root);

  return (
    <section id="coffee-table-book" ref={root} className="relative bg-ink section-pad">
      <div className="absolute inset-0 grid-motif opacity-40" aria-hidden="true" />
      <div className="shell relative grid items-center gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
        <div>
          <div data-reveal className="flex items-center gap-4">
            <span className="rule-gold" />
            <span className="eyebrow">Coffee Table Book</span>
          </div>
          <h2
            data-reveal
            className="mt-6 font-display text-3xl leading-[1.1] sm:text-4xl lg:text-[3.25rem]"
          >
            {COFFEE_TABLE_BOOK.heading}
          </h2>
          <p
            data-reveal
            className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg"
          >
            {COFFEE_TABLE_BOOK.body}
          </p>
        </div>

        <div data-reveal className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute -bottom-4 -right-4 h-full w-full border border-gold/25"
            aria-hidden="true"
          />
          <div className="relative border border-border bg-gradient-to-b from-secondary to-ink p-8 shadow-[var(--shadow-premium)]">
            <span
              className="block h-px w-full bg-[image:var(--gradient-gold)]"
              aria-hidden="true"
            />
            <img
              src={logo.url}
              alt="ET Edge Best Manufacturing Brands 2026 Coffee Table Book cover mark"
              loading="lazy"
              className="mx-auto mt-8 w-3/4"
            />
            <span
              className="mt-8 block h-px w-full bg-[image:var(--gradient-gold)]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
