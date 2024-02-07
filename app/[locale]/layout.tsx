import './globals.css';

import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

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
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
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
