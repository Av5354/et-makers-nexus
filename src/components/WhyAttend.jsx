import { useRef } from "react";
import { WHY_ATTEND } from "@/lib/content";
import { useReveal } from "@/lib/motion";

export default function WhyAttend() {
  const root = useRef(null);
  useReveal(root, { stagger: 0.09 });

  return (
    <section id="why-attend" ref={root} className="relative bg-ink section-pad">
      <div className="absolute inset-0 grid-motif opacity-40" aria-hidden="true" />
      <div className="shell relative">
        <div data-reveal className="flex items-center gap-4">
          <span className="rule-gold" />
          <span className="eyebrow">Why Attend</span>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_ATTEND.map((item, index) => (
            <article
              key={item.number}
              data-reveal
              data-reveal-group={`why-${Math.floor(index / 4)}`}
              className="card-premium group flex flex-col justify-between overflow-hidden p-7"
            >
              <span
                className="absolute right-4 top-3 font-display text-6xl leading-none text-foreground/10 transition-transform duration-500 group-hover:-translate-y-1"
                aria-hidden="true"
              >
                {item.number}
              </span>
              <div className="relative">
                <span className="eyebrow">{item.number}</span>
                <h3 className="mt-4 font-display text-xl leading-snug">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  {item.description}
                </p>
              </div>
              <span
                className="relative mt-7 block h-px w-10 bg-red transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
