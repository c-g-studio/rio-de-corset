'use client';
import Image from 'next/image';
import { FC } from 'react';
import { useMedia } from 'react-use';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CorsetVideo } from '../CorsetVideo/CorsetVideo';
import s from './SliderTablet.module.css';
import './swiperTabWrapper.css';

const IS_MOBILE = '(max-width: 767px)';
const IS_TABLET = '(min-width: 768px)';

export const SliderTablet: FC = () => {
  const isMobile = useMedia(IS_MOBILE, false);
  const isTablet = useMedia(IS_TABLET, false);
  return (
    <div className="swiper_tablet_wrapper overflow-hidden pb-[45px] lg:hidden">
      <Swiper
        navigation={true}
        spaceBetween={32}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        className={s.slider_list}
      >
        {!isMobile && isTablet && (
          <SwiperSlide className={`${s.slider_item}`}>
            <CorsetVideo />
          </SwiperSlide>
        )}
        <SwiperSlide className={s.slider_item}>
          <Image
            src="/image/delivery/tab/boxes.jpg"
            width={322}
            height={437}
            alt="boxes"
            loading="lazy"
            className="w-[100%] md:h-[411px] md:w-[322px]"
          />
        </SwiperSlide>
        <SwiperSlide className={s.slider_item}>
          <Image
            src="/image/delivery/tab/cat.jpg"
            width={322}
            height={437}
            alt="cat"
            loading="lazy"
            className="w-[100%] md:h-[411px] md:w-[322px]"
          />
        </SwiperSlide>
        <SwiperSlide className={s.slider_item}>
          <Image
            src="/image/delivery/tab/pack.jpg"
            width={322}
            height={437}
            alt="pack"
            loading="lazy"
            className="w-[100%] md:h-[411px] md:w-[322px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
