import { useEffect, useState } from "react";
import logo from "@/assets/bmb-logo.png.asset.json";
import { NAV_LINKS, EVENT } from "@/lib/content";
import { scrollToSection } from "./SmoothScroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-border bg-ink/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between md:h-20">
        <button
          onClick={() => go("hero")}
          className="flex items-center gap-3"
          aria-label="ET Edge Best Manufacturing Brands 2026 — back to top"
        >
          <img
            src={logo.url}
            alt="ET Edge Best Manufacturing Brands 2026 logo"
            className="h-10 w-auto md:h-12"
          />
          <span className="hidden max-w-[13rem] font-display text-[0.7rem] leading-tight tracking-wide text-foreground/80 lg:block">
            ET Edge Best Manufacturing Brands 2026
          </span>
        </button>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="relative text-[0.78rem] font-medium uppercase tracking-[0.14em] text-foreground/75 transition-colors hover:text-gold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => go("enquire")}
            className="border border-gold/60 px-5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            {EVENT.cta}
          </button>
        </nav>

        <button
          className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`block h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-ink transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <nav className="shell flex flex-col py-4" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="border-b border-border/60 py-4 text-left text-sm uppercase tracking-[0.16em] text-foreground/85"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => go("enquire")}
            className="mt-5 border border-gold/60 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-gold"
          >
            {EVENT.cta}
          </button>
        </nav>
      </div>
    </header>
  );
}
