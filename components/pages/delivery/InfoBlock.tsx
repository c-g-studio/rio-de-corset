'use client';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const InfoBlock: FC = () => {
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
    <div className="mb-6 grow bg-activeColor p-4 md:p-6 lg:mb-0 lg:px-[52px] lg:py-[56px]">
      <h2 className="mb-4 text-2xl/[1.67] font-light uppercase md:mb-8 md:text-[40px]/[1.5] lg:text-[60px]/[1]">
        {viewString}
      </h2>
      <div className="md:flex md:gap-8">
        <div className="mb-4">
          <div className="mb-2">
            <h3 className="mb-1 text-base/[1.25] md:mb-4 md:text-xl/[1.6] lg:text-2xl/[1.33]	">
              {t('europe')}
            </h3>
            <p className="flex gap-2 text-sm/[1.29] font-light	 md:text-base/[2] lg:text-lg/[1.78]">
              <svg width={24} height={24} className="stroke-blackColor">
                <use href="/image/icons.svg#icon-clock"></use>
              </svg>
              <span>{t('europePeriod')}</span>
            </p>
          </div>
          <div>
            <h3 className="mb-1 text-base/[1.25] md:mb-4 md:text-xl/[1.6] lg:text-2xl/[1.33]">
              {t('america')}
            </h3>
            <p className="mb-2 flex gap-2 text-sm/[1.29] font-light	 md:text-base/[2] lg:text-lg/[1.78]">
              <svg width={24} height={24} className="stroke-blackColor">
                <use href="/image/icons.svg#icon-clock"></use>
              </svg>
              <span>{t('americaPeriod')}</span>
            </p>
            <p className="flex items-center gap-4 border-t pt-1 text-sm/[1.29] font-light	 md:pt-2 md:text-base/[2] lg:text-lg/[1.78]">
              <svg
                width={24}
                height={24}
                className="shrink-0 stroke-blackColor"
              >
                <use href="/image/icons.svg#icon-x"></use>
              </svg>
              {t('notWork')}
            </p>
          </div>
        </div>
        <div>
          <h3 className="mb-1 text-base/[1.25] md:mb-4 md:text-xl/[1.6] lg:text-2xl/[1.33]">
            {t('ukraine')}
          </h3>
          <p className="mb-[2px] flex gap-2 text-sm/[1.29] font-light md:mb-2 md:text-base/[2] lg:text-lg/[1.78]">
            <svg width={24} height={24} className="stroke-blackColor">
              <use href="/image/icons.svg#icon-clock"></use>
            </svg>
            <span>{t('ukrainePeriod')}</span>
          </p>
          <p className="flex gap-2 text-sm/[1.29] font-light md:text-base/[2] lg:text-lg/[1.78]">
            <svg width={24} height={24}>
              <use href="/image/icons.svg#icon-delivery"></use>
            </svg>
            <span>{t('ukrainePost')}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
