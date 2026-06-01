# Dr. Guntheti Bharath Kumar — Personal Website

A premium, editorial-luxury personal website for **Dr. Guntheti Bharath Kumar**, Professor & Head of Forensic Medicine & Toxicology at Mamata Medical College, Khammam. Built as an academic authority profile **and** a teaching/mentorship hub.

---

## Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) + React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Motion | Framer Motion |
| Icons | Phosphor Icons (`@phosphor-icons/react`) |
| Fonts | Fraunces (display serif) + Plus Jakarta Sans (body) — self-hosted via `next/font` |

## Design system

- **Vibe:** Editorial Luxury — warm cream paper, deep navy brand anchor, single muted brass accent, film-grain texture.
- **Palette:** Cream `#FBF8F1` · Ink `#211E1A` · Navy `#16263F` · Brass `#9A7B4F`.
- **Type:** Fraunces variable serif for headings, Plus Jakarta Sans for everything else.
- Motion uses only `transform` / `opacity`, custom cubic-bezier easing, `whileInView` reveals (no scroll listeners), and reduced-motion fallbacks.

---

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

### Production build

```bash
npm run build
npm start
```

---

## Add the portrait

Save the headshot as **`public/headshot.jpg`** (portrait orientation, face in the upper third, ~1000×1250px or larger). Until then, the hero shows a clean "GBK" monogram fallback — nothing breaks. See `public/README-ADD-HEADSHOT.txt`.

---

## Editing content

**All content lives in [`lib/data.ts`](lib/data.ts)** — a single source of truth sourced directly from the CV. Update text, stats, experience, publications, credentials, and contact details there; every section reads from it. No JSX edits required for routine updates.

---

## Structure

```
app/
  layout.tsx      Root layout — fonts, SEO metadata, JSON-LD, grain overlay
  page.tsx        Section assembly
  globals.css     Base styles, tokens, grain, scrollbar
components/
  Nav, Hero, About, Stats, Experience, Teaching,
  Research, Credentials, Contact, ContactForm, Footer, GrainOverlay
  ui/             Reveal, MagneticButton, SectionHeading, Counter, SmartPortrait
lib/
  data.ts         All CV content
public/
  headshot.jpg    (add this)
```

---

## Contact form

The enquiry form validates inline (loading / error / success states) and hands off to the visitor's mail client via `mailto:` — **no backend required**. To capture submissions server-side instead, replace the marked block in [`components/ContactForm.tsx`](components/ContactForm.tsx) with a `fetch()` to your API route or a service like Formspree.

---

## Deploy

Optimised for **Vercel**: push to a Git repo and import, or run `npx vercel`. Any Node host that runs `next build` / `next start` works equally well.
