'use client';
import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type NavbarProps = {
  classes: string;
  classesLink: string;
};
export const NavList: FC<NavbarProps> = ({ classes, classesLink }) => {
  const { t } = useTranslation();

  return (
    <ul className={classes}>
      <li>
        <Link href="/corsets" className={classesLink}>
          {t('corsets')}
        </Link>
      </li>
      <li>
        <Link href="/shirts" className={classesLink}>
          {t('shirts')}
        </Link>
      </li>
      <li>
        <Link href="/about" className={classesLink}>
          {t('about')}
        </Link>
      </li>
      <li>
        <Link href="/care" className={classesLink}>
          {t('care')}
        </Link>
      </li>
      <li>
        <Link href="/delivery" className={classesLink}>
          {t('delivery')}
        </Link>
      </li>
    </ul>
  );
};
