'use client';

import React from 'react';
import { useLanguage, useTranslation } from '@/app/i18n/client';

export default function ClientComponent() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return <p>{t('home:message')}</p>;
}
