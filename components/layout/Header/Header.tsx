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
  const { isMenuOpen, toggleMenu, isDesctop } = useToggleMenu();
  const classes = isMenuOpen
    ? 'translate-x-[100%] md:translate-x-[-480px] opacity-100'
    : 'md:translate-x-[0] opacity-0';

  return (
    <>
      <header
        className="fixed z-[11] w-[100%] bg-whiteColor py-[14px] md:py-2	"
        role="banner"
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="hidden  md:block">
            <Logo className="w-[78px]" />
          </Link>

          {isBrowser && isDesctop && (
            <Navbar>
              <NavList classes="flex gap-8" />
            </Navbar>
          )}
          <div className="flex w-[100%] items-center justify-between	md:w-auto md:gap-[24px] lg:gap-4">
            <LanguageChanger />
            <button className="group order-3 ml-4 flex items-center md:ml-0">
              <span className="linear mr-[-2px] flex h-[14px] w-[14px] items-center justify-center rounded-full bg-blackColor text-[11px] font-extrabold uppercase text-whiteColor transition-colors duration-300 group-hover:bg-activeColor">
                0
              </span>
              <svg className="linear h-[24px] w-[24px] stroke-blackColor transition-colors duration-300 group-hover:stroke-activeColor	">
                <use href="/image/icons.svg#icon-shopping-cart"></use>
              </svg>
            </button>
            {isBrowser && !isDesctop && (
              <IconButton
                className="text-gray-700 hover:bg-gray-100 order-1  text-sm md:order-3	md:mr-0"
                type="button"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <svg className="linear h-8 w-8 stroke-blackColor transition-colors duration-300 group-hover:stroke-activeColor md:h-[24px] md:w-[24px]	">
                    <use href="/image/icons.svg#icon-x"></use>
                  </svg>
                ) : (
                  <svg className="linear h-8 w-8 stroke-blackColor transition-colors duration-300 group-hover:stroke-activeColor md:h-[24px] md:w-[24px]	">
                    <use href="/image/icons.svg#icon-menu"></use>
                  </svg>
                )}
              </IconButton>
            )}
          </div>
        </div>
        {isBrowser && !isDesctop && (
          <MobileMenu toggleMenu={toggleMenu} classes={classes} />
        )}
      </header>
    </>
  );
};
