import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { NextPage } from 'next/types';
import { Order } from '@/components/pages/ordering/Order/Order';

const i18nNamespaces = ['ordering'];

export const metadata = {
  title: 'Rio de corset | Замовлення',
  description: `Ласкаво просимо до світу елегантності та стилю! Ми пропонуємо вам вишукані корсети та сорочки високої якості. Наші моделі створені, щоб підкреслити вашу жіночність та витончений смак. Обирайте з багатого асортименту, де представлені класичні та сміливі стилі. Ми пишаємося своїм обслуговуванням та готові надати вам приємний досвід покупок. Обирайте красу та якість разом з нами!`,
};

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
            <Order locale={locale} />
          </div>
        </div>
      </section>
    </TranslationsProvider>
  );
};

export default Page;
