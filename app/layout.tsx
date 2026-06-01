import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { profile } from "@/lib/data";
import { GrainOverlay } from "@/components/GrainOverlay";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://drbharathkumar.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s · ${profile.shortName}`,
  },
  description: profile.summary,
  keywords: [
    "Dr. Guntheti Bharath Kumar",
    "Forensic Medicine",
    "Toxicology",
    "Medico-legal expert",
    "Mamata Medical College",
    "Khammam",
    "CBME",
    "Autopsy",
    "Forensic Medicine Professor",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "profile",
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    url: siteUrl,
    siteName: profile.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FBF8F1",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Professor & Head, Forensic Medicine & Toxicology",
  worksFor: { "@type": "CollegeOrUniversity", name: "Mamata Medical College, Khammam" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Khammam",
    addressRegion: "Telangana",
    addressCountry: "India",
  },
  email: `mailto:${profile.email}`,
  telephone: profile.phoneHref,
  description: profile.summary,
  knowsAbout: [
    "Forensic Medicine",
    "Toxicology",
    "Medico-legal examination",
    "Competency-Based Medical Education",
    "Clinical Forensic Medicine",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to content
        </a>
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
