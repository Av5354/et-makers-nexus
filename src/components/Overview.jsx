import { useRef } from "react";
import { OVERVIEW } from "@/lib/content";
import { useReveal } from "@/lib/motion";

export default function Overview() {
  const root = useRef(null);
  useReveal(root);

  return (
    <section id="overview" ref={root} className="section-pad relative">
      <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <div data-reveal className="flex items-center gap-4">
            <span className="rule-gold" />
            <span className="eyebrow">Overview</span>
          </div>
          <h2
            data-reveal
            className="mt-6 font-display text-3xl leading-[1.12] sm:text-4xl lg:text-5xl"
          >
            {OVERVIEW.heading}
          </h2>
        </div>

        <div className="space-y-7 border-l border-border pl-6 md:pl-10">
          {OVERVIEW.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              data-reveal
              className={`text-base leading-relaxed sm:text-lg ${
                index === 0 ? "text-foreground/95" : "text-foreground/75"
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
