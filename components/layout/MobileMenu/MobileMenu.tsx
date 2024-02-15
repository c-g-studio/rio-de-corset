import { FC } from 'react';

import { IconButton } from '@/components/common/button/IconButton';
import { NavList } from '@/components/common/navigation/NavList/NavList';
import { Navbar } from '@/components/common/navigation/Navbar';
import Image from 'next/image';
import Link from 'next/link';

type MobileMenuProps = {
  toggleMenu: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  classes?: string;
};

export const MobileMenu: FC<MobileMenuProps> = ({ toggleMenu, classes }) => {
  return (
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
        <NavList classes="flex gap-8 flex-col items-center" />
      </Navbar>
    </div>
  );
};
