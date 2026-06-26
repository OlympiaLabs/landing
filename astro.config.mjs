// @ts-check
import { defineConfig } from 'astro/config'

// Standalone marketing site. Tailwind is wired via PostCSS (postcss.config.cjs)
// rather than an integration, to mirror the webapp's proven Tailwind 3 setup.
// `site` is used for canonical + OpenGraph absolute URLs — change to the real domain.
export default defineConfig({
  site: 'https://olympialabs.eu',
})
