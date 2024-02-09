import { FC } from 'react';

import { menuItems } from '@/components/common/navigation/Navbar/Navbar.constants';
import {
  NavbarLink,
  NavbarLinkProps,
} from '@/components/common/navigation/NavbarLink';

export const MobileMenu: FC = () => {
  return (
    <nav className="bg-white absolute left-0 top-full w-full border py-2 shadow-sm md:hidden">
      {menuItems.map((item: NavbarLinkProps) => (
        <NavbarLink
          key={item.title.toLowerCase()}
          href={item.href}
          title={item.title}
        />
      ))}
    </nav>
  );
};
