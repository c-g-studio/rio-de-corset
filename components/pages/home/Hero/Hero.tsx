'use client';
import { introcondblack } from '@/app/[locale]/fonts';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

export const Hero: FC = () => {
  const { t } = useTranslation();
  const [viewString, setViewString] = useState('');
  const { ref, inView } = useInView({
    threshold: 1,
    delay: 100,
    triggerOnce: true,
  });

  useEffect(() => {
    const string = t('update');
    let intervalId: NodeJS.Timeout;
    const addLetters = () => {
      let index = -1;
      intervalId = setInterval(() => {
        if (index < string.length - 1) {
          setViewString(previousState => previousState + string[index]);
          index += 1;
        } else {
          clearInterval(intervalId);
        }
      }, 100);
    };
    inView && addLetters();
    return () => clearInterval(intervalId);
  }, [inView, t]);

  return (
    <section className="absolute top-[608px] z-10 h-[656px] w-[100%] bg-activeColor py-[287px] text-center md:top-[540px] md:h-[476px] md:py-[173px] lg:top-[767px] lg:h-[718px] lg:py-[241px]">
      <div className="container pb-10" ref={ref}>
        <h1
          className={`${introcondblack.className} mb-2 text-center text-[40px]/[1] font-black uppercase text-whiteColor sm:text-[50px]/[1] md:text-[100px]/[1] lg:mb-4 lg:text-[168px]/[1.07]`}
        >
          rio.de.corset
        </h1>
        <p
          className={`inline-flex justify-center text-center text-base font-light uppercase tracking-[0.04em] text-whiteColor md:text-lg/[1.22] lg:text-[32px]/[1.25]`}
        >
          <span className="">
            <span className="mr-1">[</span>
            <span className={`${introcondblack.className}`}>{viewString}</span>
            <span className="ml-1">]</span>
          </span>
        </p>
      </div>
    </section>
  );
};
