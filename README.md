# OlympiaLabs — Landing site

The public marketing site for OlympiaLabs. **Standalone and independent** of the
product webapp (`../webapp`): its own build, its own deploy. It only borrows the
*brand* — the LogoV1 mark, the Inter typeface, and the Swiss design tokens — so it
reads as the same family without being coupled to the app's code.

- **Stack:** [Astro](https://astro.build) (static, zero-JS by default) + Tailwind CSS 3 (via PostCSS).
- **Type:** Inter (display/body) + IBM Plex Mono (the "telemetry voice" — data, labels, specs).
- **Aesthetic:** Swiss / International Typographic — gallery-white, broken by two near-black
  bands, single red accent (`#E31E24`, the logo red). The recurring "waterline" + the animated
  stroke signal are the signature.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → static dist/
npm run preview    # serve the built dist/
npm run check      # astro check (types/templates)
```

## Configure

Copy `.env.example` to `.env` and set:

| Variable | Purpose |
| --- | --- |
| `PUBLIC_WAITLIST_ENDPOINT` | Where the waitlist form POSTs. **Default is [Formspree](https://formspree.io)** — create a form and paste its endpoint. Any service that accepts a form POST works (Buttondown, Tally, Mailchimp…). Buttondown is the better pick if you want to *email* the list at launch. |
| `PUBLIC_APP_URL` | Origin of the product webapp. "Sign in" links resolve to `${PUBLIC_APP_URL}/login`. |

Until a real endpoint is set, the form runs in **demo mode**: it validates but shows a notice
instead of submitting. The form also works without JavaScript (it falls back to a native POST).

### Waitlist form ↔ service

The form sends `email` and `consent` fields (plus a `_gotcha` honeypot for spam). It expects a
JSON response when sent with `Accept: application/json` (Formspree's default). To swap providers,
just change `PUBLIC_WAITLIST_ENDPOINT`; adjust field names in `src/components/Waitlist.astro` only
if your provider requires different ones.

## Deploy

`npm run build` emits a static `dist/`. Host it anywhere — Vercel, Netlify, Cloudflare Pages, or
served by the existing Caddy as a file server on the marketing domain. Set `site` in
`astro.config.mjs` to the real domain (used for canonical + OpenGraph URLs).

## Structure

```
src/
  config.ts            # site constants + env (waitlist endpoint, app URL)
  layouts/Base.astro   # <head>, SEO, OpenGraph, fonts, global.css
  pages/index.astro    # composes the sections
  styles/global.css    # Swiss tokens (:root / .dark), .label-caps, motion
  components/
    BrandMark.astro    # the LogoV1 mark (inline SVG, auto-inverts light/dark)
    BrandLockup.astro  # mark + "Olympia" bold / "Labs" light wordmark
    Nav, Hero, StrokeSignal, Stats, Difference, Features, Motif,
    System, Integrated, Waitlist, Footer, Waterline
public/
  brand/               # raster logo assets + generated og.png
  favicon.svg
```
