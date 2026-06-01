"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/lib/data";

/**
 * Hero portrait — sharp where it meets the headline, then progressively
 * vignetted + blurred as it dissolves into the cream page on the right edge.
 * Falls back to a refined monogram if /public/headshot.png is missing.
 */
export function SmartPortrait() {
  const [failed, setFailed] = useState(false);

  // Bias the crop slightly left: keeps the subject centred and pushes any
  // bottom-right watermark out of frame (the right-edge treatment hides the rest).
  const position = "object-[42%_45%]";

  if (failed) {
    return (
      <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-navy via-navy-700 to-navy">
        <div className="text-center">
          <span className="font-display text-7xl font-medium tracking-tightest text-paper/90">
            {profile.initials}
          </span>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-eyebrow text-paper/45">
            Add /public/headshot.png
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem]">
      {/* Sharp base */}
      <Image
        src={profile.headshot}
        alt={`Portrait of ${profile.name}`}
        fill
        priority
        sizes="(max-width: 1024px) 90vw, 45vw"
        className={`object-cover ${position} [filter:contrast(1.06)_brightness(1.02)]`}
        onError={() => setFailed(true)}
      />

      {/* Right-side blurred duplicate — masked so only the right edge softens */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 46%, black 82%)",
          maskImage: "linear-gradient(to right, transparent 46%, black 82%)",
        }}
      >
        <Image
          src={profile.headshot}
          alt=""
          fill
          sizes="(max-width: 1024px) 90vw, 45vw"
          className={`scale-[1.12] object-cover ${position} [filter:blur(17px)_contrast(1.04)]`}
        />
      </div>

      {/* Cinematic vignette — darkens the right + edges for depth */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 100% at 34% 42%, transparent 42%, rgba(6,6,9,0.58) 100%)",
        }}
      />

      {/* Right dissolve into the cream page */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, transparent 50%, rgba(251,248,241,0.4) 78%, #FBF8F1 100%)",
        }}
      />

      {/* Soft bottom grounding so the figure rises out of the page */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/4"
        style={{
          background:
            "linear-gradient(to top, rgba(251,248,241,0.85) 2%, rgba(251,248,241,0) 100%)",
        }}
      />

      {/* Liquid-glass top edge refraction */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]"
      />
    </div>
  );
}
