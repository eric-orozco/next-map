'use client'

import React from 'react'
import { 
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material'
import { useAppStore } from '@/stores/appStore'
import { supportedLanguages, changeLanguage, getTextDirection, type SupportedLanguage } from '@/lib/i18n'

interface LanguageSelectorProps {
  readonly variant?: 'standard' | 'outlined' | 'filled'
  readonly size?: 'small' | 'medium'
}

export default function LanguageSelector({ 
  variant = 'outlined', 
  size = 'small' 
}: LanguageSelectorProps) {
  const { language, setLanguage } = useAppStore()

  const handleLanguageChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value as SupportedLanguage
    setLanguage(newLanguage)
    
    // Use the centralized changeLanguage function
    changeLanguage(newLanguage).then(() => {
      // Set HTML dir attribute and lang using centralized function
      const textDirection = getTextDirection()
      document.documentElement.dir = textDirection
      document.documentElement.lang = newLanguage
    }).catch(console.error)
  }

  return (
    <FormControl variant={variant} size={size} sx={{ minWidth: 120 }}>
      <InputLabel id="language-select-label">Language</InputLabel>
      <Select
        labelId="language-select-label"
        value={language}
        onChange={handleLanguageChange}
        label="Language"
      >
        {supportedLanguages.map((lang) => (
          <MenuItem key={lang.code} value={lang.code}>
            <span style={{ marginRight: 8 }}>{lang.flag}</span>
            {lang.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}