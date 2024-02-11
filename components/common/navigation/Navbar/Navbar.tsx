'use client';
import { FC, ReactNode } from 'react';

type NavbarProps = {
  children: ReactNode;
  classes?: string[] | '';
};
export const Navbar: FC<NavbarProps> = ({ children }) => {
  return <nav>{children}</nav>;
};
