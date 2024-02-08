import '@/utils/generateStaticParameters';
import { dir } from 'i18next';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

import { classnames } from '@/utils/classnames';
import { Footer } from '../../components/ui/Footer';
import { Header } from '../../components/ui/Header';

import type { Metadata } from 'next';

const inter: NextFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Starter',
  description: 'A starter for Next.js projects.',
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body
        className={classnames(
          inter.className,
          'flex h-full min-h-screen flex-col bg-slate-50',
        )}
      >
        <Header />

        <main className="flex-grow" role="main">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
