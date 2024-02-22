'use client';
import { FC } from 'react';

import { ProductCard } from '@/components/common/ProductCard/ProductCard';
import { useProductList } from '@/hooks/useProductList';
import { useTranslation } from 'react-i18next';

type ProductListProps = {
  locale: string;
  category: string;
  requestType: 'shirts' | 'corsets';
};

export const ProductList: FC<ProductListProps> = ({
  locale,
  category,
  requestType,
}) => {
  const { response, buttonClickHandler, page, totalPage } = useProductList({
    locale,
    requestType,
  });

  const { t } = useTranslation();
  return (
    <>
      <ul className="mb-6 flex flex-col flex-wrap gap-4 md:flex-row md:gap-8 lg:gap-[68px]">
        {response &&
          response.map(({ id, attributes }) => (
            <ProductCard
              key={id}
              id={id}
              attributes={attributes}
              locale={locale}
              category={category}
            />
          ))}
      </ul>

      <span className="flex items-center">
        {page < totalPage && (
          <button
            className="text after:text-red-500 ml-auto mr-auto inline-flex flex-wrap text-center text-lg   after:inline-block after:h-[1px] after:w-full after:bg-blackColor after:content-['']"
            onClick={buttonClickHandler}
          >
            {t('learnMore')}
          </button>
        )}
      </span>
    </>
  );
};
