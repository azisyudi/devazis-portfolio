import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ??
  siteConfig.analytics.measurementId;

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.fullName} | Developer Sistem Kesehatan, Kasir & HR`,
  description: siteConfig.elevatorPitch,
  openGraph: {
    title: siteConfig.headline,
    description: siteConfig.elevatorPitch,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${dmSans.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ambient text-stone-100">
        <div
          className="pointer-events-none fixed inset-0 bg-grid-subtle opacity-[0.22]"
          aria-hidden
        />
        <div className="relative flex min-h-full flex-col">{children}</div>
        {gaMeasurementId ? (
          <GoogleAnalytics gaId={gaMeasurementId} />
        ) : null}
      </body>
    </html>
  );
}
