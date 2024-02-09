import { FC } from 'react';

import { classnames } from '@/utils/classnames';

import { ButtonProps } from '../Button';

export const IconButton: FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={classnames(
        'inline-flex items-center justify-center',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
