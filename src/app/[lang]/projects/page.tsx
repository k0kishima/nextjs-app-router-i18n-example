import { getTranslation } from '@/app/i18n/server';
import Link from 'next/link';

export default async function Projects({
  params,
}: {
  params: { lang: string };
}) {
  const lang = params.lang;
  const { t } = await getTranslation(lang);

  return (
    <main>
      <div className="m-5">
        <h1>{t('implementing')}</h1>

        <Link
          href={`/${lang}`}
          className="font-semibold text-blue-500 underline hover:text-blue-700"
        >
          {t('home')}
        </Link>
      </div>
    </main>
  );
}
