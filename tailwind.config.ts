import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Black & Gold" — dark surfaces (named `coal` to avoid the text-base font-size clash)
        coal: {
          DEFAULT: "#0A0A0B", // page background (warm near-black)
          soft: "#0E0E10", // alternating section tone
          raised: "#141417", // cards / elevated surfaces
          raised2: "#1B1B1F", // hover / pressed surface
        },
        // Light family — primary text + light translucents on dark
        paper: {
          DEFAULT: "#F4EFE4", // warm off-white text/light elements
          deep: "#ECE6D8",
          dim: "#E2DAC8",
        },
        // ink kept LIGHT so existing text-ink* read correctly on the dark base
        ink: {
          DEFAULT: "#F4EFE4",
          soft: "#ABA493", // muted body text
          faint: "#7C7563", // captions, meta
        },
        // Gold accent (navy repurposed to gold so prior navy accents invert cleanly)
        brass: {
          DEFAULT: "#C2A24E", // primary gold (fills)
          light: "#E6CB84", // bright gold (text/accents on black)
          deep: "#CBAA5C", // readable gold for small text
        },
        navy: {
          DEFAULT: "#C2A24E",
          700: "#A98A3C",
          600: "#D8BC6E",
        },
        line: "rgba(244, 239, 228, 0.10)",
        "line-soft": "rgba(244, 239, 228, 0.055)",
      },
      fontFamily: {
        // wired to next/font CSS variables in app/layout.tsx
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        eyebrow: "0.22em",
      },
      maxWidth: {
        prose: "65ch",
        shell: "1400px",
      },
      borderRadius: {
        bezel: "2rem",
        "bezel-inner": "calc(2rem - 0.375rem)",
      },
      boxShadow: {
        // diffusion shadows only — tinted to background, never harsh black
        soft: "0 20px 40px -15px rgba(33, 30, 26, 0.10)",
        lift: "0 32px 64px -24px rgba(22, 38, 63, 0.18)",
        inset: "inset 0 1px 1px rgba(255, 255, 255, 0.5)",
        "inset-dark": "inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
        swift: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "grain-shift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-3%, -4%)" },
          "30%": { transform: "translate(2%, -2%)" },
          "50%": { transform: "translate(-1%, 3%)" },
          "70%": { transform: "translate(3%, 2%)" },
          "90%": { transform: "translate(-2%, 1%)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "grain-shift": "grain-shift 8s steps(6) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
