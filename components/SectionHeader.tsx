"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-lg"}
    >
      <div
        className={`mb-4 flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-[#c9a962]/50" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#c9a962]/85">
          {eyebrow}
        </p>
        {isCenter ? <span className="h-px w-8 bg-[#c9a962]/50" /> : null}
      </div>
      <h2 className="font-display text-[2rem] font-medium leading-[1.12] tracking-tight text-stone-50 sm:text-[2.35rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[15px] leading-relaxed text-stone-500 sm:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
