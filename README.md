# OlympiaLabs — Landing site

The public marketing site for OlympiaLabs. **Standalone and independent** of the
product webapp: its own build, its own deploy. It only borrows the *brand* — the
LogoV1 mark, the Inter typeface, and the Swiss design tokens — so it reads as the
same family without being coupled to the app's code.

- **Stack:** [Astro](https://astro.build) (static, zero-JS by default) + Tailwind CSS 3 (via PostCSS).
- **Type:** Inter (display/body) + IBM Plex Mono (the "telemetry voice" — data, labels, specs).
- **Aesthetic:** Swiss / International Typographic — gallery-white, broken by two near-black
  bands, single red accent (`#E31E24`, the logo red). The recurring "waterline" + the animated
  stroke signal are the signature.
- **Host:** Netlify (config in `netlify.toml`). Pilot applications via **Netlify Forms** (no third party).

## What the page argues

The positioning is **"Coach the athlete, not the average"** — every session is measured against the
athlete's own history, and every number on the page can be traced to where it came from. The
`Trust` section (measured / calculated / AI-estimated / **not claimed**) is the spine: it is what
makes the rest credible, and the reason the product is presented as *in validation* rather than
proven.

That puts an unusual constraint on copy: **`src/copy.ts` opens with a claims block listing what the
system actually measures and the words that may not appear** (no force/power, no heart rate, no
heading, no "digital twin", no stroke phases, nothing "validated"). Read it before editing any
prose. The page's whole argument collapses if one line overclaims.

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
| `PUBLIC_APP_URL` | Origin of the product webapp. "Sign in" links resolve to `${PUBLIC_APP_URL}/login`. |

### Waitlist signups (Netlify Forms)

The waitlist form uses **Netlify Forms** — no third-party account, no API keys. The form is named
`waitlist`; Netlify detects it automatically at deploy time and collects submissions under **Forms**
in the Netlify dashboard (export CSV, or add email/Slack notifications there). The free tier covers
100 submissions/month.

- Submissions only work on the **deployed Netlify site**. Locally (`npm run dev`) the form
  validates but shows a notice instead of submitting — that's the `isLocal` branch, not a bug.
- It also works **without JavaScript** (native POST → Netlify's success page).
- Spam is filtered with a honeypot field (`bot-field`).

To use a different provider instead (Formspree, …), point the form's `action` at it in
`src/components/Pilot.astro` and drop the `data-netlify*` attributes.

### Proof media

`Proof.astro` shows real footage of the system in use. The slots ship **empty**: only entries in
`PROOF_MEDIA` (`src/config.ts`) with a `src` render, and the section removes itself entirely when
none do — so the live page never shows a placeholder box. To light one up, drop the file in
`public/proof/` and set its `src`; the caption is already written in `COPY.proof.captions`. Keep
video clips short and silent (they render with controls, not autoplay).

## Deploy (Netlify)

`netlify.toml` is included (`build = npm run build`, `publish = dist`, Node 22). To deploy:

1. Netlify → **Add new site → Import an existing project** → pick `OlympiaLabs/landing`.
2. Build settings come from `netlify.toml` — nothing to fill in.
3. **Site settings → Environment** → add `PUBLIC_APP_URL` = `https://app.olympialabs.eu`.
4. **Domain settings** → add `olympialabs.eu` (+ `www`) and point DNS as Netlify instructs.
5. Confirm **Forms** is enabled (default) so waitlist signups are captured.

`site` in `astro.config.mjs` is already `https://olympialabs.eu` (canonical + OpenGraph URLs).
The build output is plain static, so it also runs on Vercel / Cloudflare Pages / Caddy if you
ever move.

## Structure

```
src/
  copy.ts              # ALL user-facing prose + the claims block. Start here.
  config.ts            # structural constants: app URL, nav anchors, proof media
  layouts/Base.astro   # <head>, SEO, OpenGraph, fonts, global.css
  pages/index.astro    # composes the sections (band rhythm documented there)
  styles/global.css    # Swiss tokens (:root / .dark), .label-caps, motion
  components/
    BrandMark.astro    # the LogoV1 mark (inline SVG, auto-inverts light/dark)
    BrandLockup.astro  # mark + "Olympia" bold / "Labs" light wordmark
    Nav, Hero, StrokeSignal, Stats, Proof, Problem, Loop, Observes,
    Motif, Coach, Pieces, Trust, Pilot, Footer, Waterline
public/
  brand/               # raster logo assets + generated og.png
  proof/               # real footage for the Proof section (see above)
  favicon.svg
netlify.toml           # Netlify build + headers
```

**Copy and structure are separate on purpose.** Components hold no literal prose — everything reads
from `COPY` in `src/copy.ts`, keyed by section; `config.ts` keeps only what a translation wouldn't
change (URLs, anchors, asset paths). Adding Portuguese is therefore a translation of one file plus
i18n routing, not a refactor of the markup.

Section order carries the argument (promise → proof → problem → how → what it sees → coach → parts
→ what's real → the ask), and the **light → muted → dark** rhythm is structure rather than theming:
`Problem` and `Pilot` are the two dark bands. Check the alternation still holds before reordering.
