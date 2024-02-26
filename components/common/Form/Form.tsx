'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useEffect, useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
// import { schema } from '@/utils/validationSchema';
import { Button } from '../button/Button';
import { Input } from '../formElements/form/Input';
import { Label } from '../formElements/form/Label';
import { DeliveryUkraineInputs } from '@/components/pages/ordering/DeliveryUkraineInputs/DeliveryUkraineInputs';
import { DeliveryWorldInputs } from '@/components/pages/ordering/DeliveryWorldInputs/DeliveryWorldInputs';

type Inputs = Record<string, object>;

const onSubmit: SubmitHandler<Inputs> = data => console.info(data);

export const Form: FC = () => {
  const {
    watch,
    register,
    handleSubmit,
    getValues,

    formState: { errors },
  } = useForm<Inputs>({
    criteriaMode: 'all',
    mode: 'onChange',
    // resolver: zodResolver(schema),
  });

  const [orderType, setOrderType] = useState('по Україні');
  const type = getValues('orderType');
  useEffect(() => {
    if (typeof type === 'string') {
      setOrderType(type);
    }
  }, [type]);

  const { t } = useTranslation();

  watch('orderType');

  return (
    <form
      className=" mb-[22px] w-full max-w-md md:max-w-full lg:m-0 lg:w-[700px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-8 lg:pl-1">
        <h3 className="mb-2 font-semibold uppercase tracking-[.04em] ">
          {t('country')}
        </h3>
        <Label
          labelText={t('inUkraine')}
          className="flex flex-row-reverse items-center justify-end gap-4 uppercase"
        >
          <input
            {...register('orderType')}
            type="radio"
            value={t('inUkraine')}
            defaultChecked
            className="text-[14px] font-medium uppercase tracking-[.04em] "
          />
        </Label>
        <Label
          labelText={t('worldwide')}
          className="flex flex-row-reverse items-center justify-end gap-4 uppercase"
        >
          <input
            {...register('orderType')}
            type="radio"
            value={t('worldwide')}
            className="text-[14px] font-medium uppercase tracking-[.04em] "
          />
        </Label>
      </div>
      <div className="md:flex md:gap-4">
        <div className="mb-6 md:w-[50%]">
          <h3 className="mb-4 text-xl font-semibold uppercase tracking-[.04em] text-blackColor md:mb-6">
            {t('personalData')}
          </h3>
          <Label labelText={t('name')} className="mb-4 flex flex-col uppercase">
            <Input
              {...register('name')}
              error={errors.email?.message}
              placeholder={t('namePlaceholder')}
            />
          </Label>
          <Label
            labelText={t('e-mail')}
            className="mb-4 flex flex-col uppercase"
          >
            <Input
              {...register('email')}
              error={errors.email?.message}
              placeholder={t('phonePlaceholder')}
            />
          </Label>
          <Label labelText={t('phone')} className="flex flex-col uppercase">
            <Input
              {...register('number')}
              error={errors.email?.message}
              placeholder={t('e-mailPlaceholder')}
            />
          </Label>
        </div>
        <div className="mb-4 md:w-[50%]">
          <h3 className="mb-4 text-xl font-semibold uppercase tracking-[.04em] text-blackColor md:mb-6">
            {t('deliveryTitle')}
          </h3>
          {orderType === 'по Україні' || orderType === 'Delivery in Ukraine' ? (
            <DeliveryUkraineInputs register={register} errors={errors} />
          ) : (
            <DeliveryWorldInputs register={register} errors={errors} />
          )}
        </div>
      </div>
      <Button
        className=" w-full border-[1px] border-solid border-blackColor py-[14px] font-medium uppercase tracking-[.04em] transition-all ease-linear hover:bg-blackColor hover:text-whiteColor active:bg-activeBtn active:text-whiteColor"
        type="submit"
      >
        {t('order')}
      </Button>
    </form>
  );
};
