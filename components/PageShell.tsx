import type { ReactNode } from "react";

/**
 * Wrapper for individual route pages — provides top clearance for the fixed
 * floating nav and a sensible minimum height so the global footer sits low.
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main id="main" className="min-h-[72vh] pt-16">
      {children}
    </main>
  );
}
