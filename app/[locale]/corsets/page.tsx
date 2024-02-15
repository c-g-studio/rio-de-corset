'use client';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { ProductList } from '@/components/common/ProductList/ProductList';
import { productsAPI } from '@/services/productsAPI';
import { useState, useEffect } from 'react';

const i18nNamespaces = ['corsets'];

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
      <section className="mb-6 mt-[84px] md:mt-[126px] lg:mb-[140px] lg:mt-[134px]">
        <div className="container">
          {t && <h1 className=" text-center">[ {t('title')} ]</h1>}
          <ProductList
            locale={locale}
            getProducts={productsAPI.getCorsets}
            category="corsets"
          />
        </div>
      </section>
    </TranslationsProvider>
  );
};

export default Page;
