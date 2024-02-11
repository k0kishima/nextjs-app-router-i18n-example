import { getTranslation } from '@/app/i18n/server';
import { LanguageProvider } from '@/app/i18n/client';
import ClientComponent from './_components';
import Link from 'next/link';

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  const { t } = await getTranslation(lang);

  return (
    <main>
      <div className="m-5">
        <h1>{t('app_name')}</h1>

        <LanguageProvider initialLanguage={lang}>
          <ClientComponent />
        </LanguageProvider>

        <Link
          href={`/${lang}/projects`}
          className="font-semibold text-blue-500 underline hover:text-blue-700"
        >
          {t('projects')}
        </Link>

        <br />

        <Link
          href={`/${lang === 'en' ? 'ja' : 'en'}`}
          className="font-semibold text-blue-500 underline hover:text-blue-700"
        >
          {t('switch_lang')}
        </Link>
      </div>
    </main>
  );
}
