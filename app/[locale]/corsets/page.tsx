'use client';
import initTranslations from '@/app/i18n';
import { AnimateTitle } from '@/components/common/AnimateTitle/AnimateTitle';
import { ProductList } from '@/components/common/ProductList/ProductList';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { useEffect, useState } from 'react';
const i18nNamespaces = ['corsets'];

// export const metadata = {
//   title: 'Rio de corset | Корсети',
//   description: `Ласкаво просимо до світу елегантності та стилю! Ми пропонуємо вам вишукані корсети та сорочки високої якості. Наші моделі створені, щоб підкреслити вашу жіночність та витончений смак. Обирайте з багатого асортименту, де представлені класичні та сміливі стилі. Ми пишаємося своїм обслуговуванням та готові надати вам приємний досвід покупок. Обирайте красу та якість разом з нами!`,
// };

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
        <div className="container px-6 md:px-10 lg:px-16">
          {t && <AnimateTitle titleString={t('title')} />}
          <ProductList
            locale={locale}
            requestType="corsets"
            category="corsets"
          />
        </div>
      </section>
    </TranslationsProvider>
  );
};

export default Page;
