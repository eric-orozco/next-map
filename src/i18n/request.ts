import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Extract locale from [locale] segment in app router
  const requested = await requestLocale;

  // Validate locale against supported locales, fallback to default
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    // Load messages from consolidated JSON files in messages/ directory
    // Each locale has a single file with all namespaces (HomePage, Navigation, Common)
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
