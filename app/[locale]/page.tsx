import initTranslations from '@/app/i18n';
import LanguageChanger from '@/components/i18n/LanguageChanger';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { NextPage } from 'next/types';
import { Form } from '../../components/ui/Form';

const i18nNamespaces = ['home'];

const Page: NextPage = async ({ params: { locale } } ) => {
  const { t, resources  } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
    namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
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
<LanguageChanger/>
          <Form />
        </div>
      </div>
      </section>
      </TranslationsProvider>
  );
};

export default Page;
