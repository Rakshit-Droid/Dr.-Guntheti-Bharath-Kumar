"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/lib/data";

/**
 * Hero portrait with a graceful fallback. If /public/headshot.jpg is not yet
 * in place, it renders a refined monogram panel instead of a broken image —
 * so the build and the live page never break.
 */
export function SmartPortrait() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="relative flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-navy via-navy-700 to-navy">
        <div className="text-center">
          <span className="font-display text-7xl font-medium tracking-tightest text-paper/90">
            {profile.initials}
          </span>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-eyebrow text-paper/45">
            Add /public/headshot.jpg
          </p>
        </div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #FBF8F1 1%, rgba(251,248,241,0) 32%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/5] w-full bg-[#0a0a0c]">
      <Image
        src={profile.headshot}
        alt={`Portrait of ${profile.name}`}
        fill
        priority
        sizes="(max-width: 1024px) 90vw, 40vw"
        className="object-cover object-top"
        onError={() => setFailed(true)}
      />
      {/* Cinematic seating — soft edge vignette deepens the frame's drama */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(118% 84% at 50% 26%, transparent 50%, rgba(0,0,0,0.34) 100%)",
        }}
      />
      {/* Grounded base — in the photo's own black, never cream, so it reads as a framed print */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/5"
        style={{
          background:
            "linear-gradient(to top, rgba(6,8,12,0.65), rgba(6,8,12,0) 100%)",
        }}
      />
      {/* Liquid-glass top edge refraction */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
      />
    </div>
  );
}
