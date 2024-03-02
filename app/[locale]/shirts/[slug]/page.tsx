import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { Card } from '@/components/pages/card/Card';
import { NextPage } from 'next/types';
const i18nNamespaces = ['card'];

interface NextPageProps {
  params: { locale: string; slug: string };
}

interface MetadataProps {
  searchParams: { name: string };
}

export const generateMetadata = ({ searchParams }: MetadataProps) => {
  return {
    title: `Rio de corset | ${searchParams.name}`,
  };
};

const Page: NextPage<NextPageProps> = async ({ params: { locale, slug } }) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Card
        locale={locale}
        requestType="shirts"
        category="shirts"
        slug={slug}
      />
    </TranslationsProvider>
  );
};

export default Page;
