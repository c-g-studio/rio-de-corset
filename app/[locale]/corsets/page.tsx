import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { NextPage } from 'next/types';
import { productsAPI } from '@/services/productsAPI';
import { ProductCard } from '@/components/common/ProductCard/ProductCard';
import { сorsetAttributes as corsetAttributes } from '@/types/сorsetAttributes';

const i18nNamespaces = ['corsets'];

interface NextPageProps {
  params: { locale: string };
}

const Page: NextPage<NextPageProps> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const response = await productsAPI.getCorsets(locale);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <section className="pt-[134px]">
        <div className="container">
          <h1 className="text-center">[ {t('title')} ]</h1>
          <ul>
            {response.data.data.map(
              ({
                id,
                attributes,
              }: {
                id: string;
                attributes: corsetAttributes;
              }) => (
                <ProductCard
                  key={id}
                  id={id}
                  attributes={attributes}
                  locale={locale}
                />
              ),
            )}
          </ul>
        </div>
      </section>
    </TranslationsProvider>
  );
};

export default Page;
