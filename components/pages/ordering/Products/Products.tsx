'use client';

import { FC, useEffect, useState } from 'react';
import { shoppingCardService } from '@/services/shoppingCardService';
import { productsAPI } from '@/services/productsAPI';
import Image from 'next/image';
import { IconButton } from '@/components/common/button/IconButton';
import { TotalPrice } from '../TotalPrice/TotalPrice';

export type corsetAttributes = {
  name_uk: string;
  size_text_uk: string;
  description_uk: string;
  price_uk: number;
  name_en: string;
  size_text_en: string;
  description_en: string;
  price_en: number;
  preview: {
    data: {
      attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        url: string;
      };
    };
  };
  slides: {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        url: string;
      };
    }[];
  };
  size: {
    data: {
      id: number;
      attributes: {
        size_abbr: string;
      };
    };
  };
  category: {
    data: {
      id: number;
      attributes: {
        category_name: string;
      };
    };
  };
};

type ProductsProps = {
  locale: 'en' | 'uk';
};

type ProductState = {
  category: string;
  id: number;
  name: string;
  price: number;
  size: string;
  preview: string;
};

const createProductArray =
  (locale: 'en' | 'uk', category: string) =>
  (item: { data: { data: { id: number; attributes: corsetAttributes } } }) => ({
    category,
    id: item.data.data.id,
    name: item.data.data.attributes[`name_${locale}`],
    price: item.data.data.attributes[`price_${locale}`],
    size: item.data.data.attributes.size.data.attributes.size_abbr,
    preview: item.data.data.attributes.preview.data.attributes.url,
  });

export const Products: FC<ProductsProps> = ({ locale }) => {
  const [products, setProducts] = useState<ProductState[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    (async () => {
      const orders = shoppingCardService.getProducts();
      const corsets = await Promise.all(
        orders.corsets.map((id: number) => productsAPI.getCorsetById(id, 'uk')),
      );
      const shirts = await Promise.all(
        orders.shirts.map((id: number) => productsAPI.getShirtById(id, 'uk')),
      );
      const corsetsArray = corsets.map(createProductArray(locale, 'corsets'));
      const shirtsArray = shirts.map(createProductArray(locale, 'shirts'));
      const productsArray = [...corsetsArray, ...shirtsArray];

      setProducts(productsArray);
    })();
  }, [locale]);

  useEffect(() => {
    const total = products.reduce(
      (accumulator, item) => (accumulator += item.price),
      0,
    );
    setTotalPrice(total);
  }, [products]);

  const deleteProduct = (category: string, id: number, index: number) => {
    shoppingCardService.deleteProducts(id, category);
    setProducts(previousState =>
      previousState.filter((item, index_) => index_ !== index),
    );
  };

  return (
    <div className="bg-greyColor overflow-y-scroll lg:w-[508px]">
      <ul className="mb-24 flex flex-col px-3 pt-4 md:gap-4 md:px-10 md:pt-6">
        {products.map(({ id, category, name, size, price, preview }, index) => {
          return (
            <li
              key={index}
              className="flex items-center gap-6 border-b-[1px] border-b-orderMenuBgc md:gap-12"
            >
              {/* <div className="flex h-[100px]  w-[103px] items-center justify-center overflow-hidden"> */}
              <Image
                src={`http://localhost:1337${preview}`}
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
      <TotalPrice total={totalPrice} locale={locale} />
    </div>
  );
};
