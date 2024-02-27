import React, { FC } from 'react';

import { classnames } from '@/utils/classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  labelText?: string;
};

export const Label: FC<Props> = ({ labelText, children, className }) => {
  return (
    <label className={classnames('relative', className)}>
      {labelText && (
        <span className="mb-1 text-sm font-medium tracking-[.04em] text-blackColor md:text-base ">
          {labelText}
        </span>
      )}
      {children}
    </label>
  );
};
