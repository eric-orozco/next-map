'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';

/**
 * Client component that sets HTML lang and dir attributes after hydration
 * This prevents hydration mismatches when using next-intl with App Router
 */
export default function HTMLAttributesSetter() {
  const locale = useLocale();

  useEffect(() => {
    // Set lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;

      // Set dir attribute for RTL languages
      const isRTL = locale === 'ar-SA';
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    }
  }, [locale]);

  return null;
}
