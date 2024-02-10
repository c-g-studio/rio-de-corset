import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { CorsetsAnimate } from '@/components/pages/home/CorsetsAnimate/CorsetsAnimate';
import { Hero } from '@/components/pages/home/Hero/Hero';
import { NextPage } from 'next/types';

const i18nNamespaces = ['home'];

interface NextPageProps {
  params: { locale: string };
}

const Page: NextPage<NextPageProps> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <section className="pb-40 pt-40">
        <div className="container">
          <div className="grid gap-10 text-center">
            <h1 className="text-gray-700 text-3xl font-bold">{t('header')}</h1>
            <h2 className="text-2xl font-bold">{t('sub')}</h2>
            <a
              href="/product/00000000000000"
              className="text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm md:text-base"
            >
              какой-то текст
            </a>
            <a
              href="/product/13124234324"
              className="text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm md:text-base"
            >
              Товар тест 2
            </a>
          </div>
        </div>
      </section>
      <CorsetsAnimate />
      <Hero />
    </TranslationsProvider>
  );
};

export default Page;
