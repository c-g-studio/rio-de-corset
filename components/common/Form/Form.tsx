'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
// import { schema } from '@/utils/validationSchema';
import { Button } from '../button/Button';
// import { Checkbox } from '../formElements/form/Checkbox';
import { Input } from '../formElements/form/Input';
import { Label } from '../formElements/form/Label';

type Inputs = Record<string, object>;

const onSubmit: SubmitHandler<Inputs> = data => console.info(data);

export const Form: FC = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    criteriaMode: 'all',
    mode: 'onChange',
    // resolver: zodResolver(schema),
  });

  const { t } = useTranslation();
  watch(['orderType']);
  return (
    <form
      className="mx-auto mb-[22px] w-full max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-8">
        <h3 className="mb-2 uppercase">{t('country')}</h3>
        <Label
          labelText={t('inUkraine')}
          className="flex flex-row-reverse items-center justify-end gap-4 uppercase"
        >
          <input
            {...register('orderType')}
            type="radio"
            value={t('inUkraine')}
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
          />
        </Label>
      </div>
      <div className="mb-6">
        <h3 className="mb-4 uppercase">{t('personalData')}</h3>
        <Label labelText={t('name')} className="flex flex-col uppercase">
          <Input
            {...register('name')}
            error={errors.email?.message}
            placeholder={t('namePlaceholder')}
          />
        </Label>
        <Label labelText={t('e-mail')} className="flex flex-col uppercase">
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
      <div className="mb-4">
        <h3 className="mb-4 uppercase">{t('deliveryTitle')}</h3>
        <Label labelText={t('city')} className="flex flex-col uppercase">
          <Input
            {...register('city')}
            error={errors.email?.message}
            placeholder={t('cityPlaceholder')}
          />
        </Label>
        <Label
          labelText={t('deliveryMethod')}
          className="flex flex-col uppercase"
        >
          <select {...register('delivery_method')}>
            <option value={t('novaPost')}>{t('novaPost')}</option>
            <option value={t('ukrPost')}>{t('ukrPost')}</option>
          </select>
        </Label>
        <Label labelText={t('postNumber')} className="flex flex-col uppercase">
          <Input
            {...register('department_number')}
            error={errors.email?.message}
            placeholder={t('postPlaceholder')}
          />
        </Label>
      </div>
      {/* <Label labelText={'Full name'} className="text-left">
          <Input
            {...register('name')}
            error={errors.name?.message}
            placeholder="John Doe"
          />
        </Label>

        <Label labelText={'Email address'} className="text-left">
          <Input
            {...register('email')}
            error={errors.email?.message}
            placeholder="john@example.com"
          />
        </Label>



        <div className="text-left">
          <Label className="inline-flex cursor-pointer items-center">
            <Checkbox
              {...register('terms')}
              error={errors.terms?.message}
              labelText={'I agree to the terms and conditions'}
            />
          </Label>
        </div>*/}

      <Button
        className="bg-indigo-500 text-white hover:bg-indigo-600 rounded-md px-5 py-3 font-bold transition duration-300 ease-in-out"
        type="submit"
      >
        {t('order')}
      </Button>
    </form>
  );
};
