'use client';
import { useToggleMenu } from '@/hooks/useToggleMenu';
import Image from 'next/image';
import { FC } from 'react';
import { CorsetVideo } from './CorsetVideo/CorsetVideo';
import { InfoBlock } from './InfoBlock';
import { SliderTablet } from './SliderTablet/SliderTablet';

export const Delivery: FC = () => {
  const { isDesctop, isMobile, isTablet } = useToggleMenu();
  return (
    <section className="pb-[60px] pt-[84px] md:pb-[100px] md:pt-[126px] lg:pb-[140px] lg:pt-[134px]">
      <div className="container">
        <div className="lg:mb-[50px] lg:flex lg:gap-[50px]">
          {isDesctop && <CorsetVideo />}
          <InfoBlock />
        </div>
        <ul className="hidden justify-between lg:flex	">
          <li>
            <Image
              src="/image/delivery/desc/boxes.jpg"
              width={402}
              height={388}
              alt="boxes"
              loading="lazy"
            />
          </li>
          <li>
            <Image
              src="/image/delivery/desc/cat.jpg"
              width={402}
              height={388}
              alt="cat"
              loading="lazy"
            />
          </li>
          <li>
            <Image
              src="/image/delivery/desc/pack.jpg"
              width={402}
              height={388}
              alt="pack"
              loading="lazy"
            />
          </li>
        </ul>
        <div className="mb-4 md:hidden">
          {isMobile && !isTablet && !isDesctop && <CorsetVideo />}
        </div>
        <SliderTablet />
      </div>
    </section>
  );
};
