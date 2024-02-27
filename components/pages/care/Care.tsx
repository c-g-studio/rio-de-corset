'use client';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Care: FC = () => {
  const { t } = useTranslation();
  const [viewString, setViewString] = useState('');
  useEffect(() => {
    const string = t('title');
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

    addLetters();

    return () => clearInterval(intervalId);
  }, [t]);
  return (
    <section className="pb-[60px] pt-[84px] md:pb-[100px] md:pt-[126px] lg:pb-[140px]">
      <div className="container lg:flex lg:flex-row-reverse lg:gap-[50px]">
        <div className="mb-6 bg-activeColor p-4 md:mb-8 md:p-6 lg:mb-0 lg:w-[860px] lg:shrink-0 lg:px-[52px] lg:py-[60px]">
          <h1 className="mb-4 text-2xl/[1.6] font-light uppercase md:mb-8 md:text-[40px]/[1.5] lg:text-6xl">
            {viewString}
          </h1>
          <p className="mb-4 text-sm/[1.57] md:mb-6 md:text-xl/[1.6] lg:text-2xl/[1.33]">
            {t('subtitle')}
          </p>
          <div className="mb-1 text-sm/[1.29] font-light md:mb-[13px] md:text-base/[2] lg:text-lg/[1.78]">
            <p className="mb-2 flex items-center gap-2 md:mb-[13px]">
              <svg className="h-6 w-6 shrink-0 stroke-blackColor">
                <use href="/image/icons.svg#icon-alert-circle"></use>
              </svg>{' '}
              {t('warning')}
            </p>
            <p className="flex items-center gap-2">
              <svg className="h-6 w-6 shrink-0 stroke-blackColor">
                <use href="/image/icons.svg#icon-check-circle"></use>
              </svg>{' '}
              {t('minor')}
            </p>
          </div>
          <ul className="list-disc pl-6 text-xs/[1.5] font-light md:text-sm/[2.29] lg:text-base/[2]">
            <li>{t('stepOne')}</li>
            <li>{t('stepTwo')}</li>
            <li>{t('stepThree')}</li>
            <li>{t('stepFour')}</li>
          </ul>
        </div>
        <picture>
          <source srcSet="/image/care/desc.jpg" media="(min-width: 1440px)" />
          <source srcSet="/image/care/tab.jpg" media="(min-width: 768px)" />
          <source srcSet="/image/care/mob.jpg" media="(min-width: 480px)" />
          <img
            src="/image/care/desc.jpg"
            alt="Член команди"
            width="402"
            height="437"
            className="block w-full"
            loading="lazy"
          />
        </picture>
      </div>
    </section>
  );
};
