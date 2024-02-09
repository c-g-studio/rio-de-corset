import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { classnames } from '@/utils/classnames';
import '@/utils/generateStaticParameters';
import { dir } from 'i18next';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Footer } from '../../components/layout/Footer';
import { Header } from '../../components/layout/Header';
import initTranslations from '../i18n';
import { montserrat } from './fonts';
import './globals.css';


export const metadata: Metadata = {
  title: 'Next.js Starter',
  description: 'A starter for Next.js projects.',
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params: { locale } }: Props) {
  const localeHeader = await initTranslations(locale, ['header']);
  const localeFooter = await initTranslations(locale, ['footer']);
  return (
    <html lang={locale} dir={dir(locale)}>
      <body
        className={classnames(
          montserrat.className,
          'flex h-full min-h-screen flex-col bg-slate-50',
        )}
      >
        <TranslationsProvider
          namespaces={['header']}
          locale={locale}
          resources={localeHeader.resources}>
            <Header />
          </TranslationsProvider>

        <main className="flex-grow" role="main">
          {children}
        </main>

        <TranslationsProvider
          namespaces={['footer']}
          locale={locale}
          resources={localeFooter.resources}>
            <Footer />
        </TranslationsProvider>
      </body>
    </html>
  );
}
