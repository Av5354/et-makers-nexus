import { useRef } from "react";
import { WHO_SHOULD_ATTEND } from "@/lib/content";
import { useReveal } from "@/lib/motion";

export default function WhoShouldAttend() {
  const root = useRef(null);
  useReveal(root, { stagger: 0.1 });

  return (
    <section id="who-should-attend" ref={root} className="section-pad">
      <div className="shell">
        <div data-reveal className="flex items-center gap-4">
          <span className="rule-gold" />
          <span className="eyebrow">Who Should Attend</span>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHO_SHOULD_ATTEND.map((group, index) => (
            <article
              key={group.category}
              data-reveal
              data-reveal-group={`audience-${Math.floor(index / 3)}`}
              className={`card-premium p-7 lg:p-8 ${index === 0 ? "lg:row-span-1" : ""}`}
            >
              <span
                className="block h-px w-10 bg-[image:var(--gradient-gold)]"
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-xl leading-snug lg:text-2xl">
                {group.category}
              </h3>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground/75 sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-red" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
