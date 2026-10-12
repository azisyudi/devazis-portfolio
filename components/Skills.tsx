"use client";

import { motion } from "framer-motion";
import { domainHighlights, skillGroups } from "@/data/skills";
import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="page-section border-y border-white/[0.05]">
      <div className="section-shell">
        <SectionHeader
          eyebrow={siteConfig.sections.skills.eyebrow}
          title={siteConfig.sections.skills.title}
          description={siteConfig.sections.skills.description}
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.05 }}
                className="glass-panel rounded-2xl p-7"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#c9a962]">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide text-stone-100">
                      {group.title}
                    </h3>
                    <ul className="list-divider mt-5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm leading-relaxed text-stone-500 first:mt-0 first:pt-0 first:border-0"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {domainHighlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex gap-4 rounded-xl border border-white/[0.04] px-5 py-4"
              >
                <Icon
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a962]/75"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-sm font-medium text-stone-200">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-500">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
