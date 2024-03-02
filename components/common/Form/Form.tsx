'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useEffect, useState, useMemo } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  validationUkraineOrderSchema,
  validationWorldOrderSchema,
} from '@/utils/validationSchema';
import { IOrderDto, ordersAPI, OrderProps } from '@/services/ordersAPI';
import { Button } from '../button/Button';
import { Input } from '../formElements/form/Input';
import { Label } from '../formElements/form/Label';
import { DeliveryUkraineInputs } from '@/components/pages/ordering/DeliveryUkraineInputs/DeliveryUkraineInputs';
import { DeliveryWorldInputs } from '@/components/pages/ordering/DeliveryWorldInputs/DeliveryWorldInputs';

import { FormProps, Inputs } from './Form.types';
import { ErrorModal } from '@/components/common/Modals/ErrorModal/ErrorModal';
import { SuccessModal } from '@/components/common/Modals/SuccessModal/SuccessModal';

const ukraineOrderType = {
  uk: 'по Україні',
  en: 'Delivery in Ukraine',
};

const errorInputStyle = 'border-notValidBorder bg-notValidBgc';

export const Form: FC<FormProps> = ({ totalPrice, products }) => {
  const { t } = useTranslation();
  const people = [{ name: t('novaPost') }, { name: t('ukrPost') }];
  const [orderType, setOrderType] = useState(ukraineOrderType.uk);
  const [selected, setSelected] = useState(people[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const isUkraineDelivery =
    orderType === ukraineOrderType.uk || orderType === ukraineOrderType.en;

  const modalSuccessToggler = () => {
    setIsOpen(!isOpen);
  };

  const modalErrorToggler = () => {
    setIsError(!isOpen);
  };

  const {
    watch,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    resolver: zodResolver(
      isUkraineDelivery
        ? validationUkraineOrderSchema
        : validationWorldOrderSchema,
    ),
  });

  const type = getValues('orderType');

  useEffect(() => {
    if (typeof type === 'string') {
      setOrderType(type);
    }
  }, [type]);

  const onSubmit = async (data: Partial<OrderProps>): Promise<void> => {
    try {
      const newOrder = {
        ...data,
        total_price: totalPrice.toString(),
        order_info: products,
        delivery_method: selected.name,
      } as OrderProps;

      const request: IOrderDto = {
        data: newOrder,
      };

      if (isUkraineDelivery) {
        await ordersAPI.addUkraineOrder(request);
        modalSuccessToggler();
        return;
      }

      await ordersAPI.addWorldOrder(request);
      modalSuccessToggler();
    } catch {
      setIsError(!isError);
    }
  };

  const renderDeliveredInputs = useMemo(() => {
    if (isUkraineDelivery) {
      return (
        <DeliveryUkraineInputs
          register={register}
          errors={errors}
          selected={selected}
          setSelected={setSelected}
        />
      );
    }

    return <DeliveryWorldInputs register={register} errors={errors} />;
  }, [isUkraineDelivery, errors, register, selected]);

  watch('orderType');

  return (
    <>
      <form
        className=" mb-[22px] w-full max-w-md md:max-w-full lg:m-0 lg:w-[700px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-8 lg:pl-1">
          <h2 className="mb-2 font-semibold uppercase tracking-[.04em] ">
            {t('country')}
          </h2>

          <Label
            labelText={t('inUkraine')}
            className="flex flex-row-reverse items-center justify-end gap-4 uppercase"
          >
            <input
              {...register('orderType')}
              type="radio"
              value={t('inUkraine')}
              defaultChecked
              className="border-2  border-blackColor bg-center text-[14px]  font-medium uppercase tracking-[.04em] transition-all ease-linear checked:border-2 checked:border-blackColor checked:bg-checkedRadio  checked:bg-[length:8px_8px] checked:text-transparent checked:ring-transparent hover:border-activeColor checked:hover:border-activeColor focus:bg-checkedRadio focus:bg-[length:8px_8px] focus:text-transparent focus:ring-transparent checked:focus:border-blackColor"
            />
          </Label>

          <Label
            labelText={t('worldwide')}
            className="flex flex-row-reverse items-center justify-end gap-4 uppercase "
          >
            <input
              {...register('orderType')}
              type="radio"
              value={t('worldwide')}
              className="border-2  border-blackColor bg-center text-[14px]  font-medium uppercase tracking-[.04em] transition-all ease-linear checked:border-2 checked:border-blackColor checked:bg-checkedRadio  checked:bg-[length:8px_8px] checked:text-transparent checked:ring-transparent hover:border-activeColor checked:hover:border-activeColor focus:bg-checkedRadio focus:bg-[length:8px_8px] focus:text-transparent focus:ring-transparent checked:focus:border-blackColor"
            />
          </Label>
        </div>

        <div className="md:flex md:gap-4">
          <div className="mb-6 md:w-[50%]">
            <h2 className="mb-4 text-xl font-semibold uppercase tracking-[.04em] text-blackColor md:mb-6">
              {t('personalData')}
            </h2>

            <Label
              labelText={t('name')}
              className=" mb-4 flex flex-col uppercase"
            >
              <Input
                {...register('name')}
                error={errors.name?.message}
                placeholder={t('namePlaceholder')}
                className={`${errors.name ? errorInputStyle : ''}`}
              />
            </Label>

            <Label
              labelText={t('e-mail')}
              className="mb-4 flex flex-col uppercase"
            >
              <Input
                {...register('email')}
                error={errors.email?.message}
                placeholder={t('e-mailPlaceholder')}
                className={`${errors.email ? errorInputStyle : ''}`}
              />
            </Label>

            <Label labelText={t('phone')} className="flex flex-col uppercase">
              <Input
                {...register('number')}
                error={errors.number?.message}
                placeholder={t('phonePlaceholder')}
                className={`${errors.number ? errorInputStyle : ''}`}
              />
            </Label>
          </div>

          <div className="mb-4 md:w-[50%] lg:mb-0">
            <h2 className="mb-4 text-xl font-semibold uppercase tracking-[.04em] text-blackColor md:mb-6">
              {t('deliveryTitle')}
            </h2>

            {renderDeliveredInputs}
          </div>
        </div>

        <Button
          className=" w-full border-[1px] border-solid border-blackColor py-[14px] font-medium uppercase tracking-[.04em] transition-all ease-linear hover:bg-blackColor hover:text-whiteColor active:bg-activeBtn active:text-whiteColor"
          type="submit"
        >
          {t('order')}
        </Button>
      </form>
      <SuccessModal isOpen={isOpen} modalToggler={modalSuccessToggler} />
      <ErrorModal isError={isError} modalToggler={modalErrorToggler} />
    </>
  );
};
