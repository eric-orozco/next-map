import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Supported locales for the application
  // Each locale corresponds to a message file in /messages/{locale}.json
  locales: ['en', 'es', 'fr', 'zh-CN', 'ja', 'ko', 'no', 'pt-BR', 'ar-SA'],

  // Default locale used when no locale matches or for fallbacks
  // Users accessing "/" will be redirected to "/en"
  defaultLocale: 'en',
});
