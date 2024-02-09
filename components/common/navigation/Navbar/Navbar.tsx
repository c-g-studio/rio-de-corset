'use client';
import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type NavbarProps = {
  classes: string;
};
export const Navbar: FC<NavbarProps> = ({ classes }) => {
  const { t } = useTranslation();

  return (
    <ul className={classes}>
      <li>
        <Link href="/corsets">{t('corsets')}</Link>
      </li>
      <li>
        <Link href="/shirts">{t('shirts')}</Link>
      </li>
      <li>
        <Link href="/about">{t('about')}</Link>
      </li>
      <li>
        <Link href="/care">{t('care')}</Link>
      </li>
      <li>
        <Link href="/delivery">{t('delivery')}</Link>
      </li>
    </ul>
  );
};
