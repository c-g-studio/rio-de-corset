import initTranslations from '@/app/i18n';
import LanguageChanger from '@/components/i18n/LanguageChanger';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
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
            <h1 className="text-3xl font-bold text-gray-700">{t('header')}</h1>

            <p className="text-base text-gray-800">
              This is a starter for Next js with Typescript, ESLint, Prettier,
              Husky,
              <br />
              Tailwind CSS, React Hook Form, React Use and more.
            </p>

            <h2 className="text-2xl font-bold">{t('sub')}</h2>
            <LanguageChanger />
            <a
              href="/product/00000000000000"
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 md:text-base"
            >
              Товар тест 1
            </a>
            <a
              href="/product/13124234324"
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 md:text-base"
            >
              Товар тест 2
            </a>
          </div>
        </div>
      </section>
    </TranslationsProvider>
  );
};

export default Page;
