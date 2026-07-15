export const LOCALES = {
  en: {
    lang: 'en',
    path: '/',
  },
  pt: {
    lang: 'pt-PT',
    path: '/pt/',
  },
} as const

export type Locale = keyof typeof LOCALES

export const DEFAULT_LOCALE: Locale = 'en'

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === '/pt' || pathname.startsWith('/pt/') ? 'pt' : DEFAULT_LOCALE
}

export function stripLocaleFromPath(pathname: string): string {
  if (pathname === '/pt') return '/'
  if (pathname.startsWith('/pt/')) return pathname.slice(3) || '/'
  return pathname || '/'
}

export function getLocalizedPath(locale: Locale, pathname = '/'): string {
  const normalized = stripLocaleFromPath(pathname)
  if (locale === DEFAULT_LOCALE) return normalized
  return normalized === '/' ? LOCALES[locale].path : `/${locale}${normalized}`
}
