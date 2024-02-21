'use client';
import { FC, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './CardSlider.css';

// import './styles.css';

// import required modules
import { corsetAttributes } from '@/types/сorsetAttributes';
import { AxiosResponse } from 'axios';
import Image from 'next/image';
import { useMedia } from 'react-use';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

const IS_DESCTOP = '(min-width: 1440px)';
const BASE_URL = 'http://localhost:1337';

type CardProps = {
  data: AxiosResponse<{
    id: number;
    attributes: corsetAttributes;
  }>;
};

interface ImageData {
  id: number;
  attributes: {
    url: string;
    alternativeText: string | null;
  };
}
export const CardSlider: FC<CardProps> = ({ data }) => {
  const preview = data.data.attributes.preview.data.attributes.url;
  const allImages: ImageData[] = data.data.attributes.slides.data;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const isDesctop = useMedia(IS_DESCTOP, false);
  return (
    <div className="product_slider_thumb shrink-0 justify-between lg:flex lg:w-[774px] lg:flex-row-reverse lg:items-center">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 mb-2 lg:mb-0"
      >
        <SwiperSlide>
          <Image
            src={BASE_URL + preview}
            width={423}
            height={484}
            alt="main image"
          />
        </SwiperSlide>
        {allImages.map((element: ImageData) => (
          <SwiperSlide key={element.id}>
            <Image
              src={BASE_URL + element.attributes.url}
              width={423}
              height={484}
              alt={`${element.attributes.alternativeText}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={4}
        direction={isDesctop ? 'vertical' : 'horizontal'}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper flex-col"
      >
        <SwiperSlide>
          <Image
            src={BASE_URL + preview}
            width={423}
            height={484}
            alt="image"
          />
        </SwiperSlide>
        {allImages.map((element: ImageData) => (
          <SwiperSlide key={element.id}>
            <Image
              src={BASE_URL + element.attributes.url}
              width={423}
              height={484}
              alt={`${element.attributes.alternativeText}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
