'use client';
import { ProductCard } from '@/components/common/ProductCard/ProductCard';
import { corsetAttributes } from '@/types/сorsetAttributes';
import { useMedia } from 'react-use';
import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { corsetsDto } from '@/types/corsetsDto';

type AsyncFunction<T> = (locale: string, pageSize: number) => Promise<T>;

export const ProductList = ({
  locale,
  getProducts,
  category,
}: {
  locale: string;
  getProducts: AsyncFunction<AxiosResponse>;
  category: string;
}) => {
  const [response, setResponse] = useState<AxiosResponse<corsetsDto> | null>(
    null,
  );

  const isDesktop = useMedia('(min-width: 1440px)', false);

  useEffect(() => {
    (async () => {
      const data = await getProducts(locale, isDesktop ? 12 : 6);
      setResponse(data);
    })();
  }, [locale, isDesktop, getProducts]);

  return (
    <ul className="flex flex-col flex-wrap gap-4 md:flex-row md:gap-8 lg:gap-[68px]">
      {response &&
        response.data.data.map(
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
              category={category}
            />
          ),
        )}
    </ul>
  );
};
