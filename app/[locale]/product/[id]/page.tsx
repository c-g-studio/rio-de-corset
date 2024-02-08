import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { NextPage } from 'next/types';


const i18nNamespaces = ['card'];

interface NextPageProps {
  params: { locale: string, id: string };
}

const Page: NextPage<NextPageProps> = async ({ params: { locale, id } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <h1>{t("care")}</h1>
      <p>This product ID - {id}</p>
    </TranslationsProvider>
  );
};

export default Page;
