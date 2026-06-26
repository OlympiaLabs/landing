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
- **Host:** Netlify (config in `netlify.toml`). Waitlist via **Netlify Forms** (no third party).

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

### Waitlist (Netlify Forms)

The waitlist uses **Netlify Forms** — no third-party account, no API keys. The form is named
`waitlist`; Netlify detects it automatically at deploy time and collects submissions under
**Forms** in the Netlify dashboard (export CSV, or add email/Slack notifications there). The free
tier covers 100 submissions/month.

- Submissions only work on the **deployed Netlify site**. Locally (`npm run dev`) the form
  validates but shows a notice instead of submitting.
- It also works **without JavaScript** (native POST → Netlify's success page).
- Spam is filtered with a honeypot field (`bot-field`).

To use a different provider instead (Formspree, Buttondown, …), point the form's `action` at it
in `src/components/Waitlist.astro` and drop the `data-netlify*` attributes.

## Deploy (Netlify)

`netlify.toml` is included (`build = npm run build`, `publish = dist`, Node 22). To deploy:

1. Netlify → **Add new site → Import an existing project** → pick `OlympiaLabs/landing`.
2. Build settings come from `netlify.toml` — nothing to fill in.
3. **Site settings → Environment** → add `PUBLIC_APP_URL` = `https://app.olympialabs.eu`.
4. **Domain settings** → add `olympialabs.eu` (+ `www`) and point DNS as Netlify instructs.
5. Confirm **Forms** is enabled (default) so the waitlist is captured.

`site` in `astro.config.mjs` is already `https://olympialabs.eu` (canonical + OpenGraph URLs).
The build output is plain static, so it also runs on Vercel / Cloudflare Pages / Caddy if you
ever move.

## Structure

```
src/
  config.ts            # site constants + env (app URL)
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
netlify.toml           # Netlify build + headers
```
