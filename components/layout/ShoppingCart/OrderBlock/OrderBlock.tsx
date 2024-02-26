'use client';
import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
type OrderBlockProps = {
  price: number;
};
export const OrderBlock: FC<OrderBlockProps> = ({ price }) => {
  const { t } = useTranslation();
  return (
    <div className="mt-auto flex flex-col bg-activeColor p-4 md:py-6 md:pl-9 md:pr-[26px]">
      <p className="mb-4 text-[17px] font-medium tracking-[0.04em] md:mb-6">
        <span className="mr-3 uppercase">{t('total')}</span>
        <span>
          {price}
          {t('currency')}
        </span>
      </p>
      <Link
        href="/ordering"
        className="mb-4 border border-blackColor bg-blackColor py-[14px] text-center text-base font-medium uppercase tracking-[0.04em] text-whiteColor transition hover:bg-orderHover focus:bg-orderHover active:bg-orderHover md:py-3 md:text-lg md:tracking-[0.08em]"
      >
        {t('complete')}
      </Link>
      <Link
        href="/"
        className="border border-blackColor py-[14px] text-center text-base font-medium uppercase tracking-[0.04em] transition hover:bg-continueHover focus:bg-continueHover active:bg-continueHover md:py-3 md:text-lg md:tracking-[0.08em]"
      >
        {t('continue')}
      </Link>
    </div>
  );
};
