'use client';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { ProductList } from '@/components/common/ProductList/ProductList';
import { useState, useEffect } from 'react';
import { AnimateTitle } from '@/components/common/AnimateTitle/AnimateTitle';
const i18nNamespaces = ['shirts'];

interface NextPageProps {
  params: { locale: string };
}
type TranslationFunction = (key: string) => string;

const Page = ({ params: { locale } }: NextPageProps) => {
  const [t, setT] = useState<TranslationFunction | null>(null);
  const [resources, setResources] = useState();

  useEffect(() => {
    (async () => {
      const { t, resources } = await initTranslations(locale, i18nNamespaces);
      setT(() => t);
      setResources(() => resources);
    })();
  }, [locale]);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <section className="mb-[60px] mt-[84px] md:mb-[100px] md:mt-[126px] lg:mb-[140px] lg:mt-[134px]">
        <div className="container">
          {t && <AnimateTitle titleString={t('title')} />}
          <ProductList locale={locale} requestType="shirts" category="shirts" />
        </div>
      </section>
    </TranslationsProvider>
  );
};

export default Page;
