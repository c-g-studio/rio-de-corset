'use client';
import { FC, ReactNode, createContext, useState } from 'react';
export const GlobalContext = createContext<ContextType>({
  indicatorLS: false,
  setIndicatorLS: () => {},
});

export interface ContextType {
  indicatorLS: boolean;
  setIndicatorLS: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [indicatorLS, setIndicatorLS] = useState(false);
  return (
    <GlobalContext.Provider value={{ indicatorLS, setIndicatorLS }}>
      {children}
    </GlobalContext.Provider>
  );
};
