# Rejie Rufin — Professional Portfolio

A premium, responsive personal brand site for **Rejie Rufin, ICM Specialist** — import customs manifest, shipping documentation, logistics operations, and process excellence.

Built with React 19, TypeScript, Tailwind CSS 4, Framer Motion, and Lucide icons. Fonts are self-hosted (Sora, Inter, JetBrains Mono).

## Run locally

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:3000`.

Production build:

```bash
npm run build
npm run preview
```

## Editing content

Everything lives in [`src/content/site.ts`](src/content/site.ts): navigation, hero copy, profile, expertise, experience, process, value statements, tools, education, CTA, contact details, and footer.

The site intentionally contains **no invented awards, certifications, statistics, years of experience, projects, clients, testimonials, or employers**. Keep it that way when editing.

### Replace the professional portrait

The portrait shown in the hero was extracted from the supplied resume and prepared as a transparent cutout at `public/portrait/rejie-rufin.webp`, composed over the site's dark logistics backdrop.

To replace it:

1. Add the new photo to `public/portrait/` — for example `public/portrait/rejie-rufin.jpg`.
2. Update the path in `src/content/site.ts`:

```ts
photo: "/portrait/rejie-rufin.jpg",
```

Recommended image: a vertical portrait, roughly 4:5 aspect ratio, at least 1000 pixels wide, exported as WebP or optimized JPG. A transparent PNG/WebP cutout matches the current treatment best; a normal photo will fill the frame with its own background. If no image loads, the frame gracefully falls back to the designed RR monogram plate.

To adjust the crop, edit the image classes in `src/components/ui/Portrait.tsx`. The resume itself remains available at `public/resume/Rejie-Rufin-Resume.pdf`.

### Add LinkedIn later

Paste the full profile URL into `linkedin` in `src/content/site.ts`:

```ts
linkedin: "https://www.linkedin.com/in/…",
```

When the field is empty, no LinkedIn row or placeholder icon is rendered. This keeps the site honest until a real profile is available.

### Update the resume

Replace `public/resume/Rejie-Rufin-Resume.pdf` with the latest PDF. It is used by every **Download Resume** button.

## Design system

- **Deep Navy** `#071A2B` — primary dark surface
- **Ocean Blue** `#0C5C8A` — depth and secondary accent
- **Teal** `#11A7A1` — brand accent
- **Light Cyan** `#5DD6D0` — highlights and glows
- **Off-white** `#F3F7F9` — light section surface
- **Dark text** `#17303B` — body copy

Display type is Sora; body is Inter; labels and metadata use JetBrains Mono. Animation respects `prefers-reduced-motion`, navigation is keyboard accessible with a focus trap in the mobile menu, and all contact actions are real `mailto:` / `tel:` links.

## Project structure

```
src/
  content/site.ts        Editable content + owner settings
  components/
    Navbar.tsx           Sticky glass navigation
    MobileMenu.tsx       Accessible full-screen mobile menu
    Footer.tsx
    sections/            Hero through Contact
    ui/                  Buttons, headings, portrait, monogram, reveals
  hooks/useActiveSection.ts
  index.css              Theme tokens, base styles, motion utilities
public/
  favicon.svg
  portrait/              Add the professional photo here
  resume/                Downloadable resume
```

## Search metadata

Page title, description, Open Graph/Twitter cards, and Person JSON-LD are set in [`index.html`](index.html). If the site is published on a final domain, add the canonical URL and a 1200×630 social share image with absolute `og:image` / `twitter:image` URLs.
