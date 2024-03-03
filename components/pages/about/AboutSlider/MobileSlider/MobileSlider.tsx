'use client';
import Image from 'next/image';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AboutVideo } from '../../AboutVideo/AboutVideo';
import './MobileSlider.css';

export const MobSlider: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mobile_slider">
      <Swiper
        direction={'horizontal'}
        slidesPerView={1}
        spaceBetween={24}
        pagination={true}
        mousewheel={true}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 2,
          },
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper select-none"
      >
        <SwiperSlide className="w-[644px]">
          <div className="text-sm md:text-base">
            <p className="mb-5">{t('slideOneOne')}</p>
            <p>{t('slideOneTwo')}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="about_desc_slide">
          <Image
            src="/image/about/girl.jpg"
            width={310}
            height={340}
            alt="boxes"
            loading="lazy"
            className="h-[340px] w-[100%] w-[310px]"
          />
        </SwiperSlide>
        <SwiperSlide className="about_desc_slide">
          <div className="text-base">
            <p className="mb-5">{t('slideTwoOne')}</p>
            <p>{t('slideTwoTwo')}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="about_desc_slide">
          <Image
            src="/image/about/corsets.jpg"
            width={310}
            height={340}
            alt="cat"
            loading="lazy"
            className="h-[340px] w-[100%] w-[310px]"
          />
        </SwiperSlide>
        <SwiperSlide className="about_desc_slide">
          <div className="text-base">
            <p>{t('slideThree')}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="about_desc_slide">
          <AboutVideo />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
