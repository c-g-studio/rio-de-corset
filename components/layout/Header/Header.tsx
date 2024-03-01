'use client';

import Link from 'next/link';
import { FC } from 'react';

import { NavList } from '@/components/common/navigation/NavList/NavList';
import { Navbar } from '@/components/common/navigation/Navbar';
import LanguageChanger from '@/components/i18n/LanguageChanger';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { useBrowser } from '@/hooks/useBrowser';
import { useToggleMenu } from '@/hooks/useToggleMenu';
import Logo from '@/public/image/logo.svg';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';

type HeaderProps = {
  locale: string;
};
export const Header: FC<HeaderProps> = ({ locale }) => {
  const { isBrowser } = useBrowser();
  const { isDesctop } = useToggleMenu();

  return (
    <header
      className="fixed z-[11] w-[100%] bg-whiteColor py-[14px] md:py-2	"
      role="banner"
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="hidden  md:block" title="link to main page">
          <Logo className="w-[78px]" />
        </Link>

        {isBrowser && isDesctop && (
          <Navbar>
            <NavList
              classes="flex gap-8"
              classesLink="text-base font-normal uppercase text-blackColor transition-colors hover:text-activeColor focus:text-activeColor active:text-activeColor active:underline"
            />
          </Navbar>
        )}
        <div className="flex w-[100%] items-center justify-between	md:w-auto md:gap-[24px] lg:gap-4">
          <LanguageChanger />
          <ShoppingCart locale={locale} />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
