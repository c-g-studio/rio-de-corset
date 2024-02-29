'use client';
import ArrowLeft from '@/public/image/card/arrow-left-back.svg';
import { productsAPI } from '@/services/productsAPI';
import { AxiosResponse } from 'axios';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CardSlider } from './CardSlider/CardSlider';
import { InfoBlock } from './InfoBlock/InfoBlock';

// const { getCorsetById, getShirtById } = productsAPI;
type CardProps = {
  locale: string;
  category: string;
  requestType: 'shirts' | 'corsets';
  slug: string;
};
export const Card: FC<CardProps> = ({
  locale,
  requestType,
  category,
  slug,
}) => {
  const [productData, setProductData] = useState<AxiosResponse | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const request = async () => {
      const { data: data } =
        requestType === 'shirts'
          ? await productsAPI.getShirtById(Number(slug), locale)
          : await productsAPI.getCorsetById(Number(slug), locale);
      setProductData(data);
    };
    request();
  }, [slug, locale, requestType, category]);
  return (
    <section className="pb-[60px] pt-[84px] md:pb-[100px] md:pt-[126px] lg:pb-[140px]">
      <div className="container ">
        <Link
          href="/"
          className="group hidden gap-2 uppercase text-silverColor transition-colors hover:text-activeColor focus:text-activeColor active:text-activeColor lg:mb-[18px] lg:flex"
        >
          <ArrowLeft className="h-6 w-6 stroke-silverColor transition-colors group-hover:stroke-activeColor group-focus:stroke-activeColor group-active:stroke-activeColor" />
          {t('back')}
        </Link>
        <div className="justify-between lg:flex lg:gap-[50px]">
          {productData && <CardSlider data={productData} />}
          {productData && (
            <InfoBlock data={productData} category={category} locale={locale} />
          )}
        </div>
      </div>
    </section>
  );
};
