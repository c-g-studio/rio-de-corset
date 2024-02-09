import Image from 'next/image';
import { FC } from 'react';

export const CorsetsAnimate: FC = () => {
  return (
    <section>
      <div className="container">
        <ul className='flex'>
          <li>
            <Image src='/image/corsetsAnimate/top/01.png' width={208} height={183} alt='corset'/>
          </li>
          <li>
            <Image src='/image/corsetsAnimate/top/02.png' width={208} height={183} alt='corset'/>
          </li>
          <li>
            <Image src='/image/corsetsAnimate/top/03.png' width={208} height={183} alt='corset'/>
          </li>
          <li>
            <Image src='/image/corsetsAnimate/top/04.png' width={208} height={183} alt='corset'/>
          </li>
          <li>
            <Image src='/image/corsetsAnimate/top/05.png' width={208} height={183} alt='corset'/>
          </li>
          <li>
            <Image src='/image/corsetsAnimate/top/06.png' width={208} height={183} alt='corset'/>
          </li>
        </ul>
        <ul className='flex'>
          <li>
            <Image src='/image/corsetsAnimate/bottom/01.png' width={208} height={183} alt='corset'/>
          </li>
          <li>
            <Image src='/image/corsetsAnimate/bottom/02.png' width={208} height={183} alt='corset'/>
          </li>
          <li>
            <Image src='/image/corsetsAnimate/bottom/03.png' width={208} height={183} alt='corset'/>
          </li>
          <li>
            <Image src='/image/corsetsAnimate/bottom/04.png' width={208} height={183} alt='corset'/>
          </li>
          <li>
            <Image src='/image/corsetsAnimate/bottom/05.png' width={208} height={183} alt='corset'/>
          </li>
          <li>
            <Image src='/image/corsetsAnimate/bottom/06.png' width={208} height={183} alt='corset'/>
          </li>
        </ul>
      </div>
    </section>
  );
};
