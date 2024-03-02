import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { classnames } from '@/utils/classnames';
import '@/utils/generateStaticParameters';
import { dir } from 'i18next';
import { ReactNode } from 'react';
import { Footer } from '../../components/layout/Footer';
import { Header } from '../../components/layout/Header';
import initTranslations from '../i18n';
import { ContextWrapper } from './ContextWrapper';
import { montserrat } from './fonts';
import './globals.css';

export const metadata = {
  title: 'Rio de corset ',
  description: `Ласкаво просимо до світу елегантності та стилю! Ми пропонуємо вам вишукані корсети та сорочки високої якості. Наші моделі створені, щоб підкреслити вашу жіночність та витончений смак. Обирайте з багатого асортименту, де представлені класичні та сміливі стилі. Ми пишаємося своїм обслуговуванням та готові надати вам приємний досвід покупок. Обирайте красу та якість разом з нами!`,
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const localeHeader = await initTranslations(locale, ['header']);
  const localeFooter = await initTranslations(locale, ['footer']);

  return (
    <html lang={locale} dir={dir(locale)}>
      <body
        className={classnames(
          montserrat.className,
          'bg-slate-50 flex h-full min-h-screen flex-col',
        )}
      >
        <ContextWrapper>
          <TranslationsProvider
            namespaces={['header']}
            locale={locale}
            resources={localeHeader.resources}
          >
            <Header locale={locale} />
          </TranslationsProvider>

          <main className="flex-grow" role="main">
            {children}
          </main>

          <TranslationsProvider
            namespaces={['footer']}
            locale={locale}
            resources={localeFooter.resources}
          >
            <Footer />
          </TranslationsProvider>
        </ContextWrapper>
      </body>
    </html>
  );
}
