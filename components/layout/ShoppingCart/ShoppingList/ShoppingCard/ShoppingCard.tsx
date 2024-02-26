import { IconButton } from '@/components/common/button/IconButton';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type ProductData = {
  data: {
    data: {
      id: number;
      attributes: {
        preview: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        name_uk: string;
        name_en: string;
        price_uk: number;
        price_en: number;
        size: {
          data: {
            attributes: {
              size_abbr: string;
            };
          };
        };
      };
    };
  };
};

type ShoppingCardProps = {
  dataArr: ProductData[];
  locale: string;
  removeElement: (id: number) => void;
};

export const ShoppingCard: FC<ShoppingCardProps> = ({
  dataArr,
  locale,
  removeElement,
}) => {
  const { t } = useTranslation();
  return (
    <>
      {dataArr.map(
        ({
          data: {
            data: { id, attributes },
          },
        }) => {
          const preview = attributes.preview.data.attributes.url;
          const name =
            locale === 'uk' ? attributes.name_uk : attributes.name_en;
          const price =
            locale === 'uk' ? attributes.price_uk : attributes.price_en;
          const size_abbr = attributes.size.data.attributes.size_abbr;

          return (
            <li key={id} className="relative">
              <Link href={`/corsets/${id}`} className="flex gap-3 md:gap-4">
                <Image
                  src={'http://localhost:1337' + preview}
                  width={312}
                  height={320}
                  alt={`${name}`}
                  className="h-[107px] w-[107px] object-cover lg:h-[160px] lg:w-[160px]"
                />
                <div>
                  <h3 className="mb-[3px] text-base font-medium uppercase tracking-[0.04em] md:mb-1">
                    {name}
                  </h3>
                  <p className="mb-[6px] text-sm font-semibold md:mb-1">
                    ({size_abbr})
                  </p>
                  <p className="text-sm font-semibold">
                    <span className="mr-[2px]">{price}</span>
                    {t('currency')}
                  </p>
                </div>
              </Link>
              <IconButton
                className="absolute right-0 top-0 p-2"
                type="button"
                onClick={() => removeElement(id)}
              >
                <svg className="linear h-[24px] w-[24px] stroke-blackColor transition-colors duration-300 group-hover:stroke-activeColor">
                  <use href="/image/icons.svg#icon-x"></use>
                </svg>
              </IconButton>
            </li>
          );
        },
      )}
    </>
  );
};
