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
          className="text-base font-normal uppercase text-blackColor"
        >
          {t('corsets')}
        </Link>
      </li>
      <li>
        <Link
          href="/shirts"
          className="text-base font-normal uppercase text-blackColor"
        >
          {t('shirts')}
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="text-base font-normal uppercase text-blackColor"
        >
          {t('about')}
        </Link>
      </li>
      <li>
        <Link
          href="/care"
          className="text-base font-normal uppercase text-blackColor"
        >
          {t('care')}
        </Link>
      </li>
      <li>
        <Link
          href="/delivery"
          className="text-base font-normal uppercase text-blackColor"
        >
          {t('delivery')}
        </Link>
      </li>
    </ul>
  );
};
