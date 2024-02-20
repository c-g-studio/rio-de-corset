'use client';
import Arrow from '@/public/image/about/arrow.svg';
import Image from 'next/image';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AboutVideo } from '../../AboutVideo/AboutVideo';
import './aboutSlider.css';

export const DesctopSlider: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="swiper_about_wrapper">
      <Swiper
        direction={'horizontal'}
        slidesPerView={1}
        spaceBetween={24}
        mousewheel={true}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 2,
          },
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="w-[644px]">
          <div className="mb-6 items-center lg:mb-0 lg:flex lg:gap-6">
            <h1 className="mb-4 whitespace-nowrap text-2xl/[1.5] font-light uppercase md:mb-6 md:text-[40px]/[1.5] lg:mb-0 lg:text-6xl/[1]">
              {t('title')}
            </h1>
            <Arrow className=" w-[310px] md:w-[262px] lg:w-[310px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="about_desc_slide">
          <div className="text-base">
            <p>{t('slideOneOne')}</p>
            <p>{t('slideOneTwo')}</p>
          </div>
          <Image
            src="/image/about/girl.jpg"
            width={310}
            height={340}
            alt="boxes"
            loading="lazy"
            className="w-[100%] md:h-[340px] md:w-[310px]"
          />
        </SwiperSlide>
        <SwiperSlide className="about_desc_slide">
          <div className="text-base">
            <p>{t('slideTwoOne')}</p>
            <p>{t('slideTwoTwo')}</p>
          </div>
          <Image
            src="/image/about/corsets.jpg"
            width={310}
            height={340}
            alt="cat"
            loading="lazy"
            className="w-[100%] md:h-[340px] md:w-[310px]"
          />
        </SwiperSlide>
        <SwiperSlide className="about_desc_slide">
          <div className="text-base">
            <p>{t('slideThree')}</p>
          </div>
          <AboutVideo />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
