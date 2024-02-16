'use client';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { CorsetsList } from './CorsetsList';

interface CorsetsProps {
  locale: string;
}

export const Corsets: FC<CorsetsProps> = ({ locale }) => {
  const { t } = useTranslation();
  const [viewString, setViewString] = useState('');
  const { ref, inView } = useInView({
    threshold: 1,
    delay: 100,
    triggerOnce: true,
  });

  useEffect(() => {
    const string = t('corsets');
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
    <section className="mt-[1264px] bg-whiteColor pb-[30px] pt-[60px] md:mt-[1016px] md:pb-[50px] md:pt-[100px] lg:mt-[1485px] lg:pb-[70px] lg:pt-[140px]">
      <div className="container">
        <h2
          ref={ref}
          className="mb-6 text-center text-[22px] font-medium uppercase tracking-[0.04em] text-blackColor md:mb-8 md:text-[28px] lg:mb-10 lg:text-[32px]"
        >
          [ {viewString} ]
        </h2>
        <CorsetsList locale={locale} />
        <Link
          href="/corsets"
          className="block text-center text-lg text-blackColor underline transition-colors hover:text-activeColor focus:text-activeColor active:text-selectBgc"
        >
          дивитись більше
        </Link>
      </div>
    </section>
  );
};
