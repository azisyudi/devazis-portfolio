"use client";

import { Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

interface ContactButtonsProps {
  className?: string;
}

export function ContactButtons({ className = "" }: ContactButtonsProps) {
  const { email, phoneDisplay, whatsapp } = siteConfig.contact;

  return (
    <div
      className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${className}`}
    >
      <a
        href={`mailto:${email}`}
        className="contact-btn contact-btn-outline group"
      >
        <span className="flex items-center gap-2.5">
          <Mail className="h-4 w-4 shrink-0 text-stone-400 group-hover:text-stone-200" strokeWidth={1.75} />
          <span className="font-semibold text-stone-100">Email</span>
        </span>
        <span className="mt-1 block truncate text-xs text-stone-500">{email}</span>
      </a>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn contact-btn-primary group"
      >
        <span className="flex items-center gap-2.5">
          <MessageCircle className="h-4 w-4 shrink-0 opacity-90" strokeWidth={1.75} />
          <span className="font-semibold">WhatsApp</span>
        </span>
        <span className="mt-1 block whitespace-nowrap text-xs opacity-80">
          {phoneDisplay}
        </span>
      </a>
    </div>
  );
}
