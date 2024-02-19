'use client';
import { introcondblack } from '@/app/[locale]/fonts';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
interface AboutProps {
  locale: string;
}

export const AboutDescription: FC<AboutProps> = ({ locale }) => {
  const { t } = useTranslation();
  return (
    <section className="pt-[84px] lowercase md:pt-[126px] lg:pt-[134px]">
      <div className="container">
        <div className="mb-[60px] md:mb-[100px] lg:mb-[140px] lg:flex lg:gap-[50px]">
          <p
            className={`${introcondblack.className} mb-8 text-xl/[1.4] font-light uppercase md:mb-6 md:text-[28px]/[1.14] lg:mb-0 lg:shrink-0 lg:leading-[1.35]`}
          >
            <span className="mb-4 block text-[40px]/[1] font-black sm:text-[46px]/[1] md:text-[84px]/[1] lg:mb-[46px]">
              rio.de.corset -{' '}
            </span>
            <span className="inline-block md:w-[470px]">{t('subtitle')}</span>
          </p>
          <div>
            <p className="text-base/[1.6] md:text-lg/[1.6] lg:text-[22px]/[1.6]">
              {t('description')}
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.6] lg:text-[22px]/[1.6]">
              {locale === 'uk' && (
                <span className="font-medium">{t('upcycling')}</span>
              )}
              {t('descriptionTwo')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
