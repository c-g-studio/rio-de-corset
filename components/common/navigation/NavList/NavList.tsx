'use client';
import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type NavbarProps = {
  classes: string;
};
export const NavList: FC<NavbarProps> = ({ classes }) => {
  const { t } = useTranslation();

  return (
    <ul className={classes}>
      <li>
        <Link
          href="/corsets"
          className="text-base  font-normal uppercase text-blackColor transition-colors hover:text-activeColor focus:text-activeColor active:text-activeColor active:underline"
        >
          {t('corsets')}
        </Link>
      </li>
      <li>
        <Link
          href="/shirts"
          className=" text-base font-normal uppercase text-blackColor transition-colors hover:text-activeColor focus:text-activeColor active:text-activeColor active:underline"
        >
          {t('shirts')}
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="text-base  font-normal uppercase text-blackColor transition-colors hover:text-activeColor focus:text-activeColor active:text-activeColor active:underline"
        >
          {t('about')}
        </Link>
      </li>
      <li>
        <Link
          href="/care"
          className="text-base  font-normal uppercase text-blackColor transition-colors hover:text-activeColor focus:text-activeColor active:text-activeColor active:underline"
        >
          {t('care')}
        </Link>
      </li>
      <li>
        <Link
          href="/delivery"
          className="text-base  font-normal uppercase text-blackColor transition-colors hover:text-activeColor focus:text-activeColor active:text-activeColor active:underline"
        >
          {t('delivery')}
        </Link>
      </li>
    </ul>
  );
};
