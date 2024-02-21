import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { Card } from '@/components/pages/card/Card';
import { NextPage } from 'next/types';
const i18nNamespaces = ['card'];

interface NextPageProps {
  params: { locale: string; slug: string };
}

const Page: NextPage<NextPageProps> = async ({ params: { locale, slug } }) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <p>This product ID - {slug}</p>
      <Card
        locale={locale}
        requestType="corsets"
        category="corsets"
        slug={slug}
      />
    </TranslationsProvider>
  );
};

export default Page;
