// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// Standalone marketing site. Tailwind is wired via PostCSS (postcss.config.cjs)
// rather than an integration, to mirror the webapp's proven Tailwind 3 setup.
// `site` is used for canonical + OpenGraph absolute URLs — change to the real domain.
export default defineConfig({
  site: 'https://olympialabs.eu',
  integrations: [
    // `i18n` makes the sitemap emit xhtml:link alternates, so the EN and PT
    // routes are declared as translations of each other rather than as
    // duplicate content. Mirrors the hreflang tags in Base.astro — keep the
    // two in step.
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', pt: 'pt-PT' },
      },
    }),
  ],
})
