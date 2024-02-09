'use client';

import Link from 'next/link';
import { FC } from 'react';

import { IconButton } from '@/components/common/button/IconButton';
import { Navbar } from '@/components/common/navigation/Navbar';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { useBrowser } from '@/hooks/useBrowser';
import { useToggleMenu } from '@/hooks/useToggleMenu';

import LanguageChanger from '@/components/i18n/LanguageChanger';
import Logo from '@/public/image/logo.svg';



export const Header: FC = () => {
  const { isBrowser } = useBrowser();
  const { isMenuOpen, toggleMenu, isMobile, isTablet } = useToggleMenu();

  return (
    <header
      className="relative border-b border-gray-300 py-6"
      role="banner"
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Logo className="w-24" />
          </Link>

        {isBrowser && isMobile && (
          <IconButton
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            type="button"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </IconButton>
        )}

        {isBrowser && isMenuOpen && <MobileMenu />}

        {isBrowser && isTablet && <Navbar classes="hidden md:flex md:w-auto md:border-none md:bg-transparent md:py-0 md:shadow-none gap-5" />}
        <LanguageChanger />
      </div>
    </header>
  );
};
