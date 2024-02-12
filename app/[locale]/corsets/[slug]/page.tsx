import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { NextPage } from 'next/types';
const i18nNamespaces = ['corsets'];

interface NextPageProps {
  params: { locale: string; slug: string };
}

// eslint-disable-next-line @next/next/no-async-client-component
const Page: NextPage<NextPageProps> = async ({ params: { locale, slug } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <h1 className="mt-36">{t('care')}</h1>
      <p>This product ID - {slug}</p>
    </TranslationsProvider>
  );
};

export default Page;
