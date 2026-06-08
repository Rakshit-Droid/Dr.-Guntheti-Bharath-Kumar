import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior academician and medico-legal expert with over twenty years in Forensic Medicine & Toxicology.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <About />
    </PageShell>
  );
}
