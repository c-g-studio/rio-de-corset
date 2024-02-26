import { FC, useEffect } from 'react';

import { IconButton } from '@/components/common/button/IconButton';
import { NavList } from '@/components/common/navigation/NavList/NavList';
import { Navbar } from '@/components/common/navigation/Navbar';
import { useBrowser } from '@/hooks/useBrowser';
import { useToggleMenu } from '@/hooks/useToggleMenu';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MobileMenu: FC = () => {
  const { isBrowser } = useBrowser();
  const { isMenuOpen, toggleMenu, isDesctop } = useToggleMenu();
  const pathname = usePathname();
  useEffect(() => {
    toggleMenu(false);
  }, [pathname, toggleMenu]);

  const classes = isMenuOpen
    ? 'translate-x-[100%] md:translate-x-[-480px] opacity-100'
    : 'md:translate-x-[0] opacity-0';
  return (
    <>
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
      {isBrowser && !isDesctop && (
        <div
          className={`${classes} fixed left-[-100%] top-0 z-[100] h-[100%] w-[100%] bg-whiteColor pt-[140px] transition md:left-auto md:right-[-480px] md:w-[480px]`}
        >
          <Link
            href="/"
            className="absolute left-[50%] top-1 z-[20] translate-x-[-50%] md:hidden"
          >
            <Image src="/image/logo.svg" width={78} height={80} alt="logo" />
          </Link>

          <IconButton
            className="text-gray-700 hover:bg-gray-100 absolute right-4 top-[18px] bg-whiteColor px-4 py-2 text-sm md:left-6 md:right-auto md:top-8"
            type="button"
            onClick={toggleMenu}
          >
            <svg className="linear h-[24px] w-[24px] stroke-blackColor transition-colors duration-300 group-hover:stroke-activeColor	">
              <use href="/image/icons.svg#icon-x"></use>
            </svg>
          </IconButton>

          <Navbar>
            <NavList
              classes="flex gap-8 flex-col items-center"
              classesLink="text-base font-normal uppercase text-blackColor transition-colors hover:text-activeColor focus:text-activeColor active:text-activeColor active:underline"
            />
          </Navbar>
        </div>
      )}
    </>
  );
};
