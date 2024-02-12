import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { сorsetAttributes } from '@/types/сorsetAttributes';

export const ProductCard: FC<{
  id: string;
  attributes: сorsetAttributes;
  locale: string;
}> = ({ id, attributes, locale }) => {
  const preview = attributes.preview.data.attributes.url;
  const name = locale === 'uk' ? attributes.name_uk : attributes.name_en;
  const price = locale === 'uk' ? attributes.price_uk : attributes.price_en;
  const size_abbr = attributes.size.data.attributes.size_abbr;

  return (
    <li key={id}>
      <Link href={`/corsets/${id}`}>
        <Image
          src={'http://localhost:1337' + preview}
          width={312}
          height={320}
          alt=""
        />
        <div>
          <div>
            <h3>{name}</h3>
            <span>
              <span>{size_abbr}</span>
              <span>{price}</span>
            </span>
          </div>
          <button type="button">
            <svg className="fill-transparent h-[24px] w-[24px] stroke-blackColor  transition-colors duration-300 ease-in group-hover:stroke-activeColor  ">
              <use href="/image/icons.svg#icon-shopping-cart"></use>
            </svg>
          </button>
        </div>
      </Link>
    </li>
  );
};
