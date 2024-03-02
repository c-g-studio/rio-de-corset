'use  client';
import { ContextType, GlobalContext } from '@/app/[locale]/ContextWrapper';
import { shoppingCardService } from '@/services/shoppingCardService';
import { corsetAttributes } from '@/types/сorsetAttributes';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useContext, useState } from 'react';

import s from './styles.module.css';

type ProductCardProps = {
  id: number;
  attributes: corsetAttributes;
  locale: string;
  category: string;
};

export const ProductCard: FC<ProductCardProps> = ({
  id,
  attributes,
  locale,
  category,
}) => {
  const [isAdded, setIsAdded] = useState(
    shoppingCardService.isProductAdded(id, category),
  );

  const isAddedToggle = () => setIsAdded(() => !isAdded);
  const { setIndicatorLS } = useContext<ContextType>(GlobalContext);

  const preview = attributes.preview.data.attributes.url;
  // const preview = attributes.preview.data.attributes.formats.small.url;

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
        href={`/${category}/${id}?name=${name}`}
        className={`${s.shoppingCartHover} group block w-full bg-activeCardColor p-2 transition-colors duration-300 ease-in lg:bg-whiteColor lg:hover:bg-activeCardColor lg:focus:bg-activeCardColor`}
      >
        <div className="mb-4 flex h-[320px] items-center justify-center overflow-hidden bg-whiteColor md:h-[400px]">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + preview}
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
          setIndicatorLS((previousState: boolean): boolean => !previousState);
          isAddedToggle();
        }}
        aria-label="add product to shopping card"
      >
        <svg
          className={`${
            isAdded
              ? `stroke-activeColor ${s.icon} ${s.iconActive}`
              : `stroke-blackColor ${s.icon} hover:stroke-activeColor  md:group-hover:stroke-activeColor  lg:stroke-whiteColor`
          } h-7 w-7 fill-transparent transition-colors duration-300  ease-in   md:h-8 md:w-8  lg:h-10 lg:w-10`}
        >
          <use href="/image/icons.svg#icon-shopping-cart"></use>
        </svg>
      </button>
    </li>
  );
};
