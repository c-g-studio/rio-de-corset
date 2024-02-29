'use client';

import { FC } from 'react';
import Image from 'next/image';
import { IconButton } from '@/components/common/button/IconButton';

type ProductState = {
  category: string;
  id: number;
  name: string;
  price: number;
  size: string;
  preview: string;
};

interface DeleteProductFunction {
  (category: string, id: number, index: number): void;
}

type ProductsProps = {
  locale: 'en' | 'uk';
  products: ProductState[];
  deleteProduct: DeleteProductFunction;
};

export const Products: FC<ProductsProps> = ({
  locale,
  products,
  deleteProduct,
}) => {
  return (
    <div className="bg-greyColor lg:w-[508px] lg:overflow-y-scroll">
      <ul className="flex flex-col px-3 pt-4 md:gap-4 md:px-10 md:pt-6 lg:mb-24">
        {products.map(({ id, category, name, size, price, preview }, index) => {
          return (
            <li
              key={index}
              className="flex items-center gap-6 border-b-[1px] border-b-orderMenuBgc md:gap-12"
            >
              {/* <div className="flex h-[100px]  w-[103px] items-center justify-center overflow-hidden"> */}
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_PORT}${preview}`}
                width={136}
                height={132}
                alt={name}
                className="h-[132px] w-[136px] shrink-0 object-cover"
              />
              {/* </div> */}
              <div className="flex w-full items-start justify-between">
                <div>
                  <h3 className="mb-1 text-[17px] font-medium uppercase tracking-[.04em]">
                    {name}
                  </h3>
                  <p className="mb-1 text-sm font-semibold">({size})</p>
                  <p className="text-sm font-semibold">
                    {price} {locale === 'uk' ? ' ₴' : '$'}
                  </p>
                </div>
                <IconButton
                  className=""
                  type="button"
                  onClick={() => deleteProduct(category, id, index)}
                >
                  <svg className="linear h-[24px] w-[24px] stroke-blackColor transition-colors duration-300 group-hover:stroke-activeColor	">
                    <use href="/image/icons.svg#icon-x"></use>
                  </svg>
                </IconButton>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
