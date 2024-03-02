import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { Care } from '@/components/pages/care/Care';
import { NextPage } from 'next/types';

const i18nNamespaces = ['care'];

export const metadata = {
  title: 'Rio de corset | Догляд',
  description: `Ласкаво просимо до світу елегантності та стилю! Ми пропонуємо вам вишукані корсети та сорочки високої якості. Наші моделі створені, щоб підкреслити вашу жіночність та витончений смак. Обирайте з багатого асортименту, де представлені класичні та сміливі стилі. Ми пишаємося своїм обслуговуванням та готові надати вам приємний досвід покупок. Обирайте красу та якість разом з нами!`,
};

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
      <Care />
    </TranslationsProvider>
  );
};

export default Page;
