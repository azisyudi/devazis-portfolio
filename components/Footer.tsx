import { siteConfig } from "@/data/site";

export function Footer() {
  const { email, whatsapp, github, linkedin } = siteConfig.contact;

  return (
    <footer className="border-t border-white/[0.05] py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center text-sm text-stone-500 sm:text-left">
          © {siteConfig.copyrightYear}{" "}
          <span className="text-stone-400">{siteConfig.fullName}</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs tracking-wide text-stone-600">
          <a href={`mailto:${email}`} className="transition hover:text-stone-300">
            Email
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-stone-300"
          >
            WhatsApp
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-stone-300"
          >
            GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-stone-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
