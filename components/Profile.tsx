"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ContactButtons } from "@/components/ContactButtons";
import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function Profile() {
  const { profile } = siteConfig;

  return (
    <section id="profile" className="page-section">
      <div className="section-shell">
        <SectionHeader
          eyebrow={siteConfig.sections.profile.eyebrow}
          title={siteConfig.sections.profile.title}
          description={siteConfig.sections.profile.description}
        />

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-none"
          >
            <div className="photo-frame overflow-hidden rounded-[1.5rem] p-1.5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-stone-900">
                <Image
                  src={profile.photoSrc}
                  alt={`Foto profil ${siteConfig.fullName}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 300px, 340px"
                />
              </div>
            </div>
            <div className="mt-6 text-center lg:text-left">
              <p className="font-display text-2xl text-stone-50">
                {siteConfig.fullName}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">
                {siteConfig.role}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="space-y-8"
          >
            <p className="text-lg leading-relaxed text-stone-200 sm:text-xl sm:leading-relaxed">
              {profile.intro}
            </p>

            <div className="space-y-5 border-l border-[#c9a962]/25 pl-6">
              {profile.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="text-[15px] leading-[1.75] text-stone-500"
                >
                  {p}
                </p>
              ))}
            </div>

            <ul className="grid gap-2 sm:grid-cols-2">
              {profile.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/[0.05] bg-white/[0.015] px-4 py-3.5 text-sm leading-snug text-stone-300"
                >
                  {item}
                </li>
              ))}
            </ul>

            <ContactButtons />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
