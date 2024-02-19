import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const introcondblack = localFont({
  src: [
    {
      path: '/fonts/IntroDemoCond-BlackCAPS.otf',
      weight: '900',
    },
    {
      path: '/fonts/IntroDemoCond-LightCAPS.otf',
      weight: '300',
    },
  ],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});
