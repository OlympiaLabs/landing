/// <reference types="astro/client" />

// Fontsource packages ship CSS only (no type declarations) for these side-effect imports.
declare module '@fontsource-variable/*'
declare module '@fontsource/*'

interface ImportMetaEnv {
  /** Origin of the product webapp — "Sign in" / "Open app" links point here. */
  readonly PUBLIC_APP_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
