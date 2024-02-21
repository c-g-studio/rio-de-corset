'use client';
import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const CareCorset: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-base">
        {t('care')}{' '}
        <Link
          href="/care"
          className="font-semibold uppercase transition-colors hover:text-activeColor focus:text-activeColor active:text-activeColor"
        >
          [{t('careTitle')}]
        </Link>
      </p>
    </>
  );
};
