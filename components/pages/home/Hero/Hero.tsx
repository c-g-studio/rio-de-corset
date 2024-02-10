import { inter } from '@/app/[locale]/fonts';
import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <section>
      <h1 className={`${inter.className}` }>Hello</h1>
    </section>
  );
};
