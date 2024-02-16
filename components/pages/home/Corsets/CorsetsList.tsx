'use client';
import { ProductCard } from '@/components/common/ProductCard/ProductCard';
import { productsAPI } from '@/services/productsAPI';
import { corsetsDto } from '@/types/corsetsDto';
import { corsetAttributes } from '@/types/сorsetAttributes';
import { AxiosResponse } from 'axios';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useMedia } from 'react-use';
interface CorsetsProps {
  locale: string;
}
const IS_TABLET = '(min-width: 768px)';
const IS_DESCTOP = '(min-width: 1440px)';

export const CorsetsList: FC<CorsetsProps> = ({ locale }) => {
  const { t } = useTranslation();
  const [dataCorsets, setDataCorsets] =
    useState<AxiosResponse<corsetsDto> | null>(null);
  const isTablet = useMedia(IS_TABLET, false);
  const isDesctop = useMedia(IS_DESCTOP, false);
  useEffect(() => {
    const getData = async () => {
      const data = await productsAPI.getCorsets(
        locale,
        isTablet && !isDesctop ? 2 : 3,
      );
      setDataCorsets(data);
    };
    getData();
  }, [t, locale, isTablet, isDesctop]);
  return (
    <ul className="mb-6 flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-[68px]">
      {dataCorsets &&
        dataCorsets.data.data.map(
          ({
            id,
            attributes,
          }: {
            id: number;
            attributes: corsetAttributes;
          }) => (
            <ProductCard
              key={id}
              id={id}
              attributes={attributes}
              locale={locale}
              category={'corsets'}
            />
          ),
        )}
    </ul>
  );
};
