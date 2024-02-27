import React, { DetailedHTMLProps, ForwardedRef, forwardRef } from 'react';

import { classnames } from '@/utils/classnames';
import { ErrorMessage } from '../ErrorMessage';

export interface InputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  className?: string;
}

export const Input = forwardRef(
  (
    { error, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <>
        <input
          ref={ref}
          className={classnames(
            ' border-inputBorder px-4 py-3 text-[12px] font-medium  placeholder:text-[12px] placeholder:text-placeholderColor hover:border-blackColor focus:border-blackColor focus:ring-transparent md:text-sm md:placeholder:text-sm',

            {
              inputError: error,
            },
            className,
          )}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  },
);

Input.displayName = 'Input';
