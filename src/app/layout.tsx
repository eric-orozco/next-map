import type { Metadata, Viewport } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import ThemeProviderWrapper from '@/components/ThemeProvider';
import AppInitializer from '@/components/AppInitializer';
import './globals.css';

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1976d2' },
    { media: '(prefers-color-scheme: dark)', color: '#90caf9' },
  ],
};

export const metadata: Metadata = {
  title: 'Next Map - Advanced 3D Mapping with VR Support',
  description:
    'Showcase of modern web technologies with performant 3D mapping capabilities, VR integration, and responsive design',
  keywords: '3D mapping, VR, MapLibre, Next.js, React, TypeScript, Material UI',
  authors: [{ name: 'Next Map Team' }],
  openGraph: {
    title: 'Next Map - Advanced 3D Mapping',
    description:
      'Showcase of modern web technologies with performant 3D mapping capabilities',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next Map - Advanced 3D Mapping',
    description:
      'Showcase of modern web technologies with performant 3D mapping capabilities',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        <AppInitializer />
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
