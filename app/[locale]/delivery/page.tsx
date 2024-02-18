import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { Delivery } from '@/components/pages/delivery/Delivery';
import { NextPage } from 'next/types';

const i18nNamespaces = ['delivery'];

interface NextPageProps {
  params: { locale: string };
}

const Page: NextPage<NextPageProps> = async ({ params: { locale } }) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Delivery />
    </TranslationsProvider>
  );
};

export default Page;
