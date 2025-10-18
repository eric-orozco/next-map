// This file is required for the root layout but the actual layout is in [locale]/layout.tsx
// next-intl will handle routing and redirect to the appropriate locale

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
