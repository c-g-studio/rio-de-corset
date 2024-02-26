import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { NextPage } from 'next/types';
import { Form } from '@/components/common/Form';
import { Products } from '@/components/pages/ordering/Products/Products';
// import { Input } from '@/components/common/formElements/form/Input';
// import { Button } from '@/components/common/button/Button';
// import { Label } from '@/components/common/formElements/form/Label';

const i18nNamespaces = ['ordering'];

interface NextPageProps {
  params: { locale: 'en' | 'uk' };
}

const Page: NextPage<NextPageProps> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <section className="mb-[60px] mt-[84px] md:mb-[100px] md:mt-[136px] lg:mb-[140px] lg:mt-[134px]">
        <div className="container">
          <div>
            <div>
              <h1 className="mb-6 text-2xl font-medium uppercase leading-[1.67] tracking-[.04em]">
                {t('title')}
              </h1>
            </div>
            <div className="relative lg:flex lg:max-h-[600px] lg:justify-between lg:overflow-hidden">
              <Form />
              <Products locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </TranslationsProvider>
  );
};

export default Page;
