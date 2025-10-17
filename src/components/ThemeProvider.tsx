'use client'

import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { EmotionCache, CacheProvider } from '@emotion/react'
import createEmotionCache from '@/lib/createEmotionCache'
import { getTheme } from '@/lib/theme'
import { useAppStore } from '@/stores/appStore'
import '@/lib/i18n'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface ThemeProviderWrapperProps {
  readonly children: React.ReactNode
  readonly emotionCache?: EmotionCache
}

export default function ThemeProviderWrapper({ 
  children, 
  emotionCache = clientSideEmotionCache 
}: ThemeProviderWrapperProps) {
  const { themeMode, isRTL } = useAppStore()
  const theme = getTheme(themeMode, isRTL)

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}