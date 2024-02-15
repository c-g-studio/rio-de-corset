'use client';
import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { shoppingCardService } from '@/services/shoppingCardService';
import { corsetAttributes } from '@/types/сorsetAttributes';

import s from './styles.module.css';

export const ProductCard: FC<{
  id: number;
  attributes: corsetAttributes;
  locale: string;
  category: string;
}> = ({ id, attributes, locale, category }) => {
  const [isAdded, setIsAdded] = useState(
    shoppingCardService.isProductAdded(id, category),
  );

  const isAddedToggle = () => {
    setIsAdded(() => !isAdded);
  };

  const preview = attributes.preview.data.attributes.url;
  const name = locale === 'uk' ? attributes.name_uk : attributes.name_en;
  const price = locale === 'uk' ? attributes.price_uk : attributes.price_en;
  const size_abbr = attributes.size.data.attributes.size_abbr;
  const currency = locale === 'uk' ? '₴' : '$';

  return (
    <li
      key={id}
      className={`${s.productCard} relative md:w-[328px] lg:w-[392px]`}
    >
      <Link
        href={`/${category}/${id}`}
        className={`${s.shoppingCartHover} group block w-full bg-activeCardColor p-2 transition-colors duration-300 ease-in md:bg-whiteColor md:hover:bg-activeCardColor md:focus:bg-activeCardColor`}
      >
        <div className="mb-4 flex h-[320px] items-center justify-center overflow-hidden bg-whiteColor md:h-[400px]">
          <Image
            src={'http://localhost:1337' + preview}
            width={312}
            height={320}
            alt={name}
            className="lg:w-[376px]"
          />
        </div>
        <div className="mb-4 flex items-center justify-between ">
          <div className="tracing-[.04em] font-medium uppercase md:text-xl lg:text-2xl">
            <h3 className="mb-1">{name}</h3>
            <span className="flex items-center gap-2 text-sm font-semibold md:text-lg lg:text-xl">
              <span>{`(${size_abbr})`}</span>
              <span>{`${price} ${currency}`}</span>
            </span>
          </div>
        </div>
      </Link>
      <button
        type="button"
        className={`h-7 pl-3 pr-3 ${s.cartButton} group  absolute bottom-8 right-0 z-10 md:bottom-9 lg:bottom-12`}
        onClick={() => {
          shoppingCardService.addProducts(id, category);
          isAddedToggle();
        }}
      >
        <svg
          className={`${
            isAdded
              ? '  stroke-activeColor'
              : '  stroke-blackColor hover:stroke-activeColor  md:stroke-whiteColor  md:group-hover:stroke-activeColor'
          } h-7 w-7 fill-transparent transition-colors duration-300  ease-in   md:h-8 md:w-8  lg:h-10 lg:w-10`}
        >
          <use href="/image/icons.svg#icon-shopping-cart"></use>
        </svg>
      </button>
    </li>
  );
};
