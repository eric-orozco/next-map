'use client';

import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { EmotionCache, CacheProvider } from '@emotion/react';
import createEmotionCache from '@/lib/createEmotionCache';
import { getTheme } from '@/lib/theme';
import { useAppStore } from '@/stores/appStore';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface ThemeProviderWrapperProps {
  readonly children: React.ReactNode;
  readonly emotionCache?: EmotionCache;
  readonly isRTL?: boolean;
}

export default function ThemeProviderWrapper({
  children,
  emotionCache = clientSideEmotionCache,
  isRTL: propIsRTL,
}: ThemeProviderWrapperProps) {
  const { themeMode, isRTL: storeIsRTL } = useAppStore();

  // Use prop values for SSR consistency, fall back to store values
  const isRTL = propIsRTL ?? storeIsRTL;
  const theme = getTheme(themeMode, isRTL);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
