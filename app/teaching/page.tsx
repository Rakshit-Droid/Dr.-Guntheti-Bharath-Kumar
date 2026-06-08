import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Teaching } from "@/components/Teaching";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Undergraduate and postgraduate instruction, CBME alignment, examinership, and faculty development.",
};

export default function TeachingPage() {
  return (
    <PageShell>
      <Teaching />
    </PageShell>
  );
}
