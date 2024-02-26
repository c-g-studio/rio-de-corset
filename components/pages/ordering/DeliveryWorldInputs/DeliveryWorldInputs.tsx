import { Input } from '@/components/common/formElements/form/Input';
import { Label } from '@/components/common/formElements/form/Label';
import { FC } from 'react';
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface Props {
  register: UseFormRegister<FieldValues>; // Замените тип any на тип, который соответствует UseFormRegister
  errors: FieldErrors<{ email: string }>; // Замените тип any на тип, который соответствует FieldErrors
}

export const DeliveryWorldInputs: FC<Props> = ({ register, errors }) => {
  const { t } = useTranslation();
  return (
    <>
      <Label labelText={t('country')} className="mb-4 flex flex-col uppercase">
        <Input
          {...register('country')}
          error={errors.email?.message}
          placeholder={t('countryPlaceholder')}
        />
      </Label>
      <Label labelText={t('city')} className="mb-4 flex flex-col uppercase">
        <Input
          {...register('city')}
          error={errors.email?.message}
          placeholder={t('cityPlaceholder')}
        />
      </Label>
      <Label labelText={t('index')} className="mb-4 flex flex-col uppercase">
        <Input
          {...register('index')}
          error={errors.email?.message}
          placeholder={t('indexPlaceHolder')}
        />
      </Label>
      <Label labelText={t('address')} className="mb-4 flex flex-col uppercase">
        <Input
          {...register('address')}
          error={errors.email?.message}
          placeholder={t('addressPlaceholder')}
        />
      </Label>
    </>
  );
};
