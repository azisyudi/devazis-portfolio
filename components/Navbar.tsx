"use client";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "#profile", label: siteConfig.nav.profile },
  { href: "#projects", label: siteConfig.nav.projects },
  { href: "#skills", label: siteConfig.nav.skills },
  { href: "#contact", label: siteConfig.nav.contact },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto max-w-5xl transition-all duration-500 ${
          scrolled ? "nav-island rounded-full px-2 sm:px-3" : ""
        }`}
      >
        <div className="flex h-14 items-center justify-between px-3 sm:px-4">
          <a
            href="#"
            className="flex items-center gap-2.5 text-sm font-medium text-stone-200"
          >
            <span className="font-display text-lg font-medium text-[#dcc48a]">
              {siteConfig.name}
            </span>
            <span className="hidden h-3 w-px bg-white/10 sm:block" />
            <span className="hidden text-xs tracking-wide text-stone-500 sm:inline">
              Portfolio
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] tracking-wide text-stone-500 transition-colors hover:text-stone-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary rounded-full px-5 py-2 text-[13px] font-semibold"
            >
              {siteConfig.nav.cta}
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex rounded-full border border-white/10 p-2 text-stone-300 md:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="nav-island mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl md:hidden"
          >
            <div className="flex flex-col gap-0.5 p-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-stone-300 hover:bg-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-1 rounded-xl py-3 text-center text-sm font-semibold"
              >
                {siteConfig.nav.cta}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
