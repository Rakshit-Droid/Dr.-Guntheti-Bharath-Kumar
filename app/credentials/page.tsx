import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Credentials } from "@/components/Credentials";

export const metadata: Metadata = {
  title: "Credentials",
  description:
    "Education, certifications, lifelong professional memberships, and recognition.",
};

export default function CredentialsPage() {
  return (
    <PageShell>
      <Credentials />
    </PageShell>
  );
}
