import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { NotFoundComponent } from '@/components/pages/notFound/NotFoundComponent';
import { NextPage } from 'next/types';

const i18nNamespaces = ['notFound'];

interface NextPageProps {
  params: { locale: string; id: string };
}

const Page: NextPage<NextPageProps> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <NotFoundComponent
        sorry={t('sorry')}
        notFound={t('notFound')}
        back={t('goBack')}
      />
    </TranslationsProvider>
  );
};

export default Page;
