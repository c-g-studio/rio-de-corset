import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { Corsets } from '@/components/pages/home/Corsets/Corsets';
import { CorsetsAnimate } from '@/components/pages/home/CorsetsAnimate/CorsetsAnimate';
import { Hero } from '@/components/pages/home/Hero/Hero';
import { Shirts } from '@/components/pages/home/Shirts/Shirts';
import { NextPage } from 'next/types';
// import { ordersAPI } from '@/services/ordersAPI'
// import { productsAPI } from '@/services/productsAPI';

const i18nNamespaces = ['home'];

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
      <CorsetsAnimate />
      <Hero />
      <Corsets locale={locale} />
      <Shirts locale={locale} />
    </TranslationsProvider>
  );
};

export default Page;
