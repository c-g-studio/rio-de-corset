'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { schema } from '@/utils/validationSchema';
import { Button } from '../button/Button';
import { Checkbox } from '../formElements/form/Checkbox';
import { Input } from '../formElements/form/Input';
import { Label } from '../formElements/form/Label';
import { TextArea } from '../formElements/form/TextArea';

type Inputs = Record<string, object>;

const onSubmit: SubmitHandler<Inputs> = data => console.info(data);

export const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  return (
    <form className="mx-auto w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full grid-cols-1 gap-6">
        <Label labelText={'Full name'} className="text-left">
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

        <Label labelText={'Details'} className="text-left">
          <TextArea
            {...register('details')}
            className="resize-none"
            rows={5}
            error={errors.details?.message}
            placeholder="Enter your message here..."
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
        </div>

        <Button
          className="bg-indigo-500 text-white hover:bg-indigo-600 rounded-md px-5 py-3 font-bold transition duration-300 ease-in-out"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
