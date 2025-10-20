// Root layout required by Next.js App Router
// Handles HTML structure and global styles
// Locale-specific attributes are set client-side to avoid hydration issues

import { Inter, Orbitron } from 'next/font/google';
// @ts-expect-error - CSS import type declaration issue
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
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
        {children}
      </body>
    </html>
  );
}
