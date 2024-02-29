import { GlobalContext } from '@/app/[locale]/ContextWrapper';
import { productsAPI } from '@/services/productsAPI';
import { shoppingCardService } from '@/services/shoppingCardService';
import { FC, useContext, useEffect, useState } from 'react';
import { ShoppingCard } from './ShoppingCard/ShoppingCard';
const { getProducts, deleteProducts } = shoppingCardService;

interface Product {
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
}

type Props = {
  locale: string;
  totalPrice: (dataCard: Product[], locale: string) => void;
};

export const ShoppingList: FC<Props> = ({ locale, totalPrice }) => {
  const [corsetsCardData, setCorsetsCardData] = useState<Product[]>([]);
  const [shirtsCardData, setShirtsCardData] = useState<Product[]>([]);
  const { indicatorLS, setIndicatorLS } = useContext(GlobalContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const { corsets, shirts } = getProducts();
      const corsetsPromises = corsets.map((id: number) =>
        productsAPI.getCorsetById(id, locale),
      );
      const shirtsPromises = shirts.map((id: number) =>
        productsAPI.getShirtById(id, locale),
      );

      try {
        const corsetsData = await Promise.all(corsetsPromises);
        const shirtsData = await Promise.all(shirtsPromises);

        totalPrice([...corsetsData, ...shirtsData], locale);
        setCorsetsCardData(corsetsData);
        setShirtsCardData(shirtsData);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchProducts();
  }, [indicatorLS, locale, totalPrice]);

  const removeFromCorsets = (productId: number) => {
    const updatedCardData = corsetsCardData.filter(
      item => item.data.data.id !== productId,
    );
    deleteProducts(productId, 'corsets');
    setCorsetsCardData(updatedCardData);
    setIndicatorLS(previousState => !previousState);
  };
  const removeFromShirts = (productId: number) => {
    const updatedShirtsData = shirtsCardData.filter(item => {
      return item.data.data.id !== productId;
    });
    deleteProducts(productId, 'shirts');
    setShirtsCardData(updatedShirtsData);
    setIndicatorLS(previousState => !previousState);
  };

  return (
    <div className="mb-[118px] overflow-y-auto pl-4 md:mb-[108px] lg:mb-[70px]">
      <ul className="flex flex-col gap-2 ">
        <ShoppingCard
          dataArr={corsetsCardData}
          locale={locale}
          removeElement={removeFromCorsets}
        />
        <ShoppingCard
          dataArr={shirtsCardData}
          locale={locale}
          removeElement={removeFromShirts}
        />
      </ul>
    </div>
  );
};
