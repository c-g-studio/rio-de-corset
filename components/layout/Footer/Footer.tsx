import { Navbar } from '@/components/common/navigation/Navbar';
import { FC } from 'react';

export const Footer: FC = ({ ...props }) => {
  return (
    <footer className="py-4" {...props}>
      <Navbar classes="hidden md:flex md:w-auto md:border-none md:bg-transparent md:py-0 md:shadow-none gap-5"/>
      <div className="container">
        <p className="text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} - Next create app
        </p>
      </div>
    </footer>
  );
};
