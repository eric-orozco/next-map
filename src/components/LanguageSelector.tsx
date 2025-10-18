'use client';

import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { supportedLanguages, type Locale as SupportedLanguage } from '@/i18n';

interface LanguageSelectorProps {
  readonly variant?: 'standard' | 'outlined' | 'filled';
  readonly size?: 'small' | 'medium';
}

export default function LanguageSelector({
  variant = 'outlined',
  size = 'small',
}: LanguageSelectorProps) {
  const locale = useLocale();
  const router = useRouter();

  const handleLanguageChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value as SupportedLanguage;

    console.log('LanguageSelector: Changing language to:', newLanguage);

    // Use next-intl routing to change locale
    router.push(`/${newLanguage}`);

    console.log('LanguageSelector: Language change completed');
  };

  return (
    <FormControl variant={variant} size={size} sx={{ minWidth: 120 }}>
      <InputLabel id="language-select-label">Language</InputLabel>
      <Select
        labelId="language-select-label"
        value={locale}
        onChange={handleLanguageChange}
        label="Language"
      >
        {supportedLanguages.map(lang => (
          <MenuItem key={lang.code} value={lang.code}>
            <span style={{ marginRight: 8 }}>{lang.flag}</span>
            {lang.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
