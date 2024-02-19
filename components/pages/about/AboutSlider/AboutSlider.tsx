'use client';
import Arrow from '@/public/image/about/arrow.svg';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useMedia } from 'react-use';
import 'swiper/css';
import 'swiper/css/pagination';
import { DesctopSlider } from './DesctopSlider/DesctopSlider';
import { MobSlider } from './MobileSlider/MobileSlider';

const IS_DESCTOP = '(min-width: 1440px)';

export const AboutSlider: FC = () => {
  const { t } = useTranslation();
  const isDesctop = useMedia(IS_DESCTOP, false);
  return (
    <section className="bg-activeColor pt-6 md:py-10 lg:py-20">
      <div className="container overflow-hidden pb-12 md:pb-0">
        <div className="mb-6 items-center lg:block lg:flex lg:hidden lg:gap-6">
          <h1 className="mb-4 text-2xl/[1.5] font-light uppercase md:mb-6 md:text-[40px]/[1.5] lg:mb-0 lg:text-6xl/[1]">
            {t('title')}
          </h1>
          <Arrow className=" w-[310px] md:w-[262px] lg:w-[310px]" />
        </div>
        {!isDesctop && <MobSlider />}
        {isDesctop && <DesctopSlider />}
      </div>
    </section>
  );
};
