import { Input } from '@/components/common/formElements/form/Input';
import { Label } from '@/components/common/formElements/form/Label';
import { FC } from 'react';
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

interface Props {
  register: UseFormRegister<FieldValues>; // Замените тип any на тип, который соответствует UseFormRegister
  errors: FieldErrors<{ email: string }>; // Замените тип any на тип, который соответствует FieldErrors
}
export const DeliveryUkraineInputs: FC<Props> = ({ register, errors }) => {
  const { t } = useTranslation();
  return (
    <>
      <Label labelText={t('city')} className="mb-4 flex flex-col uppercase">
        <Input
          {...register('city')}
          error={errors.email?.message}
          placeholder={t('cityPlaceholder')}
        />
      </Label>
      <Label
        labelText={t('deliveryMethod')}
        className="mb-4 flex flex-col uppercase"
      >
        <select
          {...register('delivery_method')}
          className="px-4 py-3 text-[12px] font-medium tracking-[.04em] text-blackColor outline-none ring-transparent"
        >
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
    </>
  );
};
