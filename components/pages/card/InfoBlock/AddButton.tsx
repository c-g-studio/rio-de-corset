'use client';
import { ContextType, GlobalContext } from '@/app/[locale]/ContextWrapper';
import { shoppingCardService } from '@/services/shoppingCardService';
import { FC, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
const { addProducts, isProductAdded } = shoppingCardService;
type AddButtonProps = {
  id: number;
  category: string;
};

export const AddButton: FC<AddButtonProps> = ({ id, category }) => {
  const { setIndicatorLS } = useContext<ContextType>(GlobalContext);
  const [isAdded, setIsAdded] = useState(isProductAdded(id, category));
  const isAddedToggle = () => setIsAdded(() => !isAdded);
  const { t } = useTranslation();
  return (
    <button
      type="button"
      onClick={() => {
        addProducts(id, category);
        setIndicatorLS((previousState: boolean): boolean => !previousState);
        isAddedToggle();
      }}
      id={`${id}`}
      className="mb-6 block w-full border py-[14px] text-base uppercase tracking-[0.08em] transition-colors hover:border-transparent hover:bg-activeColor hover:text-whiteColor focus:border-transparent focus:bg-activeColor focus:text-whiteColor active:border-transparent active:bg-activeColor active:text-whiteColor md:mb-8 md:text-lg lg:mb-10"
    >
      {isAdded ? t('delete') : t('addTo')}
    </button>
  );
};
