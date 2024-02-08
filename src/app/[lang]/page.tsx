import { getTranslation } from '@/app/i18n/server';
import { LanguageProvider } from '@/app/i18n/client';
import ClientComponent from './_components';

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
      </div>
    </main>
  );
}