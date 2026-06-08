import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Research } from "@/components/Research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Thirty-plus publications across forensic toxicology, medical education, and medico-legal practice.",
};

export default function ResearchPage() {
  return (
    <PageShell>
      <Research />
    </PageShell>
  );
}
