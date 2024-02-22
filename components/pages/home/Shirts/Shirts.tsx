'use client';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { ShirtsList } from './ShirtsList';

interface CorsetsProps {
  locale: string;
}

export const Shirts: FC<CorsetsProps> = ({ locale }) => {
  const { t } = useTranslation();
  const [viewString, setViewString] = useState('');
  const { ref, inView } = useInView({
    threshold: 1,
    delay: 100,
    triggerOnce: true,
  });

  useEffect(() => {
    const string = t('shirts');
    setViewString('');
    let intervalId: NodeJS.Timeout;
    let index = -1;
    const arrayString = [...string];

    const addLetters = () => {
      intervalId = setInterval(() => {
        index += 1;
        if (index <= arrayString.length - 1) {
          setViewString(previousState => previousState + arrayString[index]);
        } else {
          clearInterval(intervalId);
        }
      }, 100);
    };

    inView && addLetters();

    return () => clearInterval(intervalId);
  }, [inView, t]);

  return (
    <section className="bg-whiteColor pb-[60px] pt-[30px] md:pb-[100px] md:pt-[50px] lg:pb-[140px] lg:pt-[70px]">
      <div className="container px-6 md:px-10 lg:px-16">
        <h2
          ref={ref}
          className="mb-6 text-center text-[22px] font-medium uppercase tracking-[0.04em] text-blackColor md:mb-8 md:text-[28px] lg:mb-10 lg:text-[32px]"
        >
          [ {viewString} ]
        </h2>
        <ShirtsList locale={locale} />
        <Link
          href="/shirts"
          className="block text-center text-lg text-blackColor underline transition-colors hover:text-activeColor focus:text-activeColor active:text-selectBgc"
        >
          дивитись більше
        </Link>
      </div>
    </section>
  );
};
