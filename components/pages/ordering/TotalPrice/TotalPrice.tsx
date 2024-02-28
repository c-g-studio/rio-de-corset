import { FC } from 'react';

type TotalPriceProps = {
  total: string;
};

export const TotalPrice: FC<TotalPriceProps> = ({ total }) => {
  return (
    <p className="flex justify-between  bg-blackColor px-8 py-3 uppercase text-activeColor lg:absolute lg:bottom-0 lg:right-0 lg:w-[508px]">
      <span>Total:</span>
      <span>{total}</span>
    </p>
  );
};
