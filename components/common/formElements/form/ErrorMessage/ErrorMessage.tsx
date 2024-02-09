import React, { FC } from 'react';

export const ErrorMessage: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <span
      className="text-rose-500 absolute -bottom-5 left-0 text-xs"
      role="alert"
    >
      {children}
    </span>
  );
};
