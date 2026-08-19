import { useRef } from "react";
import { SELECTION_CRITERIA } from "@/lib/content";
import { useReveal } from "@/lib/motion";

export default function SelectionCriteria() {
  const root = useRef(null);
  useReveal(root, { stagger: 0.09 });

  return (
    <section id="selection-criteria" ref={root} className="section-pad">
      <div className="shell">
        <div className="max-w-3xl">
          <div data-reveal className="flex items-center gap-4">
            <span className="rule-gold" />
            <span className="eyebrow">Selection Criteria</span>
          </div>
          <h2 data-reveal className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-gold-gradient">08</span> Criteria
          </h2>
        </div>


        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SELECTION_CRITERIA.map((item, index) => (
            <article
              key={item.number}
              data-reveal
              data-reveal-group={`criteria-${Math.floor(index / 4)}`}
              className="card-premium group p-7 lg:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-4xl text-gold-gradient lg:text-5xl">
                  {item.number}
                </span>
                <span
                  className="mt-3 h-px w-8 bg-red transition-all duration-500 group-hover:w-14"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 font-display text-xl leading-snug lg:text-[1.4rem]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
