'use client';
import Link from 'next/link';
import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import s from './style.module.css';
type OrderBlockProps = {
  price: number;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
export const OrderBlock: FC<OrderBlockProps> = ({ price, setIsOpen }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`${s.block_horizont} mt-auto flex flex-col bg-activeColor p-4 md:py-6 md:pl-9 md:pr-[26px]`}
    >
      <p
        className={`${s.price_element} mb-4 text-[17px] font-medium tracking-[0.04em] md:mb-6`}
      >
        <span className="mr-3 uppercase">{t('total')}</span>
        <span>
          {price}
          {t('currency')}
        </span>
      </p>
      <Link
        href="/ordering"
        className="mb-4 border border-blackColor bg-blackColor py-[14px] text-center text-base font-medium uppercase tracking-[0.04em] text-whiteColor transition hover:bg-orderHoverLink focus:bg-orderHoverLink active:bg-orderHoverLink md:py-3 md:text-lg md:tracking-[0.08em]"
      >
        {t('complete')}
      </Link>
      <Link
        href="/"
        onClick={() => setIsOpen(false)}
        className="border border-blackColor py-[14px] text-center text-base font-medium uppercase tracking-[0.04em] transition hover:bg-continueHover focus:bg-continueHover active:bg-continueHover md:py-3 md:text-lg md:tracking-[0.08em]"
      >
        {t('continue')}
      </Link>
    </div>
  );
};
