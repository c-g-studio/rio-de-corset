import { NavList } from '@/components/common/navigation/NavList/NavList';
import Link from 'next/link';
import { FC } from 'react';

export const Footer: FC = ({ ...props }) => {
  return (
    <footer
      className="bg-blackColor py-4 py-[24px] text-center md:py-10"
      {...props}
    >
      <div className="container flex flex-col gap-4 md:gap-[24px]">
        <ul className="flex justify-center gap-4">
          <li>
            <Link
              href="/"
              className="stroke-whiteColor transition-colors hover:stroke-activeColor focus:stroke-activeColor active:stroke-activeColor"
            >
              <svg width={24} height={24} className="stroke-current">
                <use href="/image/icons.svg#icon-instagram"></use>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="fill-whiteColor stroke-whiteColor transition-colors hover:fill-activeColor hover:stroke-activeColor focus:fill-activeColor focus:stroke-activeColor active:fill-activeColor active:stroke-activeColor"
            >
              <svg width={24} height={24} className="stroke-current">
                <use href="/image/icons.svg#icon-linkedin"></use>
              </svg>
            </Link>
          </li>
        </ul>
        <Link
          href="/"
          className="text-xs uppercase text-whiteColor transition-colors hover:text-activeColor focus:text-activeColor active:text-activeColor active:underline md:text-base"
        >
          rio.de.corset@gmail.com
        </Link>
        <NavList
          classes="flex flex-col justify-center items-center gap-4 md:gap-6 md:flex-row"
          classesLink="text-whiteColor text-xs uppercase md:text-base hover:text-activeColor focus:text-activeColor active:text-activeColor active:underline transition-colors"
        />
        <ul className="flex flex-col justify-center gap-4 md:flex-row md:gap-6">
          <li>
            <Link
              href="/"
              className="text-xs text-whiteColor underline transition-colors hover:text-activeColor focus:text-activeColor active:text-activeColor md:text-base"
            >
              Політика конфіденційності
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-xs text-whiteColor underline transition-colors  hover:text-activeColor focus:text-activeColor active:text-activeColor md:text-base"
            >
              Публічна оферта
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
