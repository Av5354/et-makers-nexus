import { useRef } from "react";
import { DISCUSSION_THEMES } from "@/lib/content";
import { useReveal } from "@/lib/motion";

export default function DiscussionThemes() {
  const root = useRef(null);
  useReveal(root, { stagger: 0.1 });

  return (
    <section id="discussion-themes" ref={root} className="relative bg-ink section-pad">
      <div className="shell">
        <div data-reveal className="flex items-center gap-4">
          <span className="rule-gold" />
          <span className="eyebrow">Key Discussion Themes</span>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {DISCUSSION_THEMES.map((theme) => (
            <article
              key={theme.number}
              data-reveal
              className="group grid items-baseline gap-4 py-8 transition-colors hover:bg-secondary/40 md:grid-cols-[7rem_1fr_1.1fr] md:gap-8 md:py-10 md:pl-4"
            >
              <span className="font-display text-5xl leading-none text-foreground/25 transition-colors duration-500 group-hover:text-gold-gradient md:text-6xl">
                {theme.number}
              </span>
              <h3 className="font-display text-2xl leading-snug md:text-3xl">{theme.title}</h3>
              <p className="text-base leading-relaxed text-foreground/70 md:pr-6">
                {theme.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
