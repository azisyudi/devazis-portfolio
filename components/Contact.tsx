"use client";

import { Globe, Send } from "lucide-react";
import { motion } from "framer-motion";
import { ContactButtons } from "@/components/ContactButtons";
import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function Contact() {
  const { email, github, linkedin } = siteConfig.contact;

  return (
    <section id="contact" className="page-section">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-16">
          <SectionHeader
            eyebrow={siteConfig.sections.contact.eyebrow}
            title={siteConfig.sections.contact.title}
            description={siteConfig.sections.contact.description}
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-6 sm:p-8"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
              Kontak langsung
            </p>
            <ContactButtons className="mt-4" />

            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-stone-500 transition hover:text-[#dcc48a]"
              >
                <Globe className="h-4 w-4" strokeWidth={1.5} />
                GitHub
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-stone-500 transition hover:text-[#dcc48a]"
              >
                <Globe className="h-4 w-4" strokeWidth={1.5} />
                LinkedIn
              </a>
            </div>

            <div className="my-8 h-px bg-white/[0.06]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
              Form singkat
            </p>
            <form
              className="mt-4 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const name = String(data.get("name") ?? "");
                const fromEmail = String(data.get("email") ?? "");
                const message = String(data.get("message") ?? "");
                const subject = encodeURIComponent(
                  `Penawaran proyek dari ${name || "Pengunjung"}`,
                );
                const body = encodeURIComponent(
                  `${message}\n\n— ${name}\n${fromEmail}`,
                );
                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
              }}
            >
              <input
                id="name"
                name="name"
                aria-label="Nama"
                className="w-full rounded-xl border border-white/[0.07] bg-black/25 px-4 py-3 text-sm text-stone-100 outline-none placeholder:text-stone-600 focus:border-[#c9a962]/35"
                placeholder="Nama / perusahaan"
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-label="Email"
                className="w-full rounded-xl border border-white/[0.07] bg-black/25 px-4 py-3 text-sm text-stone-100 outline-none placeholder:text-stone-600 focus:border-[#c9a962]/35"
                placeholder="Email Anda"
              />
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                aria-label="Kebutuhan"
                className="w-full resize-none rounded-xl border border-white/[0.07] bg-black/25 px-4 py-3 text-sm text-stone-100 outline-none placeholder:text-stone-600 focus:border-[#c9a962]/35"
                placeholder="Kebutuhan proyek…"
              />
              <button
                type="submit"
                className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold"
              >
                Kirim Email
                <Send className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
