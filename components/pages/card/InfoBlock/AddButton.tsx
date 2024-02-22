'use client';
import { shoppingCardService } from '@/services/shoppingCardService';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
const { addProducts, isProductAdded } = shoppingCardService;
type AddButtonProps = {
  id: number;
  category: string;
};

export const AddButton: FC<AddButtonProps> = ({ id, category }) => {
  const [isAdded, setIsAdded] = useState(isProductAdded(id, category));
  const isAddedToggle = () => setIsAdded(() => !isAdded);
  const { t } = useTranslation();
  return (
    <button
      type="button"
      onClick={() => {
        addProducts(id, category);
        isAddedToggle();
      }}
      id={`${id}`}
      className="mb-6 block w-full border py-[14px] text-base uppercase tracking-[0.08em] transition-colors hover:border-transparent hover:bg-activeColor hover:text-whiteColor focus:border-transparent focus:bg-activeColor focus:text-whiteColor active:border-transparent active:bg-activeColor active:text-whiteColor md:mb-8 md:text-lg lg:mb-10"
    >
      {isAdded ? t('delete') : t('addTo')}
    </button>
  );
};
