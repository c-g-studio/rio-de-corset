'use client';
import { corsetAttributes } from '@/types/сorsetAttributes';
import { AxiosResponse } from 'axios';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CareCorset } from './CareCorset';
import { CareShirt } from './CareShirt';

type CardProps = {
  data: AxiosResponse<{
    id: number;
    attributes: corsetAttributes;
  }>;
  category: string;
  locale: string;
};

export const InfoBlock: FC<CardProps> = ({ data, category, locale }) => {
  const name =
    locale === 'uk'
      ? data.data.attributes.name_uk
      : data.data.attributes.name_en;
  const price =
    locale === 'uk'
      ? data.data.attributes.price_uk
      : data.data.attributes.price_en;
  const sizeText =
    locale === 'uk'
      ? data.data.attributes.size_text_uk
      : data.data.attributes.size_text_en;
  const size_abbr = data.data.attributes.size.data.attributes.size_abbr;
  const { t } = useTranslation();
  return (
    <div className="mt-8 w-[100%] lg:mt-0">
      <div className="mb-6 lg:mb-12">
        <h2 className="mb-4 text-lg font-medium uppercase tracking-[0.04em] md:text-[32px] lg:mb-8">
          {name}
        </h2>
        <p className="mb-2 text-sm font-semibold md:text-xl lg:mb-6">
          ({size_abbr}) {sizeText}
        </p>
        <p className="mb-2 text-sm font-medium tracking-[0.04em] md:mb-4 md:text-xl lg:mb-8">
          {t('made')}
        </p>
        <p className="text-sm font-semibold md:text-2xl">
          {price}
          {t('currency')}
        </p>
      </div>
      <button
        type="button"
        id={`${data.data.id}`}
        className="mb-6 block w-full border py-[14px] text-base uppercase tracking-[0.08em] transition-colors hover:border-transparent hover:bg-activeColor hover:text-whiteColor focus:border-transparent focus:bg-activeColor focus:text-whiteColor active:border-transparent active:bg-activeColor active:text-whiteColor md:mb-8 md:text-lg lg:mb-10"
      >
        {t('addTo')}
      </button>
      <div className="font-medium tracking-[0.04em]">
        <p className="mb-2 text-xl">{t('careTitle')}:</p>
        {category === 'shirts' ? <CareShirt /> : <CareCorset />}
      </div>
    </div>
  );
};
