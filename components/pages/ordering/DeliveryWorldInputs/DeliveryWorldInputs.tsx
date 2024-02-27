import { Input } from '@/components/common/formElements/form/Input';
import { Label } from '@/components/common/formElements/form/Label';
import { FC } from 'react';
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface Props {
  register: UseFormRegister<FieldValues>; // Замените тип any на тип, который соответствует UseFormRegister
  errors: FieldErrors<{
    country: string;
    city: string;
    index: string;
    address: string;
  }>; // Замените тип any на тип, который соответствует FieldErrors
}

const errorInputStyle = 'border-notValidBorder bg-notValidBgc';

export const DeliveryWorldInputs: FC<Props> = ({ register, errors }) => {
  const { t } = useTranslation();
  return (
    <>
      <Label labelText={t('country')} className="mb-4 flex flex-col uppercase">
        <Input
          {...register('country')}
          error={errors.country?.message}
          placeholder={t('countryPlaceholder')}
          className={`${errors.country ? errorInputStyle : ''}`}
        />
      </Label>
      <Label labelText={t('city')} className="mb-4 flex flex-col uppercase">
        <Input
          {...register('city')}
          error={errors.city?.message}
          placeholder={t('cityPlaceholder')}
          className={`${errors.city ? errorInputStyle : ''}`}
        />
      </Label>
      <Label labelText={t('index')} className="mb-4 flex flex-col uppercase">
        <Input
          {...register('index')}
          error={errors.index?.message}
          placeholder={t('indexPlaceHolder')}
          className={`${errors.index ? errorInputStyle : ''}`}
        />
      </Label>
      <Label labelText={t('address')} className="mb-4 flex flex-col uppercase">
        <Input
          {...register('address')}
          error={errors.address?.message}
          placeholder={t('addressPlaceholder')}
          className={`${errors.address ? errorInputStyle : ''}`}
        />
      </Label>
    </>
  );
};
