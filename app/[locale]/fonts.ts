import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const introcondblack = localFont({
  src: [
    {
      path: '/fonts/introcondblackfree.otf',
      weight: '900',
    },
    {
      path: '/fonts/introcondlightfree.otf',
      weight: '300',
    },
  ],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});
