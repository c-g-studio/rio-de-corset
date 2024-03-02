import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { Corsets } from '@/components/pages/home/Corsets/Corsets';
import { CorsetsAnimate } from '@/components/pages/home/CorsetsAnimate/CorsetsAnimate';
import { Hero } from '@/components/pages/home/Hero/Hero';
import { Shirts } from '@/components/pages/home/Shirts/Shirts';
import { NextPage } from 'next/types';

export const metadata = {
  title: 'Rio de corset',
  description: `Ласкаво просимо до світу елегантності та стилю! Ми пропонуємо вам вишукані корсети та сорочки високої якості. Наші моделі створені, щоб підкреслити вашу жіночність та витончений смак. Обирайте з багатого асортименту, де представлені класичні та сміливі стилі. Ми пишаємося своїм обслуговуванням та готові надати вам приємний досвід покупок. Обирайте красу та якість разом з нами!`,
};

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
