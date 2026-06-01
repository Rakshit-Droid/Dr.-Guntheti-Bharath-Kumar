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
        // Editorial Luxury palette — warm paper, ink, deep navy brand, muted brass accent
        paper: {
          DEFAULT: "#FBF8F1", // warm cream base
          deep: "#F4EDE0", // alternating section tone
          dim: "#EFE7D7", // pressed/hover surface
        },
        ink: {
          DEFAULT: "#211E1A", // warm off-black (never pure #000)
          soft: "#514B42", // muted body text
          faint: "#8A8276", // captions, meta
        },
        navy: {
          DEFAULT: "#16263F", // brand anchor
          700: "#1F3A5F",
          600: "#2A4A73",
        },
        brass: {
          DEFAULT: "#9A7B4F", // single accent, < 80% saturation
          light: "#BE9E6C",
          deep: "#7C6240",
        },
        line: "rgba(33, 30, 26, 0.12)",
        "line-soft": "rgba(33, 30, 26, 0.07)",
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
