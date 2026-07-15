/**
 * Site-wide constants and runtime config for the OlympiaLabs landing site.
 *
 * Everything here is structural — URLs, anchors, asset paths — and is shared
 * across languages. User-facing prose lives in `copy.ts`; the `key` fields
 * below index into it.
 */

/** Product webapp origin — "Sign in" / "Open app" links. */
export const APP_URL = import.meta.env.PUBLIC_APP_URL ?? 'https://app.olympialabs.eu'
export const SIGN_IN_URL = `${APP_URL.replace(/\/$/, '')}/login`

export const SITE = {
  name: 'OlympiaLabs',
  domain: 'olympialabs.eu',
  title: 'OlympiaLabs — Coach the athlete, not the average.',
  description:
    'OlympiaLabs measures sprint kayak and canoe sessions at 833 Hz — boat motion, GPS, video and body movement — and compares every session against the athlete’s own history. Findings are computed in code, never invented. Now recruiting pilot clubs.',
  location: 'Viana do Castelo, Portugal',
  contactEmail: 'hello@olympialabs.eu',
} as const

/** Anchor targets — shared by the nav and the footer's Product column. */
export const NAV_LINKS = [
  { key: 'observes', href: '#observes' },
  { key: 'loop', href: '#loop' },
  { key: 'coach', href: '#coach' },
  { key: 'trust', href: '#trust' },
] as const

/**
 * Proof-section media — real footage/screenshots of the system in use.
 *
 * Slots ship empty on purpose: `Proof.astro` renders only the entries that have
 * a `src`, and the section disappears entirely when none do, so the live page
 * never shows a placeholder box. To light a slot up, drop the file in
 * `public/proof/` and fill in its `src` — the caption is already written
 * (see `COPY.proof.captions`).
 *
 * `span: 'full'` gives an item the full content width; 'half' pairs them 2-up.
 * Video slots render with controls rather than autoplaying, so keep clips short
 * and silent — they are evidence, not decoration.
 *
 * `src` is typed `string` rather than inferred as a literal on purpose. With
 * `as const`, TypeScript infers a type predicate from Proof's `src !== ''`
 * filter and narrows the entries down to whichever slots happen to be filled —
 * so populating only image slots would make the component's video branch a
 * compile error. Widening `src` keeps both branches valid whatever is set here.
 */
export const PROOF_MEDIA: ReadonlyArray<{
  key: 'sensor' | 'session' | 'pose' | 'platform' | 'finding'
  src: string
  type: 'image' | 'video'
  span: 'half' | 'full'
}> = [
  { key: 'sensor', src: '', type: 'image', span: 'half' },
  { key: 'session', src: '', type: 'video', span: 'half' },
  { key: 'pose', src: '', type: 'video', span: 'half' },
  { key: 'platform', src: '', type: 'image', span: 'half' },
  { key: 'finding', src: '', type: 'image', span: 'full' },
]
