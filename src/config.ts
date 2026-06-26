/** Site-wide constants and runtime config for the OlympiaLabs landing site. */

/** Product webapp origin — "Sign in" / "Open app" links. */
export const APP_URL = import.meta.env.PUBLIC_APP_URL ?? 'https://app.olympialabs.eu'
export const SIGN_IN_URL = `${APP_URL.replace(/\/$/, '')}/login`

export const SITE = {
  name: 'OlympiaLabs',
  domain: 'olympialabs.eu',
  tagline: 'SPEED. PRECISION. RELIABILITY.',
  title: 'OlympiaLabs — Measure technique, not just effort.',
  description:
    'Performance analytics for kayak racing. OlympiaLabs measures the quality of every stroke and the behaviour of the boat — not just effort — and turns it into coaching you can act on.',
  location: 'Viana do Castelo, Portugal',
} as const

/** Anchor targets used by the nav. */
export const NAV_LINKS = [
  { href: '#measure', label: 'What we measure' },
  { href: '#system', label: 'System' },
  { href: '#technology', label: 'Technology' },
] as const
