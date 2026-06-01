"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/lib/data";

// Even feather on all four edges (tight band) so the portrait dissolves into
// the page on every side rather than sitting in a hard frame.
const FEATHER =
  "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent), linear-gradient(to bottom, transparent, #000 7%, #000 93%, transparent)";

const featherStyle: React.CSSProperties = {
  WebkitMaskImage: FEATHER,
  WebkitMaskComposite: "source-in",
  maskImage: FEATHER,
  maskComposite: "intersect",
};

/**
 * Hero portrait — sharp, centred subject that dissolves softly into the cream
 * page on all four edges (tight feather + gentle vignette). Falls back to a
 * monogram if /public/headshot.png is missing.
 */
export function SmartPortrait() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-navy via-navy-700 to-navy">
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
    <div className="relative aspect-[4/5] w-full" style={featherStyle}>
      {/* Sharp base — crop biased so the seated figure sits centred */}
      <Image
        src={profile.headshot}
        alt={`Portrait of ${profile.name}`}
        fill
        priority
        sizes="(max-width: 1024px) 90vw, 45vw"
        className="object-cover object-[63%_40%] [filter:contrast(1.05)_brightness(1.06)]"
        onError={() => setFailed(true)}
      />

      {/* Gentle vignette for depth toward the dissolving edges */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 42%, transparent 60%, rgba(6,6,9,0.42) 100%)",
        }}
      />
    </div>
  );
}
