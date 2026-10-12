"use client";

import { motion } from "framer-motion";
import { metrics, siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function Metrics() {
  return (
    <section id="impact" className="page-section pt-0 sm:pt-0">
      <div className="section-shell">
        <SectionHeader
          eyebrow={siteConfig.sections.impact.eyebrow}
          title={siteConfig.sections.impact.title}
          description={siteConfig.sections.impact.description}
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel mt-14 overflow-hidden rounded-2xl"
        >
          <div className="grid sm:grid-cols-3 sm:divide-x sm:divide-white/[0.06]">
            {metrics.map((item, index) => (
              <article
                key={item.label}
                className="px-8 py-9 text-center sm:py-10 sm:text-left"
              >
                <p className="font-display text-4xl font-medium text-[#dcc48a] sm:text-5xl">
                  {item.value}
                </p>
                <p className="mt-3 text-sm font-semibold tracking-wide text-stone-200">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">
                  {item.description}
                </p>
                {index < metrics.length - 1 ? (
                  <div className="mx-auto mt-8 h-px w-12 bg-white/[0.06] sm:hidden" />
                ) : null}
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
