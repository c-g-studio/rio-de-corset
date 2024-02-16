import Image from 'next/image';
import { FC } from 'react';
import { InfoBlock } from './InfoBlock';
export const Delivery: FC = () => {
  return (
    <section className="pb-[60px] pt-[84px] md:pb-[100px] md:pt-[126px] lg:pb-[140px] lg:pt-[134px]">
      <div className="container">
        <div className="lg:mb-[50px] lg:flex lg:gap-[50px]">
          <picture className="hidden lg:block">
            <source
              srcSet="/image/delivery/desc/corset.jpg"
              media="(min-width: 1440px)"
            />
            <source
              srcSet="/image/delivery/tab/corset.jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet="/image/delivery/mob/corset.jpg"
              media="(min-width: 480px)"
            />
            <img
              src="/image/delivery/desc/corset.jpg"
              alt="Член команди"
              width="402"
              height="437"
            />
          </picture>
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
      </div>
    </section>
  );
};
