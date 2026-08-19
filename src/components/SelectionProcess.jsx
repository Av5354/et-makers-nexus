import { useRef } from "react";
import { SELECTION_PROCESS } from "@/lib/content";
import { useReveal } from "@/lib/motion";

export default function SelectionProcess() {
  const root = useRef(null);
  useReveal(root, { stagger: 0.14 });

  return (
    <section id="selection-process" ref={root} className="section-pad">
      <div className="shell">
        <div data-reveal className="flex items-center gap-4">
          <span className="rule-gold" />
          <span className="eyebrow">Selection Process</span>
        </div>

        <ol className="relative mt-14 space-y-10 pl-10 md:space-y-12 md:pl-0">
          <span
            className="absolute left-[0.9rem] top-2 h-[calc(100%-1rem)] w-px bg-border md:left-1/2"
            aria-hidden="true"
          />
          {SELECTION_PROCESS.map((step, index) => (
            <li
              key={step.number}
              data-reveal
              className={`relative md:grid md:grid-cols-2 md:items-center md:gap-14 ${
                index % 2 === 1 ? "md:[&>div]:col-start-2" : ""
              }`}
            >
              <span
                className="absolute -left-10 top-1.5 h-3 w-3 border border-gold bg-ink md:left-1/2 md:-translate-x-1/2"
                aria-hidden="true"
              />
              <div
                className={`card-premium p-6 md:p-8 ${index % 2 === 1 ? "" : "md:text-right"}`}
              >
                <span className="font-display text-4xl text-gold-gradient md:text-5xl">
                  {step.number}
                </span>
                <p className="mt-4 text-base leading-relaxed text-foreground/80">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
