// Shared locale configuration for components that need locale information
// This mirrors the locales defined in routing.ts but provides type safety
export const locales = [
  'en',
  'es',
  'fr',
  'zh-CN',
  'ja',
  'ko',
  'no',
  'pt-BR',
  'ar-SA',
] as const;

export type Locale = (typeof locales)[number];

/**
 * Supported languages with display information
 */
export const supportedLanguages = [
  { code: 'en' as const, name: 'English', flag: '🇺🇸' },
  { code: 'es' as const, name: 'Español', flag: '🇪🇸' },
  { code: 'fr' as const, name: 'Français', flag: '🇫🇷' },
  { code: 'zh-CN' as const, name: '中文', flag: '🇨🇳' },
  { code: 'ja' as const, name: '日本語', flag: '🇯🇵' },
  { code: 'ko' as const, name: '한국어', flag: '🇰🇷' },
  { code: 'no' as const, name: 'Norsk', flag: '🇳🇴' },
  { code: 'pt-BR' as const, name: 'Português', flag: '🇧🇷' },
  { code: 'ar-SA' as const, name: 'العربية', flag: '🇸🇦' },
];

/**
 * RTL languages list
 */
export const rtlLanguages = new Set<Locale>(['ar-SA']);

/**
 * Check if a language is RTL
 */
export function isRTLLanguage(lang: Locale): boolean {
  return rtlLanguages.has(lang);
}

/**
 * Get language display name
 */
export function getLanguageDisplay(locale: Locale) {
  return supportedLanguages.find(lang => lang.code === locale);
}
