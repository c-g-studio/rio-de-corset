import React, { FC } from 'react';

export interface NavbarLinkProps {
  title: string;
  href: string;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ title, href }) => {
  return (
    <a
      href={href}
      className="text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm md:text-base"
    >
      {title}
    </a>
  );
};
