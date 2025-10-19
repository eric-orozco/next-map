import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter, Orbitron } from 'next/font/google';
import { routing } from '@/i18n/routing';
import ThemeProviderWrapper from '@/components/ThemeProvider';
import StoreInitializer from '@/components/StoreInitializer';
import '../globals.css';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron',
  display: 'swap',
});

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
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <meta name="emotion-insertion-point" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${orbitron.variable}`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <StoreInitializer />
          <ThemeProviderWrapper isRTL={isRTL}>{children}</ThemeProviderWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
