"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute left-1/2 top-28 h-24 w-24 -translate-x-1/2 rounded-full bg-[#c9a962]/[0.07] blur-3xl" />

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9a962]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone-400">
              {siteConfig.fullName}
            </span>
          </div>

          <h1 className="font-display mt-8 text-[2.35rem] font-medium leading-[1.08] tracking-tight text-stone-50 sm:text-5xl lg:text-[3.5rem]">
            {siteConfig.headline}
          </h1>

          <p className="mt-5 text-sm font-medium tracking-[0.12em] text-[#c9a962]/85 uppercase sm:text-xs">
            {siteConfig.headlineAccent}
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-[1.75] text-stone-400 sm:text-lg">
            {siteConfig.elevatorPitch}
          </p>

          <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <motion.a
              href="#projects"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-10 text-sm font-semibold tracking-wide"
            >
              {siteConfig.hero.ctaPrimary}
            </motion.a>
            <motion.a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="btn-ghost inline-flex h-12 items-center justify-center rounded-full px-10 text-sm font-semibold tracking-wide"
            >
              WhatsApp
            </motion.a>
          </div>

          <motion.a
            href="#profile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 inline-flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-stone-600 transition hover:text-stone-400"
          >
            {siteConfig.hero.scrollHint}
            <ArrowDown className="h-3.5 w-3.5 opacity-50" strokeWidth={1.5} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
