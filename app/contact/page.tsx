import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Enquiries on medico-legal expert opinion, guest lectures, academic collaboration, and mentorship.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <Contact />
    </PageShell>
  );
}
