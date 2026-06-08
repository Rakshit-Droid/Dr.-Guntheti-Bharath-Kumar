import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Experience } from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Two decades of academic stewardship, leadership, and medico-legal practice at Mamata Medical College.",
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <Experience />
    </PageShell>
  );
}
