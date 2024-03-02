import { GlobalContext } from '@/app/[locale]/ContextWrapper';
import { IconButton } from '@/components/common/button/IconButton';
import { shoppingCardService } from '@/services/shoppingCardService';
import { usePathname } from 'next/navigation';
import { FC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { OrderBlock } from './OrderBlock/OrderBlock';
import { ShoppingList } from './ShoppingList/ShoppingList';

type ShoppingCartProps = {
  locale: string;
};

type ProductData = {
  data: {
    data: {
      attributes: {
        price_uk: number;
        price_en: number;
      };
    };
  };
};
export const ShoppingCart: FC<ShoppingCartProps> = ({ locale }) => {
  const [allProduct, setAllProduct] = useState(0);
  const { indicatorLS } = useContext(GlobalContext);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const [price, setPrice] = useState(0);

  const totalPrice = (dataCard: ProductData[], locale: string) => {
    const allPrice = dataCard.reduce(
      (
        accumulator: number,
        {
          data: {
            data: { attributes },
          },
        },
      ) => {
        const price =
          locale === 'uk' ? attributes.price_uk : attributes.price_en;
        return accumulator + price;
      },
      0,
    );
    setPrice(allPrice);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  const classes = isOpen
    ? 'translate-x-[100%] md:translate-x-[-480px] opacity-100'
    : 'md:translate-x-[0] opacity-0';

  useEffect(() => {
    const { shirts, corsets } = shoppingCardService.getProducts();
    setAllProduct(shirts.length + corsets.length);
  }, [indicatorLS]);

  return (
    <>
      <button
        className="group order-3 ml-4 flex items-center md:ml-0"
        onClick={() => setIsOpen(true)}
        aria-label="open shopping card"
      >
        <span className="linear mr-[-2px] flex h-[14px] w-[14px] items-center justify-center rounded-full bg-blackColor text-[11px] font-extrabold uppercase text-whiteColor transition-colors duration-300 group-hover:bg-activeColor">
          {allProduct}
        </span>
        <svg className="linear h-[24px] w-[24px] stroke-blackColor transition-colors duration-300 group-hover:stroke-activeColor	">
          <use href="/image/icons.svg#icon-shopping-cart"></use>
        </svg>
      </button>
      {isOpen && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          className={`bg-backdropColor fixed left-0 top-0 block h-[100%] w-[100%]`}
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={`${classes} fixed left-[-100%] top-0 z-[100] flex h-[100%] w-[100%] flex-col bg-whiteColor pt-8 transition md:left-auto md:right-[-480px] md:w-[480px]`}
      >
        <div className="mb-6 flex items-center justify-between pl-9 pr-[26px] md:mb-8 lg:mb-16">
          <IconButton
            className=""
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="open shopping card"
          >
            <svg className="linear h-[24px] w-[24px] stroke-blackColor transition-colors duration-300 group-hover:stroke-activeColor	">
              <use href="/image/icons.svg#icon-x"></use>
            </svg>
          </IconButton>
          <p className="text-xl font-medium uppercase tracking-[0.04em] md:text-2xl">
            {t('bag')}
          </p>
        </div>
        <ShoppingList locale={locale} totalPrice={totalPrice} />
        <OrderBlock price={price} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};
