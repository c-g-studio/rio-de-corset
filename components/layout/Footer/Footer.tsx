import { NavList } from '@/components/common/navigation/NavList/NavList';
import { FC } from 'react';

export const Footer: FC = ({ ...props }) => {
  return (
    <footer className="py-4" {...props}>
      <NavList classes="hidden md:flex md:w-auto md:border-none md:bg-transparent md:py-0 md:shadow-none gap-5" />
      <div className="container">
        <p className="text-gray-600 text-center text-sm">
          &copy; {new Date().getFullYear()} - Next create app
        </p>
      </div>
    </footer>
  );
};
