'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface TranslationReadyProps {
  readonly children: React.ReactNode;
  readonly namespace?: string | string[];
}

/**
 * Component that ensures translations are loaded before rendering children
 * This prevents hydration mismatches in SSR
 */
export default function TranslationReady({
  children,
  namespace = 'common',
}: TranslationReadyProps) {
  const { ready } = useTranslation(namespace);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // On server or before hydration, don't render children
  if (!isClient || !ready) {
    return null;
  }

  return <>{children}</>;
}
