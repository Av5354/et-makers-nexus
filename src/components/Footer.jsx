import logo from "@/assets/bmb-logo.png.asset.json";
import { EVENT, NAV_LINKS } from "@/lib/content";
import { scrollToSection } from "./SmoothScroll";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="shell grid gap-10 md:grid-cols-[auto_1fr] md:items-start md:gap-16">
        <img
          src={logo.url}
          alt="ET Edge Best Manufacturing Brands 2026 logo"
          loading="lazy"
          className="h-28 w-auto"
        />
        <div>
          <p className="font-display text-2xl leading-snug">{EVENT.title}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/70">
            {EVENT.tagline}
          </p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {EVENT.date}
          </p>

          <nav
            className="mt-8 flex flex-wrap gap-x-7 gap-y-3"
            aria-label="Footer"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[0.78rem] uppercase tracking-[0.14em] text-foreground/65 transition-colors hover:text-gold"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
