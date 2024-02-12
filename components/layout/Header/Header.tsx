'use client';

import Link from 'next/link';
import { FC } from 'react';

import { IconButton } from '@/components/common/button/IconButton';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { useBrowser } from '@/hooks/useBrowser';
import { useToggleMenu } from '@/hooks/useToggleMenu';

import { NavList } from '@/components/common/navigation/NavList/NavList';
import { Navbar } from '@/components/common/navigation/Navbar';
import LanguageChanger from '@/components/i18n/LanguageChanger';
import Logo from '@/public/image/logo.svg';

export const Header: FC = () => {
  const { isBrowser } = useBrowser();
  const { isMenuOpen, toggleMenu, isMobile, isDesctop } = useToggleMenu();

  return (
    <header
      className=" border-gray-300 fixed z-[11] w-[100%] border-b bg-whiteColor py-2"
      role="banner"
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="hidden  md:block">
          <Logo className="w-24 w-[78px]" />
        </Link>
        {isBrowser && isMobile && (
          <IconButton
            className="text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm"
            type="button"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </IconButton>
        )}

        {isBrowser && isMenuOpen && <MobileMenu />}

        {isBrowser && isDesctop && (
          <Navbar>
            <NavList classes="flex gap-8" />
          </Navbar>
        )}
        <div className="flex items-center gap-4">
          <LanguageChanger />
          <button className="group flex items-center">
            <span className="mr-[-2px] flex h-[14px] w-[14px] items-center justify-center rounded-full bg-blackColor text-[11px] font-extrabold uppercase text-whiteColor transition-colors duration-300 ease-in group-hover:bg-activeColor">
              0
            </span>
            <svg className="h-[24px] w-[24px] stroke-blackColor transition-colors duration-300 ease-in group-hover:stroke-activeColor	">
              <use href="/image/icons.svg#icon-shopping-cart"></use>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
