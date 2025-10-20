import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import ThemeProviderWrapper from '@/components/ThemeProvider';
import StoreInitializer from '@/components/StoreInitializer';
import HTMLAttributesSetter from '@/components/HTMLAttributesSetter';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// Generate static params for all supported locales during build
export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Next Map - Advanced 3D Mapping Platform',
    description:
      'Experience the future of mapping with our advanced 3D visualization platform.',
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale parameter against supported locales
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for performance
  setRequestLocale(locale);

  // Load all messages for the current locale
  const messages = await getMessages();

  // Determine text direction for Arabic language support
  const isRTL = locale === 'ar-SA';

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <HTMLAttributesSetter />
      <StoreInitializer />
      <ThemeProviderWrapper isRTL={isRTL}>{children}</ThemeProviderWrapper>
    </NextIntlClientProvider>
  );
}
